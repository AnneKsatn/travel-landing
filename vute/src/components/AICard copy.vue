<template>
  <div class="luxury-card ai-card">
    <div class="card-header">
      <div class="header-left">
        <div class="card-icon">
          <i class="fas fa-robot"></i>
        </div>
        <div>
          <h3 class="card-title">AI-планировщик</h3>
          <div class="card-subtitle">Динамический подбор под ваш бюджет</div>
        </div>
      </div>
      <div class="total-badge">
        {{ formatCurrency(totalBudget) }}
      </div>
    </div>

    <div class="ai-controls">
      <!-- Бюджетный слайдер -->
      <div class="budget-control">
        <div class="control-label">
          <i class="fas fa-coins"></i>
          <span>Ваш бюджет:</span>
          <span class="budget-value">{{ formatCurrency(userBudget) }}</span>
        </div>
        <div class="budget-slider">
          <input 
            type="range" 
            v-model.number="userBudget"
            :min="minBudget"
            :max="maxBudget"
            :step="budgetStep"
            class="slider-input"
            @input="updateOptions"
          />
          <div class="slider-labels">
            <span>50K</span>
            <span>100K</span>
            <span>150K</span>
            <span>200K</span>
          </div>
        </div>
      </div>

      <!-- Категории с выбором уровня -->
      <div class="category-controls">
        <div 
          class="category-item" 
          v-for="category in categories" 
          :key="category.id"
          :class="{ active: category.selectedOption === selectedOptions[category.id] }"
        >
          <div class="category-header">
            <div class="category-icon">
              <i :class="category.icon"></i>
            </div>
            <div class="category-info">
              <div class="category-name">{{ category.name }}</div>
              <div class="category-price">
                {{ formatCurrency(selectedOptions[category.id]?.price || 0) }}
              </div>
            </div>
          </div>
          
          <div class="category-options">
            <button 
              v-for="option in category.options" 
              :key="option.id"
              class="option-btn"
              :class="{ 
                selected: selectedOptions[category.id]?.id === option.id,
                affordable: isOptionAffordable(category.id, option)
              }"
              @click="selectOption(category.id, option)"
              :title="option.description"
            >
              <span class="option-label">{{ option.label }}</span>
              <span class="option-price">{{ formatCurrency(option.price) }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="ai-summary">
      <div class="summary-item">
        <div class="summary-label">Текущие расходы:</div>
        <div class="summary-value">{{ formatCurrency(totalCost) }}</div>
      </div>
      <div class="summary-item" :class="budgetStatusClass">
        <div class="summary-label">{{ budgetStatusLabel }}:</div>
        <div class="summary-value">{{ formatCurrency(budgetDifference) }}</div>
      </div>
      
      <button 
        class="optimize-btn" 
        @click="optimizeBudget"
        :disabled="isOptimizing"
      >
        <i class="fas fa-magic"></i>
        {{ isOptimizing ? 'AI оптимизирует...' : 'AI оптимизировать' }}
      </button>
    </div>

    <div class="ai-insight">
      <div class="insight-icon">
        <i class="fas fa-lightbulb"></i>
      </div>
      <div class="insight-text">
        AI подберёт <strong>альтернативные варианты</strong> и пересчитает бюджет за секунду
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AICard',
  data() {
    return {
      userBudget: 100000,
      minBudget: 50000,
      maxBudget: 200000,
      budgetStep: 5000,
      isOptimizing: false,
      
      categories: [
        {
          id: 'accommodation',
          name: 'Проживание',
          icon: 'fas fa-hotel',
          options: [
            { id: 'budget', label: 'Хостел', price: 12000, description: 'Общая комната, Wi-Fi, завтрак' },
            { id: 'standard', label: 'Отель 3*', price: 25000, description: 'Свой санузел, кондиционер, завтрак' },
            { id: 'comfort', label: 'Отель 4*', price: 42000, description: 'Бассейн, спа, ресторан' },
            { id: 'luxury', label: 'Отель 5*', price: 75000, description: 'Вилла, приватный пляж, всё включено' }
          ]
        },
        {
          id: 'food',
          name: 'Питание',
          icon: 'fas fa-utensils',
          options: [
            { id: 'budget', label: 'Эконом', price: 15000, description: 'Кафе, стрит-фуд, готовим сами' },
            { id: 'standard', label: 'Стандарт', price: 25000, description: 'Рестораны средней ценовой категории' },
            { id: 'comfort', label: 'Премиум', price: 40000, description: 'Гастрономические рестораны' },
            { id: 'luxury', label: 'Люкс', price: 60000, description: 'Мишленовские рестораны' }
          ]
        },
        {
          id: 'transport',
          name: 'Транспорт',
          icon: 'fas fa-car',
          options: [
            { id: 'budget', label: 'Общественный', price: 5000, description: 'Метро, автобусы, такси при необходимости' },
            { id: 'standard', label: 'Такси', price: 15000, description: 'Такси для основных перемещений' },
            { id: 'comfort', label: 'Аренда авто', price: 30000, description: 'Автомобиль среднего класса' },
            { id: 'luxury', label: 'VIP-трансфер', price: 50000, description: 'Водитель, лимузин, вертолёт' }
          ]
        }
      ],
      
      // Начальные выбранные опции (средние)
      selectedOptions: {
        accommodation: { id: 'standard', label: 'Отель 3*', price: 25000 },
        food: { id: 'standard', label: 'Стандарт', price: 25000 },
        transport: { id: 'standard', label: 'Такси', price: 15000 }
      }
    }
  },
  computed: {
    totalCost() {
      return Object.values(this.selectedOptions).reduce((sum, option) => sum + option.price, 0)
    },
    totalBudget() {
      // Базовые расходы + выбранные опции
      const baseCost = 35000 // Авиабилеты, страховка, виза и т.д.
      return baseCost + this.totalCost
    },
    budgetDifference() {
      return this.userBudget - this.totalBudget
    },
    budgetStatusClass() {
      return this.budgetDifference >= 0 ? 'positive' : 'negative'
    },
    budgetStatusLabel() {
      return this.budgetDifference >= 0 ? 'Осталось' : 'Перерасход'
    }
  },
  methods: {
    formatCurrency(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽'
    },
    
    selectOption(categoryId, option) {
      this.selectedOptions[categoryId] = { ...option }
      this.$emit('option-changed', { categoryId, option, total: this.totalBudget })
    },
    
    isOptionAffordable(categoryId, option) {
      // Проверяем, вписывается ли опция в бюджет
      const currentTotal = this.totalCost
      const currentOptionPrice = this.selectedOptions[categoryId]?.price || 0
      const newTotal = currentTotal - currentOptionPrice + option.price
      const baseCost = 35000
      
      return (baseCost + newTotal) <= this.userBudget
    },
    
    updateOptions() {
      // AI автоматически подбирает оптимальные опции под бюджет
      this.categories.forEach(category => {
        // Находим самую дорогую доступную опцию
        const affordableOptions = category.options.filter(option => 
          this.isOptionAffordable(category.id, option)
        )
        
        if (affordableOptions.length > 0) {
          // AI логика: выбираем оптимальную опцию (не самую дешёвую, но и не самую дорогую)
          const optimalIndex = Math.min(
            Math.floor(affordableOptions.length / 2),
            affordableOptions.length - 1
          )
          this.selectOption(category.id, affordableOptions[optimalIndex])
        } else {
          // Если ничего не подходит, выбираем самую дешёвую
          this.selectOption(category.id, category.options[0])
        }
      })
    },
    
    optimizeBudget() {
      this.isOptimizing = true
      
      // Имитация работы AI по оптимизации
      setTimeout(() => {
        // AI ищет лучшие варианты в рамках бюджета
        this.categories.forEach(category => {
          // AI анализирует и выбирает оптимальное соотношение цены и качества
          const optimalOption = category.options.find(option => 
            this.isOptionAffordable(category.id, option) && 
            option.id === 'standard' // AI предпочитает стандартные варианты
          ) || category.options[0]
          
          this.selectOption(category.id, optimalOption)
        })
        
        this.isOptimizing = false
        this.$emit('budget-optimized', {
          budget: this.userBudget,
          optimizedTotal: this.totalBudget,
          saved: Math.max(0, this.budgetDifference)
        })
        
      }, 1500)
    }
  },
  mounted() {
    // Инициализируем опции на основе стартового бюджета
    this.updateOptions()
  },
  emits: ['option-changed', 'budget-optimized']
}
</script>

