
import { ref, computed, onMounted } from 'vue'
import { useLanguageStore } from './store'
import { detectBrowserLanguage, getSupportedLanguage } from './utils'
import { STORAGE_KEYS, DEFAULT_LANGUAGE } from './constants'

export function useLanguage() {
  const store = useLanguageStore()
  const isLoading = ref(false)

  // Текущий язык из хранилища
  const currentLanguage = computed(() => store.currentLanguage)
  const translations = computed(() => store.translations)
  const availableLanguages = computed(() => store.availableLanguages)

  // Инициализация языка при монтировании
  onMounted(async () => {
    await initializeLanguage()
  })

  // Инициализация языка
  async function initializeLanguage() {
    try {
      isLoading.value = true
      
      // 1. Проверяем сохраненный язык в localStorage
      const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE)
      
      // 2. Если есть сохраненный - используем его
      if (savedLang && store.isLanguageSupported(savedLang)) {
        await store.setLanguage(savedLang)
        return
      }
      
      // 3. Определяем язык браузера
      const browserLang = detectBrowserLanguage()
      const supportedLang = getSupportedLanguage(browserLang)
      
      // 4. Устанавливаем язык
      await store.setLanguage(supportedLang)
      
    } catch (error) {
      console.error('Error initializing language:', error)
      // 5. Фолбэк на язык по умолчанию
      await store.setLanguage(DEFAULT_LANGUAGE)
    } finally {
      isLoading.value = false
    }
  }

  // Смена языка
  async function changeLanguage(langCode) {
    try {
      isLoading.value = true
      await store.setLanguage(langCode)
      
      // Сохраняем в localStorage
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, langCode)
      
      // Можно добавить отправку события для других частей приложения
      window.dispatchEvent(new CustomEvent('language-changed', {
        detail: { language: langCode }
      }))
      
    } catch (error) {
      console.error('Error changing language:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  // Функция для получения перевода с поддержкой вложенных ключей
  function t(key, params = {}) {
    const keys = key.split('.')
    let value = translations.value
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key "${key}" not found for language "${currentLanguage.value.code}"`)
        return key // Возвращаем ключ, если перевод не найден
      }
    }
    
    // Подстановка параметров
    if (typeof value === 'string' && params) {
      return Object.keys(params).reduce((str, paramKey) => {
        return str.replace(new RegExp(`{{${paramKey}}}`, 'g'), params[paramKey])
      }, value)
    }
    
    return value || key
  }

  // Функция для форматирования чисел, дат, валют
  function formatNumber(number, options = {}) {
    return new Intl.NumberFormat(currentLanguage.value.code, options).format(number)
  }

  function formatDate(date, options = {}) {
    return new Intl.DateTimeFormat(currentLanguage.value.code, options).format(date)
  }

  function formatCurrency(amount, currency = 'RUB') {
    return new Intl.NumberFormat(currentLanguage.value.code, {
      style: 'currency',
      currency: currency
    }).format(amount)
  }

  return {
    // Состояние
    currentLanguage,
    translations,
    availableLanguages,
    isLoading,
    
    // Методы
    changeLanguage,
    t,
    formatNumber,
    formatDate,
    formatCurrency,
    
    // Утилиты
    initializeLanguage
  }
}