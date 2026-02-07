// Утилиты для SEO оптимизации

// Генерация JSON-LD структурированных данных
export function generateJsonLd(langCode) {
  const translations = {
    ru: {
      name: "Planify — ИИ-помощник для планирования путешествий",
      description: "Искусственный интеллект для создания маршрутов, расчета бюджета и подбора отелей. Бесплатный планировщик путешествий.",
      keywords: ["планирование путешествий", "маршрут", "бюджет", "отели", "достопримечательности"],
      featureList: [
        "Генератор уникальных маршрутов",
        "Калькулятор бюджета поездки",
        "Подбор отелей и ресторанов",
        "Планировщик чемодана",
        "Рекомендации достопримечательностей",
        "Советы путешественникам",
        "Мультиязычная поддержка",
        "Расчет стоимости в реальном времени"
      ]
    },
    en: {
      name: "Planify — AI Travel Planning Assistant",
      description: "Artificial intelligence for creating itineraries, calculating budgets and finding hotels. Free travel planner.",
      keywords: ["travel planning", "itinerary", "budget", "hotels", "attractions"],
      featureList: [
        "AI Route Generator",
        "Travel Budget Calculator",
        "Hotel & Restaurant Finder",
        "Packing List Creator",
        "Attraction Recommendations",
        "Travel Tips & Advice",
        "Multi-language Support",
        "Real-time Cost Estimation"
      ]
    },
    // Добавьте другие языки по аналогии
  };

  const data = translations[langCode] || translations.en;
  
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": data.name,
    "applicationCategory": "TravelApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": data.description,
    "keywords": data.keywords.join(", "),
    "featureList": data.featureList,
    "author": {
      "@type": "Organization",
      "name": "Planify",
      "url": "https://planify.app"
    },
    "url": "https://planify.app",
    "inLanguage": langCode
  };
}

// Обновление JSON-LD на странице
export function updateJsonLd(langCode) {
  // Удаляем старый JSON-LD если есть
  const oldJsonLd = document.querySelector('script[type="application/ld+json"]');
  if (oldJsonLd) {
    oldJsonLd.remove();
  }
  
  // Создаем новые структурированные данные
  const jsonLdData = generateJsonLd(langCode);
  
  // Создаем новый script элемент
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLdData, null, 2);
  
  // Добавляем в head
  document.head.appendChild(script);
  
  console.log('✅ Updated JSON-LD for language:', langCode);
}

// Обновление всех SEO-тегов
export function updateAllSeoTags(langCode, seoData) {
  // 1. Обновляем атрибут lang
  document.documentElement.lang = langCode;
  
  // 2. Обновляем title и description
  const data = seoData[langCode] || seoData.en;
  
  if (data.title) document.title = data.title;
  
  // 3. Обновляем meta description
  updateMetaTag('description', data.description);
  
  // 4. Обновляем Open Graph
  updateMetaTag('og:title', data.title, 'property');
  updateMetaTag('og:description', data.description, 'property');
  updateMetaTag('og:locale', langCode, 'property');
  
  // 5. Обновляем canonical URL
  updateCanonicalUrl(langCode);
  
  // 6. Обновляем JSON-LD
  updateJsonLd(langCode);
}

// Вспомогательная функция для обновления meta-тегов
function updateMetaTag(name, content, attribute = 'name') {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  
  tag.content = content;
}

// Обновление canonical URL
function updateCanonicalUrl(langCode) {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = langCode === 'en' 
    ? 'https://planify.app' 
    : `https://planify.app?lang=${langCode}`;
}