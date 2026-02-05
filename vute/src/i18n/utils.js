

import { LANGUAGES, DEFAULT_LANGUAGE } from './constants'

/**
 * Определяет язык браузера
 * @returns {string} Код языка (например, 'ru', 'en-US')
 */
export function detectBrowserLanguage() {
  const nav = window.navigator
  const lang = (nav.language || nav.userLanguage || nav.browserLanguage || '')
    .toLowerCase()
    .replace('_', '-')
  
  return lang
}

/**
 * Преобразует язык браузера в поддерживаемый код
 * @param {string} browserLang - Язык из браузера
 * @returns {string} Поддерживаемый код языка
 */
export function getSupportedLanguage(browserLang) {
  if (!browserLang) return DEFAULT_LANGUAGE.code
  
  // Проверяем полный код (например, 'ru-RU')
  const fullMatch = LANGUAGES.find(lang => 
    lang.enabled && browserLang.startsWith(lang.code)
  )
  
  if (fullMatch) return fullMatch.code
  
  // Проверяем короткий код (например, 'ru')
  const shortCode = browserLang.split('-')[0]
  const shortMatch = LANGUAGES.find(lang => 
    lang.enabled && lang.code === shortCode
  )
  
  if (shortMatch) return shortMatch.code
  
  // Если язык не поддерживается, возвращаем язык по умолчанию
  return DEFAULT_LANGUAGE.code
}

/**
 * Загружает переводы для языка
 * @param {string} langCode - Код языка
 * @returns {Promise<Object>} Объект с переводами
 */
export async function loadTranslations(langCode) {
  try {
    const module = await import(`./locales/${langCode}.json`)
    return module.default || module
  } catch (error) {
    console.warn(`Translations for "${langCode}" not found, falling back to default`)
    const module = await import(`./locales/${DEFAULT_LANGUAGE.code}.json`)
    return module.default || module
  }
}

/**
 * Плагин для Vue, добавляющий $t, $n, $d в шаблоны
 */
export const translatePlugin = {
  install(app) {
    app.config.globalProperties.$t = function(key, params) {
      const store = this.$languageStore
      if (!store) return key
      
      const keys = key.split('.')
      let value = store.translations
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          return key
        }
      }
      
      if (typeof value === 'string' && params) {
        return Object.keys(params).reduce((str, paramKey) => {
          return str.replace(new RegExp(`{{${paramKey}}}`, 'g'), params[paramKey])
        }, value)
      }
      
      return value || key
    }
  }
}