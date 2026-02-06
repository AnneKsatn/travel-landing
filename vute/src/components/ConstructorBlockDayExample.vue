<template>
  <!-- Пример выбора категорий для дня -->
  <div class="day-example">
    <div class="day-header">
      <h4>{{ t('constructor.demo.dayTitle', { day: 3, destination: 'Санторини' }) }}</h4>
      <div class="day-total">
        {{ t('expenses.total') }}: <span class="total-amount">{{ formatCurrency(12400) }}</span>
      </div>
    </div>

    <!-- Категория "Отель" -->
    <div class="category-selector">
      <div class="category-header">
        <i class="fas fa-hotel"></i>
        <div class="category-info">
          <div class="category-name">{{ t('constructor.demo.accommodation') }}</div>
          <div class="category-status">
            {{ t('constructor.demo.aiRecommends') }} <span class="ai-choice">{{ t('constructor.demo.levels.standard') }}</span>
          </div>
        </div>
        <div class="category-price">{{ formatCurrency(6400) }}</div>
      </div>
      
      <div class="category-options">
        <div class="option" :class="{ 'selected': selectedOptions.hotel === 'budget' }">
          <div class="option-label">
            <span class="option-name">{{ t('constructor.demo.levels.economy') }}</span>
            <span class="option-price">{{ formatCurrency(4200) }}</span>
          </div>
          <div class="option-status" v-if="selectedOptions.hotel === 'budget'">
            <i class="fas fa-check-circle"></i>
            {{ t('constructor.demo.yourChoice') }}
          </div>
        </div>
        
        <div class="option" :class="{ 'selected': selectedOptions.hotel === 'standard' }">
          <div class="option-label">
            <span class="option-name">{{ t('constructor.demo.levels.standard') }}</span>
            <span class="option-price">{{ formatCurrency(6400) }}</span>
          </div>
          <div class="option-status" v-if="selectedOptions.hotel === 'standard'">
            <i class="fas fa-robot"></i>
            {{ t('constructor.demo.aiRecommendsLabel') }}
          </div>
        </div>
        
        <div class="option" :class="{ 'selected': selectedOptions.hotel === 'comfort' }">
          <div class="option-label">
            <span class="option-name">{{ t('constructor.demo.levels.comfort') }}</span>
            <span class="option-price">{{ formatCurrency(9800) }}</span>
          </div>
          <div class="option-status" v-if="selectedOptions.hotel === 'comfort'">
            <i class="fas fa-check-circle"></i>
            {{ t('constructor.demo.yourChoice') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConstructorBlockDayExample',
  props: {
    t: {
      type: Function,
      required: true
    },
    formatCurrency: {
      type: Function,
      required: true
    },
    selectedOptions: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.day-example {
  background: rgba(16, 185, 129, 0.03);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 25px;
  border: 1px solid rgba(16, 185, 129, 0.1);
}

.day-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.day-header h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.day-total {
  font-size: 14px;
  color: var(--text-light);
}

.total-amount {
  font-weight: 700;
  color: var(--primary);
  font-size: 18px;
  margin-left: 5px;
}

/* Селектор категорий */
.category-selector {
  margin-bottom: 20px;
  transform: translateY(10px);
}

.category-selector.animate-in {
  animation: slideInRow 0.5s ease forwards;
}

.category-selector:nth-child(2) { animation-delay: 0.1s; }
.category-selector:nth-child(3) { animation-delay: 0.2s; }

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
}

.category-header i {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 16px;
}

.category-info {
  flex: 1;
}

.category-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}

.category-status {
  font-size: 12px;
  color: var(--text-light);
}

.ai-choice {
  font-weight: 600;
  color: var(--primary);
}

.category-price {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}

.category-options {
  display: flex;
  gap: 8px;
}

.option {
  flex: 1;
  padding: 12px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  background: white;
  transition: all 0.2s ease;
  cursor: pointer;
}

.option:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.option.selected {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.option-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.option-name {
  font-weight: 600;
}

.option-price {
  font-weight: 700;
}

.option.selected .option-price {
  color: rgba(255, 255, 255, 0.9);
}

.option-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  margin-top: 8px;
  opacity: 0.8;
}

.option-status i {
  font-size: 10px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .category-options {
    flex-direction: column;
  }
  
  .day-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .day-total {
    align-self: flex-end;
  }
}
</style>