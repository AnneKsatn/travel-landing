<template>
  <div class="constructor-block">
    <!-- Фоновый градиент -->
    <div class="constructor-bg">
      <div class="bg-gradient-1"></div>
      <div class="bg-gradient-2"></div>
    </div>

    <div class="container">
      <!-- Шапка блока -->
      <div class="constructor-header">
        <div class="section-label">
          <i class="fas fa-cogs"></i>
          {{ t('ai.humanCombination') }}
        </div>
        
        <h2 class="section-title">
          {{ t('constructor.title') }}
        </h2>
        
        <p class="section-description">
          {{ t('constructor.description') }}
        </p>
      </div>

      <!-- Две колонки с фичами -->
      <div class="constructor-features">
        <!-- Левая колонка: Редактирование расходов -->
        <div class="feature-column">
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon">
                <i class="fas fa-edit"></i>
              </div>
              <h3 class="feature-title">{{ t('constructor.editExpenses') }}</h3>
              <p class="feature-subtitle">{{ t('ai.calculates') }}</p>
            </div>

            <div class="feature-demo">
              <!-- Пример редактируемой таблицы -->
              <div class="demo-table">
                <div class="table-header">
                  <div class="header-item">{{ t('constructor.tableHeaders.item') }}</div>
                  <div class="header-item">{{ t('constructor.tableHeaders.aiCalculated') }}</div>
                  <div class="header-item">{{ t('constructor.tableHeaders.yourEdit') }}</div>
                  <div class="header-item"></div>
                </div>
                
                <div class="table-row ai-item">
                  <div class="row-item">
                    <i class="fas fa-utensils"></i>
                    <span>{{ t('expenses.dinner') }}</span>
                  </div>
                  <div class="row-item price-ai">{{ formatCurrency(2500) }}</div>
                  <div class="row-item price-edited">{{ formatCurrency(3200) }}</div>
                  <div class="row-item actions">
                    <span class="action-icon edited">
                      <i class="fas fa-pen"></i>
                    </span>
                  </div>
                </div>
                
                <div class="table-row ai-item">
                  <div class="row-item">
                    <i class="fas fa-taxi"></i>
                    <span>{{ t('expenses.transfer') }}</span>
                  </div>
                  <div class="row-item price-ai">{{ formatCurrency(1400) }}</div>
                  <div class="row-item price-edited">{{ formatCurrency(1400) }}</div>
                  <div class="row-item actions">
                    <span class="action-icon unchanged">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                </div>
                
                <div class="table-row user-added">
                  <div class="row-item">
                    <i class="fas fa-plus-circle"></i>
                    <span>{{ t('expenses.souvenirs') }}</span>
                  </div>
                  <div class="row-item price-ai">—</div>
                  <div class="row-item price-edited">{{ formatCurrency(1500) }}</div>
                  <div class="row-item actions">
                    <span class="action-icon added">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </div>
                
                <div class="table-row ai-hidden">
                  <div class="row-item">
                    <i class="fas fa-eye-slash"></i>
                    <span>{{ t('expenses.parking') }}</span>
                  </div>
                  <div class="row-item price-ai">{{ formatCurrency(800) }}</div>
                  <div class="row-item price-edited">{{ formatCurrency(0) }}</div>
                  <div class="row-item actions">
                    <span class="action-icon hidden">
                      <i class="fas fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="feature-explanation">
              <div class="explanation-item">
                <i class="fas fa-pen-fancy"></i>
                <div>
                  <h4>{{ t('constructor.features.changeAmounts.title') }}</h4>
                  <p>{{ t('constructor.features.changeAmounts.description', { amount: formatCurrency(2500) }) }}</p>
                </div>
              </div>
              
              <div class="explanation-item">
                <i class="fas fa-plus-square"></i>
                <div>
                  <h4>{{ t('constructor.features.addExpenses.title') }}</h4>
                  <p>{{ t('constructor.features.addExpenses.description') }}</p>
                </div>
              </div>
              
              <div class="explanation-item">
                <i class="fas fa-eye-slash"></i>
                <div>
                  <h4>{{ t('constructor.features.hideUnnecessary.title') }}</h4>
                  <p>{{ t('constructor.features.hideUnnecessary.description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка: Выбор категорий -->
        <div class="feature-column">
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon">
                <i class="fas fa-layer-group"></i>
              </div>
              <h3 class="feature-title">{{ t('constructor.chooseCategories') }}</h3>
              <p class="feature-subtitle">{{ t('ai.recommends') }}</p>
            </div>

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

            <div class="feature-explanation">
              <div class="explanation-item">
                <i class="fas fa-sliders-h"></i>
                <div>
                  <h4>{{ t('constructor.features.threeLevels.title') }}</h4>
                  <p>{{ t('constructor.features.threeLevels.description') }}</p>
                </div>
              </div>
              
              <div class="explanation-item">
                <i class="fas fa-robot"></i>
                <div>
                  <h4>{{ t('constructor.features.aiRecommends.title') }}</h4>
                  <p>{{ t('constructor.features.aiRecommends.description') }}</p>
                </div>
              </div>
              
              <div class="explanation-item">
                <i class="fas fa-bolt"></i>
                <div>
                  <h4>{{ t('constructor.features.instantRecalculation.title') }}</h4>
                  <p>{{ t('constructor.features.instantRecalculation.description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Общая статистика конструктора -->
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
        <div class="stat-card">
          <div class="stat-value">{{ t('ai.humanCombination').split('=')[0].trim() }}</div>
          <div class="stat-label">{{ t('constructor.stats.perfectCombination') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from '../i18n/useLanguage'

export default {
  name: 'ConstructorBlock',
  setup() {
    const { t, formatCurrency } = useLanguage()
    
    const selectedOptions = {
      hotel: 'comfort',
      food: 'premium'
    }

    return {
      t,
      formatCurrency,
      selectedOptions
    }
  },
  mounted() {
    this.setupAnimations()
  },
  methods: {
    setupAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.table-row, .category-selector, .stat-card').forEach(el => {
        observer.observe(el)
      })
    }
  }
}
</script>

<style scoped>
.constructor-block {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
  padding: 100px 40px;
}

.constructor-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bg-gradient-1 {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 40%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.04), rgba(6, 182, 212, 0.04));
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

.bg-gradient-2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 60%;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.04), rgba(34, 211, 238, 0.04));
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Шапка блока */
.constructor-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(139, 92, 246, 0.1);
  color: var(--primary);
  padding: 12px 24px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 25px;
  color: var(--text);
}

.highlight {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-description {
  font-size: 20px;
  line-height: 1.7;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
}

/* Две колонки с фичами */
.constructor-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;
}

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

/* Демо таблица для левой колонки */
.demo-table {
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.1);
  overflow: hidden;
  margin-bottom: 25px;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  padding: 16px 20px;
  background: rgba(139, 92, 246, 0.05);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(10px);
}

