

import { createI18n } from 'vue-i18n'
import { useLanguageStore } from './store'
import { DEFAULT_LANGUAGE } from './constants'
import messages from './locales'

// Создаем экземпляр i18n
export const i18n = createI18n({
  locale: DEFAULT_LANGUAGE.code,
  fallbackLocale: DEFAULT_LANGUAGE.code,
  messages,
  legacy: false, // Composition API
  globalInjection: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false,
  
  // Дополнительные настройки
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD',
        notation: 'standard'
      }
    },
    ru: {
      currency: {
        style: 'currency',
        currency: 'RUB',
        notation: 'standard'
      }
    },
    // Добавьте форматы для других языков
  },
  
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      }
    },
    ru: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      }
    }
  }
})

// Плагин для Vue
export const i18nPlugin = {
  install(app) {
    app.use(i18n)
    
    // Делаем хранилище глобально доступным
    app.config.globalProperties.$languageStore = useLanguageStore()
    
    // Глобальные помощники
    app.config.globalProperties.$t = i18n.global.t
    app.config.globalProperties.$n = i18n.global.n
    app.config.globalProperties.$d = i18n.global.d
  }
}

// Экспорт утилит
export { useLanguage } from './useLanguage'
export { useLanguageStore } from './store'