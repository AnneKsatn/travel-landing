<template>
  <div class="mobile-header">
    <div class="header-top">
      <div class="language-switcher-mobile">
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="lang-btn"
          :class="{ active: language === lang.code }"
          @click="setLanguage(lang.code)"
          :title="lang.name"
        >
          {{ lang.flag }}
        </button>
      </div>
    </div>

    <div class="header-content">
      <div class="mobile-logo">
        <div class="logo-icon">
          <i class="fas fa-globe-americas"></i>
        </div>
        <h1>Tripfy Planner</h1>
        <p class="logo-subtitle">
          Конструктор идеального путешествия с AI. <br/> Мы верим, что планирование должно быть
          простым, а поездки — совершенными.
        </p>
      </div>

      <div class="mobile-stats-bar">
        <div class="stat-item">
          <div class="stat-number">42K+</div>
          <div class="stat-label">планов</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">98.7%</div>
          <div class="stat-label">точность</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2 мин</div>
          <div class="stat-label">создание</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileHeader",
  data() {
    return {
      language: "ru",
      languages: [
        { code: "ru", name: "Русский", flag: "🇷🇺" },
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "es", name: "Español", flag: "🇪🇸" },
        { code: "fr", name: "Français", flag: "🇫🇷" },
        { code: "de", name: "Deutsch", flag: "🇩🇪" },
      ],
    };
  },
  methods: {
    setLanguage(lang) {
      this.language = lang;
      this.$emit("language-changed", lang);
    },
  },
  emits: ["language-changed"],
};
</script>

<style scoped>
.mobile-header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  padding: 15px 20px 25px;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 4px 25px rgba(14, 165, 233, 0.2);
  margin-bottom: 20px;
}

.header-top {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.language-switcher-mobile {
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 5px;
}

.lang-btn {
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  border-radius: 15px;
  transition: all 0.2s ease;
  min-width: 40px;
}

.lang-btn.active {
  background: white;
  color: var(--primary-dark);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

.lang-btn:hover {
  transform: scale(1.05);
}

.header-content {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 40px;
}

.mobile-logo {
  text-align: center;
  margin-bottom: 25px;
}

.logo-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  color: white;
  font-size: 28px;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.mobile-logo h1 {
  font-size: 32px;
  font-weight: 800;
  color: white;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.logo-subtitle {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
}

.mobile-stats-bar {
  display: flex;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 22px;
  font-weight: 800;
  color: white;
  margin-bottom: 4px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 500;
}

/* Адаптивность для маленьких экранов */
@media (max-width: 350px) {
  .mobile-stats-bar {
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 400px) {
  .language-switcher-mobile {
    gap: 5px;
  }

  .lang-btn {
    padding: 6px 10px;
    font-size: 16px;
    min-width: 35px;
  }
}

/* Ховер-эффекты для десктопа */
@media (hover: hover) and (pointer: fine) {
  .lang-btn:hover {
    transform: scale(1.05);
  }
}
</style>