<style scoped>
.ai-card {
  padding: 20px;
  min-height: auto;
  height: fit-content;
  min-height: 320px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 18px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 2px;
}

.card-subtitle {
  font-size: 12px;
  color: var(--text-light);
}

.total-badge {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* Управление бюджетом */
.ai-controls {
  margin-bottom: 20px;
}

.budget-control {
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(139, 92, 246, 0.05);
  border-radius: 12px;
}

.control-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-light);
  margin-bottom: 12px;
}

.control-label i {
  color: var(--primary);
}

.budget-value {
  font-weight: 700;
  color: var(--primary);
  font-size: 16px;
  margin-left: auto;
}

.budget-slider {
  position: relative;
}

.slider-input {
  width: 100%;
  height: 8px;
  -webkit-appearance: none;
  background: linear-gradient(90deg, 
    rgba(139, 92, 246, 0.2), 
    rgba(139, 92, 246, 0.8)
  );
  border-radius: 4px;
  outline: none;
}

.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: white;
  border: 3px solid var(--primary);
  cursor: pointer;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 10px;
  color: var(--text-light);
  padding: 0 5px;
}

/* Категории с опциями */
.category-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.category-item {
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 10px;
  padding: 12px;
  transition: all 0.2s ease;
}

.category-item.active {
  border-color: var(--primary);
  background: rgba(139, 92, 246, 0.03);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.05);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.category-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 14px;
}

