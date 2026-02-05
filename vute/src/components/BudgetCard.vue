
<template>
  <div class="luxury-card budget-card">
    <div class="card-header">
      <div class="header-left">
        <div class="card-icon">
          <i class="fas fa-calculator"></i>
        </div>
        <div>
          <h3 class="card-title">{{ t('cards.budget.title') }}</h3>
          <div class="card-subtitle">{{ t('cards.budget.subtitle') }}</div>
        </div>
      </div>
    </div>

    <div class="expenses-list">
      <!-- Конкретные пункты расходов -->
      <div class="expense-item" v-for="(expense, index) in expenses" :key="index">
        <div class="expense-info">
          <i :class="expense.icon"></i>
          <span class="expense-name">{{ t(expense.translationKey, expense.params) }}</span>
          <span class="expense-note" v-if="expense.note">{{ expense.note }}</span>
        </div>
        <div class="expense-amount">{{ formatCurrency(expense.amount) }}</div>
      </div>
      
      <!-- Итоговая строка -->
      <div class="expense-total">
        <div class="total-label">
          <i class="fas fa-check-double"></i>
          <span>{{ t('expenses.total') }}:</span>
        </div>
        <div class="total-amount">{{ formatCurrency(total) }}</div>
      </div>
    </div>

    <div class="ai-insight">
      <div class="insight-icon">
        <i class="fas fa-lightbulb"></i>
      </div>
      <div class="insight-text">
        {{ t('ai.remembers') }}
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from '../i18n/useLanguage'

export default {
  name: 'BudgetCard',
  setup() {
    const { t, formatCurrency } = useLanguage()
    
    const expenses = [
      { 
        translationKey: 'expenses.flight', 
        amount: 18500, 
        icon: 'fas fa-plane',
        params: {}
      },
      { 
        translationKey: 'expenses.hotel', 
        amount: 24500, 
        icon: 'fas fa-hotel',
        params: { nights: 7 }
      },
      { 
        translationKey: 'expenses.vignette', 
        amount: 1200, 
        icon: 'fas fa-road',
        params: {}
      },
      { 
        translationKey: 'expenses.parking', 
        amount: 800, 
        icon: 'fas fa-parking',
        params: {}
      },
      { 
        translationKey: 'expenses.dinner', 
        amount: 2500, 
        icon: 'fas fa-utensils',
        params: {}
      },
      { 
        translationKey: 'expenses.museum', 
        amount: 700, 
        icon: 'fas fa-landmark',
        params: {}
      },
      { 
        translationKey: 'expenses.souvenirs', 
        amount: 1500, 
        icon: 'fas fa-gift',
        params: {}
      },
      { 
        translationKey: 'expenses.mobile', 
        amount: 500, 
        icon: 'fas fa-sim-card',
        params: {}
      },
      { 
        translationKey: 'expenses.insurance', 
        amount: 900, 
        icon: 'fas fa-shield-alt',
        params: {}
      },
      { 
        translationKey: 'expenses.transfer', 
        amount: 1400, 
        icon: 'fas fa-taxi',
        params: {}
      }
    ]

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

    return {
      t,
      formatCurrency,
      expenses,
      total
    }
  }
}
</script>

<style scoped>
.budget-card {
  padding: 20px;
  min-height: auto;
  height: fit-content;
  max-width: 320px;
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
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 16px;
}

.card-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 2px;
}

.card-subtitle {
  font-size: 12px;
  color: var(--text-light);
}

.budget-badge {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Список расходов */
.expenses-list {
  margin-bottom: 15px;
  max-height: 240px;
  overflow-y: auto;
  padding-right: 5px;
}

.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  font-size: 12px;
}

.expense-item:last-child {
  border-bottom: none;
}

.expense-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
}

.expense-info i {
  width: 16px;
  color: var(--text-light);
  font-size: 11px;
  text-align: center;
}

.expense-name {
  flex: 1;
}

.expense-note {
  font-size: 10px;
  color: var(--text-light);
  font-style: italic;
  margin-left: 4px;
}

.expense-amount {
  font-weight: 600;
  color: var(--text);
  font-size: 12px;
  min-width: 60px;
  text-align: right;
}

/* Итоговая строка */
.expense-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  margin-top: 5px;
  border-top: 2px solid rgba(139, 92, 246, 0.2);
}

.total-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text);
  font-weight: 500;
}

.total-label i {
  color: var(--primary);
  font-size: 12px;
}

.total-amount {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary);
}

/* Инсайт AI */
.ai-insight {
  background: rgba(139, 92, 246, 0.05);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  gap: 8px;
  border-left: 2px solid var(--primary);
}

.insight-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: var(--primary);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
}

.insight-text {
  font-size: 11px;
  color: var(--text-light);
  line-height: 1.3;
}

.insight-text strong {
  color: var(--text);
  font-weight: 600;
}

/* Скроллбар */
.expenses-list::-webkit-scrollbar {
  width: 4px;
}

.expenses-list::-webkit-scrollbar-track {
  background: rgba(139, 92, 246, 0.05);
  border-radius: 2px;
}

.expenses-list::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.2);
  border-radius: 2px;
}

.expenses-list::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.3);
}

/* Анимация при наведении */
.expense-item:hover {
  background: rgba(139, 92, 246, 0.03);
  border-radius: 4px;
  padding: 8px 5px;
  margin: 0 -5px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .budget-card {
    max-width: 100%;
  }
  
  .expenses-list {
    max-height: 200px;
  }
}
</style>