.table-row.animate-in {
  animation: slideInRow 0.5s ease forwards;
}

@keyframes slideInRow {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.table-row:nth-child(2) { animation-delay: 0.1s; }
.table-row:nth-child(3) { animation-delay: 0.2s; }
.table-row:nth-child(4) { animation-delay: 0.3s; }
.table-row:nth-child(5) { animation-delay: 0.4s; }

.table-row:hover {
  background: rgba(139, 92, 246, 0.03);
}

.row-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--text);
}

.row-item i {
  width: 20px;
  color: var(--text-light);
  font-size: 14px;
}

.price-ai {
  color: var(--text-light);
  font-weight: 500;
}

.price-edited {
  color: var(--text);
  font-weight: 600;
}

.actions {
  justify-content: flex-end;
}

.action-icon {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

.action-icon.edited {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.action-icon.unchanged {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.action-icon.added {
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
}

.action-icon.hidden {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

/* Стили для разных типов строк */
.ai-item .row-item i {
  color: var(--primary);
}


.user-added .row-item i {
  color: #f97316;
}

.ai-hidden .row-item i {
  color: #ef4444;
}

/* Пример выбора категорий для правой колонки */
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
  opacity: 0;
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

/* Пересчёт бюджета */
.budget-recalculation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: rgba(139, 92, 246, 0.05);
  border-radius: 12px;
  margin-top: 25px;
}

.budget-before,
.budget-after {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: var(--text-light);
}

.budget-before .amount {
  font-weight: 500;
  color: var(--text);
}

.budget-after .amount {
  font-weight: 700;
  color: var(--primary);
}

.budget-after .amount.updated {
  color: #10b981;
}

.budget-arrow {
  color: var(--text-light);
  font-size: 18px;
}

.budget-note {
  position: absolute;
  bottom: -30px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--text-light);
}

.budget-note i {
  color: var(--primary);
}

/* Объяснение фич */
.feature-explanation {
  margin-top: 30px;
}

.explanation-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(139, 92, 246, 0.03);
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.explanation-item:hover {
  transform: translateX(5px);
}

.explanation-item i {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 16px;
  flex-shrink: 0;
}

.explanation-item h4 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}

.explanation-item p {
  font-size: 13px;
  color: var(--text-light);
  margin: 0;
  line-height: 1.4;
}

/* Статистика конструктора */
.constructor-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(6, 182, 212, 0.08));
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
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
  .constructor-features {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .constructor-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .constructor-block {
    padding: 60px 20px;
  }
  
  .section-title {
    font-size: 36px;
  }
  
  .constructor-stats {
    grid-template-columns: 1fr;
  }
  
  .category-options {
    flex-direction: column;
  }
  
  .budget-recalculation {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
  
  .table-header {
    font-size: 10px;
  }
  
  .row-item {
    font-size: 12px;
  }
}
</style>