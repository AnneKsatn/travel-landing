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
          <i class="fas fa-route"></i>
        </div>
        <h1 class="logo-title">
          <span class="trip">Trip</span>
          <span class="fy">fy</span>
          <span class="planner"> Planner</span>
        </h1>
        <p class="logo-subtitle">Планируйте путешествия с удовольствием</p>
      </div>

      <div class="benefits-showcase">
        <div class="benefit">
          <div class="benefit-icon">
            <i class="fas fa-compass"></i>
          </div>
          <div class="benefit-text">
            <strong>Персональный маршрут</strong>
            <span>С учетом ваших предпочтений</span>
          </div>
        </div>
        
        <div class="benefit">
          <div class="benefit-icon">
            <i class="fas fa-calculator"></i>
          </div>
          <div class="benefit-text">
            <strong>Честный бюджет</strong>
            <span>Без скрытых расходов</span>
          </div>
        </div>
      </div>

      <div class="trust-signals">
        <div class="trust-item">
          <i class="fas fa-users"></i>
          <span>42K+ довольных туристов</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.benefits-showcase {
  margin: 25px 0;
}

.benefit {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.benefit:last-child {
  margin-bottom: 0;
}

.benefit-icon {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  flex-shrink: 0;
}

.benefit-text {
  flex: 1;
}

.benefit-text strong {
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
}

.benefit-text span {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.3;
}

.trust-signals {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.trust-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.trust-item i {
  color: #fbbf24;
}
</style>

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
  background: linear-gradient(
    135deg,
    rgba(14, 165, 233, 0.9) 0%,
    rgba(139, 92, 246, 0.8) 100%
  );
  padding: 12px 20px 20px;
  border-radius: 0 0 30px 30px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.mobile-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.header-top {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
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
  padding: 6px 10px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  border-radius: 15px;
  transition: all 0.2s ease;
  min-width: 36px;
}

.lang-btn.active {
  background: white;
  color: var(--primary-dark);
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
}

.header-content {
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.mobile-logo {
  text-align: center;
  margin-bottom: 20px;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  color: white;
  font-size: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.logo-title {
  font-size: 32px;
  font-weight: 800;
  color: white;
  margin-bottom: 6px;
  letter-spacing: -0.5px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}

.logo-title .trip {
  font-size: 32px;
}

.logo-title .fy {
  font-size: 18px;
  align-self: flex-start;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  top: -2px;
}

.logo-title .planner {
  font-size: 32px;
  margin-left: 9px;
}

.logo-subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.mobile-stats-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 18px;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-divider {
  width: 1px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
}

.stat-number {
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin-bottom: 3px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 500;
}

/* Адаптивность для маленьких экранов */
@media (max-width: 350px) {
  .mobile-stats-bar {
    flex-direction: column;
    gap: 12px;
    padding: 12px;
  }

  .stat-divider {
    display: none;
  }

  .logo-title {
    font-size: 28px;
  }

  .logo-title .trip,
  .logo-title .planner {
    font-size: 28px;
  }

  .logo-title .fy {
    font-size: 16px;
    top: -1px;
  }
}

@media (max-width: 400px) {
  .language-switcher-mobile {
    gap: 5px;
  }

  .lang-btn {
    padding: 5px 8px;
    font-size: 15px;
    min-width: 32px;
  }

  .mobile-header {
    padding: 10px 16px 18px;
  }
}

/* Ховер-эффекты для десктопа */
@media (hover: hover) and (pointer: fine) {
  .lang-btn:hover {
    transform: scale(1.05);
  }
}
</style>
