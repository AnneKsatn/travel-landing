<template>
  <div class="constructor-stats">
    <div class="stat-card">
      <div class="stat-value">100%</div>
      <div class="stat-label">{{ t('constructor.stats.budgetControl') }}</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">3</div>
      <div class="stat-label">{{ t('constructor.stats.levelsPerCategory') }}</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">∞</div>
      <div class="stat-label">{{ t('constructor.stats.combinations') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConstructorBlockStats',
  props: {
    t: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.constructor-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.stat-card {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(6, 182, 212, 0.08));
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: all 0.3s ease;
  transform: translateY(20px);
}

.stat-card.animate-in {
  animation: slideInRow 0.5s ease forwards;
}

.stat-card:nth-child(2) { animation-delay: 0.1s; }
.stat-card:nth-child(3) { animation-delay: 0.2s; }
.stat-card:nth-child(4) { animation-delay: 0.3s; }

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(139, 92, 246, 0.1);
}

.stat-value {
  font-size: 48px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 10px;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.4;
  font-weight: 500;
}

/* Адаптивность */
@media (max-width: 1200px) {
  .constructor-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .constructor-stats {
    grid-template-columns: 1fr;
  }
  
  .stat-value {
    font-size: 36px;
  }
  
  .stat-card {
    padding: 20px;
  }
}
</style>