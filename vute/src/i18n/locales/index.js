
// Динамический импорт всех файлов переводов
const locales = {
  ru: () => import('./ru.json'),
  en: () => import('./en.json')
//   es: () => import('./es.json'),
//   de: () => import('./de.json'),
//   fr: () => import('./fr.json')
}

// Функция для загрузки переводов
export async function loadTranslations(langCode) {
  const loader = locales[langCode]
  if (!loader) {
    throw new Error(`Translations for "${langCode}" not found`)
  }
  
  try {
    const module = await loader()
    return module.default || module
  } catch (error) {
    console.error(`Failed to load translations for ${langCode}:`, error)
    throw error
  }
}

// Экспорт для vue-i18n
const messages = {}
export default messages

// Предзагрузка основных языков
if (typeof window !== 'undefined') {
  Promise.all([
    loadTranslations('ru'),
    loadTranslations('en')
  ]).then(([ru, en]) => {
    Object.assign(messages, { ru, en })
  })
}