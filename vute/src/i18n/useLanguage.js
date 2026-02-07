
import { ref, computed, onMounted } from 'vue'
import { useLanguageStore } from './store'
import { detectBrowserLanguage, getSupportedLanguage } from './utils'
import { STORAGE_KEYS, DEFAULT_LANGUAGE } from './constants'
import { updateAllSeoTags } from '../seo-utils'

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


  async function initializeLanguage() {
    try {
      isLoading.value = true

      // 1. Проверяем язык из window.__INITIAL_LANGUAGE__ (из скрипта в index.html)
      const initialLang = window.__INITIAL_LANGUAGE__;

      console.log('🔄 Initializing language from:', {
        initialLang,
        hasWindow: !!window.__INITIAL_LANGUAGE__,
        saved: localStorage.getItem(STORAGE_KEYS.LANGUAGE)
      });

      // 2. Если есть initial язык и он поддерживается - используем его
      if (initialLang && store.isLanguageSupported(initialLang)) {
        console.log('✅ Using initial language:', initialLang);
        await store.setLanguage(initialLang);

        // ОБНОВЛЯЕМ МЕТА-ТЕГИ
        updateMetaTags(initialLang);

        // Сохраняем в localStorage для будущих посещений
        localStorage.setItem(STORAGE_KEYS.LANGUAGE, initialLang);
        return;
      }

      // 3. Если нет - проверяем сохраненный язык в localStorage
      const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE)

      if (savedLang && store.isLanguageSupported(savedLang)) {
        console.log('✅ Using saved language:', savedLang);
        await store.setLanguage(savedLang);

        // ОБНОВЛЯЕМ МЕТА-ТЕГИ
        updateMetaTags(savedLang);

        return;
      }

      // 4. Определяем язык браузера (fallback)
      const browserLang = detectBrowserLanguage();
      const supportedLang = getSupportedLanguage(browserLang);

      console.log('🌐 Using browser detected language:', supportedLang);

      // 5. Устанавливаем язык
      await store.setLanguage(supportedLang);

      // ОБНОВЛЯЕМ МЕТА-ТЕГИ
      updateMetaTags(supportedLang);

      // Сохраняем для будущих посещений
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, supportedLang);

    } catch (error) {
      console.error('❌ Error initializing language:', error);
      // 6. Фолбэк на язык по умолчанию
      await store.setLanguage(DEFAULT_LANGUAGE);

      // ОБНОВЛЯЕМ МЕТА-ТЕГИ ДЛЯ ЯЗЫКА ПО УМОЛЧАНИЮ
      updateMetaTags(DEFAULT_LANGUAGE.code);

    } finally {
      isLoading.value = false;
    }
  }

  // Функция для обновления SEO мета-тегов при смене языка
  function updateMetaTags(langCode) {
    try {
      // SEO данные для всех языков
      const seoData = {
        ru: {
          title: 'Planify — ИИ-помощник для планирования путешествий | Маршруты, Бюджет, Советы',
          description: '🔥 Создайте идеальный маршрут за 5 минут! ИИ подберет достопримечательности, рассчитает бюджет, найдет отели. Бесплатный планировщик путешествий.',
        },
        en: {
          title: 'Planify — AI Travel Planner | Itineraries, Budget, Tips & Hotels',
          description: '🔥 Create perfect travel itinerary in 5 minutes! AI suggests attractions, calculates budget, finds hotels. Free travel planning assistant.',
        },
        es: {
          title: 'Planify — Asistente IA para Viajes | Rutas, Presupuesto, Consejos',
          description: '🔥 ¡Crea la ruta de viaje perfecta en 5 minutos! IA sugiere atracciones, calcula presupuesto, encuentra hoteles. Asistente gratuito de viajes.',
        },
        de: {
          title: 'Planify — KI-Reiseplaner | Routen, Budget, Tipps & Hotels',
          description: '🔥 Erstellen Sie in 5 Minuten die perfekte Reiseroute! KI schlägt Sehenswürdigkeiten vor, kalkuliert Budget, findet Hotels. Kostenloser Reiseplaner.',
        },
        fr: {
          title: 'Planify — Assistant IA pour Voyages | Itinéraires, Budget, Conseils',
          description: '🔥 Créez un itinéraire de voyage parfait en 5 minutes ! IA suggère attractions, calcule budget, trouve hôtels. Assistant de voyage gratuit.',
        },
        zh: {
          title: 'Planify — AI旅行规划助手 | 路线, 预算, 酒店推荐',
          description: '🔥 5分钟创建完美旅行路线！AI推荐景点、计算预算、查找酒店。免费旅行规划助手。',
        },
        ja: {
          title: 'Planify — AI旅行計画アシスタント | 旅程, 予算, ホテル',
          description: '🔥 5分で完璧な旅行プランを作成！AIが観光地を提案、予算を計算、ホテルを検索。無料旅行計画アシスタント。',
        }
      };

      // Используем нашу улучшенную функцию из seo-utils
      updateAllSeoTags(langCode, seoData);

      console.log('✅ Updated all SEO tags for language:', langCode);

    } catch (error) {
      console.error('❌ Error updating SEO tags:', error);
    }
  }

  // Смена языка
  async function changeLanguage(langCode) {
    try {
      console.log('🔄 Changing language to:', langCode);
      isLoading.value = true;

      // 1. Устанавливаем язык в store
      await store.setLanguage(langCode);

      // 2. Сохраняем в localStorage
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, langCode);

      // 3. Обновляем SEO мета-теги
      updateMetaTags(langCode);

      // 4. Отправляем событие для других частей приложения
      window.dispatchEvent(new CustomEvent('language-changed', {
        detail: { language: langCode }
      }));

      console.log('✅ Language changed successfully to:', langCode);

    } catch (error) {
      console.error('❌ Error changing language:', error);
      throw error;
    } finally {
      isLoading.value = false;
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