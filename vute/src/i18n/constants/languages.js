
export const LANGUAGES = [
  {
    code: 'ru',
    name: 'Русский',
    nativeName: 'Русский',
    displayName: 'Русский',
    flagIcon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/ru.svg',
    enabled: true,
    rtl: false
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    displayName: 'English',
    flagIcon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg',
    enabled: true,
    rtl: false
  },
  {
    code: 'es',
    name: 'Español',
    nativeName: 'Español',
    displayName: 'Español',
    flagIcon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/es.svg',
    enabled: true,
    rtl: false
  },
  {
    code: 'de',
    name: 'Deutsch',
    nativeName: 'Deutsch',
    displayName: 'Deutsch',
    flagIcon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/de.svg',
    enabled: true,
    rtl: false
  },
  {
    code: 'fr',
    name: 'Français',
    nativeName: 'Français',
    displayName: 'Français',
    flagIcon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/fr.svg',
    enabled: true,
    rtl: false
  },
  {
    code: 'it',
    name: 'Italiano',
    nativeName: 'Italiano',
    displayName: 'Italiano',
    flagIcon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/it.svg',
    enabled: false, // Можно включить позже
    rtl: false
  },
  {
    code: 'zh',
    name: '中文',
    nativeName: '中文',
    displayName: '中文 (Chinese)',
    flagIcon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/cn.svg',
    enabled: false,
    rtl: false
  },
  {
    code: 'ja',
    name: '日本語',
    nativeName: '日本語',
    displayName: '日本語 (Japanese)',
    flagIcon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/jp.svg',
    enabled: false,
    rtl: false
  }
]

export const DEFAULT_LANGUAGE = LANGUAGES.find(lang => lang.code === 'ru')