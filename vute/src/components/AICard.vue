<template>
  <div class="luxury-card ai-card">
    <div class="budget-header">
      <div class="card-icon-container">
        <i class="fas fa-robot"></i>
      </div>
      <div>
        <h3 class="card-title">AI-планировщик</h3>
        <div class="card-subtitle">Умное планирование маршрута</div>
      </div>
    </div>
    
    <div class="ai-features">
      <div class="ai-feature" v-for="feature in features" :key="feature">
        <i class="fas fa-check-circle"></i>
        <span>{{ feature }}</span>
      </div>
    </div>
    
    <div class="accuracy-container">
      <div class="accuracy-label">Точность AI-расчётов:</div>
      <div class="accuracy-bar">
        <div class="accuracy-fill" :style="{ width: accuracy + '%' }"></div>
        <div class="accuracy-value">{{ accuracy }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AICard',
  data() {
    return {
      features: [
        'Учёт погоды и сезонности',
        'Анализ цен в реальном времени',
        'Персонализированные рекомендации',
        'Оптимизация под ваш бюджет'
      ],
      accuracy: 98.7
    }
  }
}
</script>

<style scoped>
.ai-card .ai-features {
    margin-top: 20px;
}

.ai-feature {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 14px;
    color: var(--text-light);
}

.ai-feature i {
    color: var(--accent);
    margin-right: 10px;
    font-size: 12px;
}

.accuracy-container {
    margin-top: 20px;
    padding: 15px;
    background: rgba(139, 92, 246, 0.05);
    border-radius: 12px;
}

.accuracy-label {
    font-size: 14px;
    color: var(--text-light);
    margin-bottom: 8px;
}

.accuracy-bar {
    display: flex;
    align-items: center;
    gap: 10px;
}

.accuracy-fill {
    flex-grow: 1;
    height: 8px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 4px;
    transition: width 0.5s ease;
}

.accuracy-value {
    font-weight: 700;
    color: var(--primary);
    font-size: 18px;
}
</style>