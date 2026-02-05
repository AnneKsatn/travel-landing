<template>
  <header class="luxury-text-section">
    <LanguageSwitcher
      class="language-switcher-header"
      @language-changed="$emit('language-changed', $event)"
    />

    <!-- Логотип -->
    <div class="luxury-logo">
      <div class="logo-orb floating">
        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M21 12.79C21 17.62 17.62 21 12.79 21C10.45 21 8.3 20 6.89 18.3C5.47 16.6 4.78 14.45 4.78 12.3C4.78 8.45 8.12 5.1 12 5.1C15.88 5.1 19.22 8.45 19.22 12.3C19.22 14.45 18.53 16.6 17.11 18.3C15.7 20 13.55 21 11.21 21C6.38 21 3 17.62 3 12.79C3 8.67 5.8 5.2 9.5 4.3"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path d="M12 3V7" stroke-width="1.5" stroke-linecap="round" />
          <path d="M15 4L13 8" stroke-width="1.5" stroke-linecap="round" />
          <path d="M9 4L11 8" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </div>

      <div class="logo-content">
        <h1 class="luxury-logo-text">TravelGenius</h1>
        <div class="logo-slogan">
          Мы верим, что планирование должно быть простым, а поездки — совершенными.
        </div>
      </div>
    </div>

    <!-- Главный заголовок -->
    <h2 class="luxury-headline">
      Ваше идеальное путешествие
      <span class="ai-highlight">
        <span class="ai-text">спланирует AI</span>
      </span>
    </h2>

    <!-- Описание -->
    <p class="luxury-main-text">
      Искусственный интеллект создаст персонализированный маршрут, рассчитает точный
      бюджет и спланирует каждый день вашего путешествия.
    </p>

    <!-- Кнопки CTA -->
    <div class="luxury-cta">
      <button class="cta-primary" @click="$emit('start-planning')">
        <span class="cta-text">Начать планирование</span>
        <span class="cta-icon">→</span>
      </button>
    </div>
  </header>
</template>
<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default {
  name: "LuxuryHeader",
  emits: ["start-planning"],
  components: {
    LanguageSwitcher,
  },
};
</script>

<style scoped>
/* Базовые стили */
.luxury-text-section {
  padding-right: 40px;
  position: relative;
}

/* Логотип */
.luxury-logo {
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  gap: 20px;
}

.logo-orb {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 20px 40px rgba(139, 92, 246, 0.15),
    0 0 60px rgba(139, 92, 246, 0.1);
  position: relative;
  overflow: hidden;
}

.logo-orb::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
  border-radius: 50%;
  z-index: 1;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: white;
  stroke-width: 1.5;
  z-index: 2;
  position: relative;
}

@keyframes orbGlow {
  0%,
  100% {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 20px 40px rgba(139, 92, 246, 0.15),
      0 0 60px rgba(139, 92, 246, 0.1);
  }
  50% {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15), 0 25px 50px rgba(139, 92, 246, 0.2),
      0 0 80px rgba(139, 92, 246, 0.15);
  }
}

.logo-orb {
  animation: orbGlow 4s ease-in-out infinite;
}

.luxury-logo-text {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

/* Подзаголовок */
.luxury-subtitle {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 60px;
}

.subtitle-dot {
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  position: relative;
}

.subtitle-dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border: 1px solid var(--primary);
  border-radius: 50%;
  opacity: 0.3;
}

.subtitle-text {
  font-size: 16px;
  color: var(--text-light);
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.8;
}

/* Главный заголовок */
.luxury-headline {
  font-size: 52px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 30px;
  color: var(--text);
  letter-spacing: -0.02em;
}

.ai-highlight {
  display: inline-block;
  position: relative;
}

.ai-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
}

/* Описание */
.luxury-main-text {
  font-size: 18px;
  line-height: 1.5;
  color: var(--text-light);
  margin-bottom: 60px;
  max-width: 500px;
  font-weight: 400;
  position: relative;
  padding-left: 5px;
}

/* Кнопки CTA */
.luxury-cta {
  display: flex;
  gap: 20px;
  align-items: center;
}

.cta-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  padding: 20px 44px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2), 0 8px 30px rgba(6, 182, 212, 0.15);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 220px;
}

.cta-primary::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 50px;
  z-index: 1;
}

.cta-primary::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 50px;
}

.cta-primary:hover::after {
  opacity: 1;
}

.cta-text,
.cta-icon {
  position: relative;
  z-index: 2;
  transition: transform 0.4s ease;
}

.cta-icon {
  font-size: 20px;
  font-weight: 300;
}

.cta-primary:hover .cta-text {
  transform: translateX(-4px);
}

.cta-primary:hover .cta-icon {
  transform: translateX(8px);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.25), 0 12px 40px rgba(6, 182, 212, 0.2);
}

/* Анимации */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(5deg);
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

/* Адаптивность */
@media (max-width: 1200px) {
  .luxury-text-section {
    padding-right: 0;
    text-align: center;
  }

  .luxury-logo {
    justify-content: center;
  }

  .luxury-subtitle {
    justify-content: center;
  }

  .luxury-main-text {
    padding-left: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .luxury-main-text::before {
    display: none;
  }

  .luxury-cta {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .luxury-headline {
    font-size: 36px;
  }

  .luxury-logo {
    margin-bottom: 30px;
  }

  .luxury-logo-text {
    font-size: 28px;
  }

  .logo-orb {
    width: 60px;
    height: 60px;
  }

  .luxury-subtitle {
    margin-bottom: 40px;
  }

  .luxury-main-text {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .cta-primary {
    padding: 18px 36px;
    min-width: auto;
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}

/* Базовые стили */
.luxury-text-section {
  padding-right: 40px;
  position: relative;
}

/* Логотип */
.luxury-logo {
  display: flex;
  align-items: flex-start;
  margin-bottom: 70px;
  gap: 20px;
}

.logo-orb {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 20px 40px rgba(139, 92, 246, 0.15),
    0 0 60px rgba(139, 92, 246, 0.1);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.logo-orb::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
  border-radius: 50%;
  z-index: 1;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: white;
  stroke-width: 1.5;
  z-index: 2;
  position: relative;
}

.logo-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.luxury-logo-text {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  line-height: 1;
}

.logo-slogan {
  font-size: 15px;
  line-height: 1.5;
  color: var(--text-light);
  font-weight: 400;
  font-style: italic;
  opacity: 0.8;
  max-width: 500px;
  position: relative;
  padding-left: 16px;
}

.logo-slogan::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--primary) 30%,
    var(--secondary) 70%,
    transparent 100%
  );
  border-radius: 1px;
}

.language-switcher-header {
  margin-bottom: 40px;
}
</style>
