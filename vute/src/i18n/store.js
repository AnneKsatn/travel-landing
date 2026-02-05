

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loadTranslations } from './locales'
import { LANGUAGES, DEFAULT_LANGUAGE } from './constants'

export const useLanguageStore = defineStore('language', () => {
  // Состояние
  const currentLangCode = ref(DEFAULT_LANGUAGE.code)
  const translationData = ref({})
  const isLoading = ref(false)

  // Геттеры
  const currentLanguage = computed(() => {
    return LANGUAGES.find(lang => lang.code === currentLangCode.value) || DEFAULT_LANGUAGE
  })

  const translations = computed(() => translationData.value)
  
  const availableLanguages = computed(() => {
    return LANGUAGES.filter(lang => lang.enabled)
  })

  // Методы
  function isLanguageSupported(langCode) {
    return LANGUAGES.some(lang => lang.code === langCode && lang.enabled)
  }

  async function setLanguage(langCode) {
    if (!isLanguageSupported(langCode)) {
      throw new Error(`Language "${langCode}" is not supported`)
    }

    try {
      isLoading.value = true
      
      // Загружаем переводы для выбранного языка
      const translations = await loadTranslations(langCode)
      
      // Обновляем состояние
      currentLangCode.value = langCode
      translationData.value = translations
      
      // Устанавливаем атрибут lang для HTML
      document.documentElement.lang = langCode
      
      // Устанавливаем направление текста
      const direction = langCode === 'ar' || langCode === 'he' ? 'rtl' : 'ltr'
      document.documentElement.dir = direction
      
      console.log(`Language changed to: ${langCode}`)
      
    } catch (error) {
      console.error(`Failed to load translations for ${langCode}:`, error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  // Инициализация
  async function initialize() {
    await setLanguage(DEFAULT_LANGUAGE.code)
  }

  return {
    // Состояние
    currentLangCode,
    translationData,
    isLoading,
    
    // Геттеры
    currentLanguage,
    translations,
    availableLanguages,
    
    // Методы
    setLanguage,
    isLanguageSupported,
    initialize
  }
})