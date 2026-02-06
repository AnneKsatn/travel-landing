<template>
  <div class="feature-column">
    <div class="feature-card">
      <div class="feature-header">
        <div class="feature-icon">
          <i class="fas fa-edit"></i>
        </div>
        <h3 class="feature-title">{{ t('constructor.editExpenses') }}</h3>
        <p class="feature-subtitle">{{ t('ai.calculates') }}</p>
      </div>

      <ConstructorBlockDemoTable
        :t="t"
        :format-currency="formatCurrency"
      />

      <div class="feature-explanation">
        <ConstructorBlockExplanationItem
          :icon="'fas fa-pen-fancy'"
          :title="t('constructor.features.changeAmounts.title')"
          :description="t('constructor.features.changeAmounts.description', { amount: formatCurrency(2500) })"
        />
        
        <ConstructorBlockExplanationItem
          :icon="'fas fa-plus-square'"
          :title="t('constructor.features.addExpenses.title')"
          :description="t('constructor.features.addExpenses.description')"
        />
        
        <ConstructorBlockExplanationItem
          :icon="'fas fa-eye-slash'"
          :title="t('constructor.features.hideUnnecessary.title')"
          :description="t('constructor.features.hideUnnecessary.description')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ConstructorBlockDemoTable from './ConstructorBlockDemoTable.vue'
import ConstructorBlockExplanationItem from './ConstructorBlockExplanationItem.vue'

export default {
  name: 'ConstructorBlockFeatureEdit',
  components: {
    ConstructorBlockDemoTable,
    ConstructorBlockExplanationItem
  },
  props: {
    t: {
      type: Function,
      required: true
    },
    formatCurrency: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.feature-column {
  display: flex;
  flex-direction: column;
}

.feature-card {
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.1);
  height: 100%;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-header {
  margin-bottom: 30px;
  text-align: center;
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: var(--primary);
  font-size: 24px;
}

.feature-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}

.feature-subtitle {
  font-size: 16px;
  color: var(--text-light);
}

.feature-explanation {
  margin-top: 30px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .feature-card {
    padding: 20px;
  }
  
  .feature-title {
    font-size: 24px;
  }
}
</style>