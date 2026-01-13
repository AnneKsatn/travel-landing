<template>
  <div class="luxury-text-section">
    <div class="luxury-logo">
      <div class="logo-orb floating">
        <i class="fas fa-globe-americas logo-icon"></i>
      </div>
      <div class="luxury-logo-text">TravelGenius</div>
    </div>

    <div class="luxury-subtitle">Искусство идеального путешествия</div>

    <h1 class="luxury-headline">
      Ваше идеальное путешествие <span class="ai-highlight">спланирует AI</span>
    </h1>

    <p class="luxury-main-text">
      Искусственный интеллект, созданный с душой для ваших самых запоминающихся
      путешествий. Мы верим, что планирование должно быть простым, а поездки —
      совершенными.
    </p>

    <div class="luxury-cta">
      <button class="cta-primary" @click="$emit('start-planning')">
        Начать планирование
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LuxuryHeader",
  emits: ["start-planning", "learn-more"],
};
</script>

<style scoped>
/* Стили для левой части */
.luxury-text-section {
  padding-right: 30px;
}

.luxury-logo {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.logo-orb {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  box-shadow: var(--neon-glow), 0 0 40px rgba(139, 92, 246, 0.2);
  animation: orbGlow 3s infinite alternate;
}

@keyframes orbGlow {
  0% {
    box-shadow: 0 0 20px var(--primary-glow), 0 0 40px rgba(139, 92, 246, 0.2);
  }
  100% {
    box-shadow: 0 0 30px var(--primary-glow), 0 0 60px rgba(139, 92, 246, 0.3);
  }
}

.logo-icon {
  color: white;
  font-size: 28px;
}

.luxury-logo-text {
  font-size: 42px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.luxury-subtitle {
  font-size: 18px;
  color: var(--text-light);
  font-weight: 400;
  letter-spacing: 4px;
  margin-bottom: 50px;
  text-transform: uppercase;
  position: relative;
  padding-left: 15px;
}

.luxury-subtitle:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
}

.luxury-headline {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #0f172a, #334155);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.luxury-main-text {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 50px;
  max-width: 500px;
  font-weight: 400;
}

.luxury-cta {
  display: flex;
  gap: 20px;
  align-items: center;
}

.cta-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  padding: 22px 48px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
}

.cta-primary:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.cta-primary:hover:before {
  left: 100%;
}

.cta-primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(139, 92, 246, 0.3);
}

.cta-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 20px 36px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.cta-secondary:hover {
  background: rgba(139, 92, 246, 0.05);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(139, 92, 246, 0.15);
}
</style>
