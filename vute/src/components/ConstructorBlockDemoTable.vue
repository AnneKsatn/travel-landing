<template>
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
</template>

<script>
export default {
  name: 'ConstructorBlockDemoTable',
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
.feature-demo {
  margin-bottom: 25px;
}

.demo-table {
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.1);
  overflow: hidden;
  height: 300px;
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
  width: 30px;
  height: 30px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  padding: 10px;
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

/* Адаптивность */
@media (max-width: 768px) {
  .table-header {
    font-size: 10px;
  }
  
  .row-item {
    font-size: 12px;
  }
}
</style>