.category-info {
  flex: 1;
}

.category-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 2px;
}

.category-price {
  font-size: 14px;
  font-weight: 700;
  color: var(--primary);
}

.category-options {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.option-btn {
  flex: 1;
  min-width: 70px;
  padding: 8px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  background: white;
  border-radius: 8px;
  font-size: 11px;
  color: var(--text-light);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.option-btn:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.option-btn.selected {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  box-shadow: 0 4px 8px rgba(139, 92, 246, 0.2);
}

.option-btn.affordable:not(.selected) {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
}

.option-label {
  font-weight: 600;
  font-size: 10px;
}

.option-price {
  font-weight: 700;
  font-size: 10px;
}

.option-btn.selected .option-price {
  color: rgba(255, 255, 255, 0.9);
}

/* Итоговая сводка */
.ai-summary {
  padding: 15px;
  background: rgba(139, 92, 246, 0.05);
  border-radius: 12px;
  margin-bottom: 15px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 13px;
}

.summary-item:last-child {
  margin-bottom: 15px;
}

.summary-label {
  color: var(--text-light);
}

.summary-value {
  font-weight: 700;
  font-size: 16px;
}

.summary-item.positive .summary-value {
  color: #10b981;
}

.summary-item.negative .summary-value {
  color: #ef4444;
}

.optimize-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.optimize-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.3);
}

.optimize-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Инсайт AI */
.ai-insight {
  display: flex;
  gap: 10px;
  padding: 12px;
  background: rgba(16, 185, 129, 0.08);
  border-radius: 10px;
  border-left: 3px solid #10b981;
}

.insight-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
}

.insight-text {
  font-size: 12px;
  color: var(--text-light);
  line-height: 1.4;
}

.insight-text strong {
  color: var(--text);
  font-weight: 700;
}

/* Адаптивность */
@media (max-width: 768px) {
  .category-options {
    flex-direction: column;
  }
  
  .option-btn {
    flex-direction: row;
    justify-content: space-between;
    min-width: auto;
  }
  
  .total-badge {
    font-size: 14px;
    padding: 6px 12px;
  }
}
</style>