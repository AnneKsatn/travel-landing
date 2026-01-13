<template>
  <div class="luxury-card ai-card">
    <div class="card-header">
      <div class="header-left">
        <div class="card-icon">
          <i class="fas fa-sliders-h"></i>
        </div>
        <div>
          <h3 class="card-title">AI-конструктор</h3>
          <div class="card-subtitle">Редактируйте AI-план под себя</div>
        </div>
      </div>
      <div class="ai-badge">
        <i class="fas fa-edit"></i>
        Редактировать
      </div>
    </div>

    <!-- Пример редактируемого списка -->
    <div class="editable-list">
      <div class="list-item" v-for="item in editableItems" :key="item.id">
        <div class="item-content">
          <div class="item-icon">
            <i :class="item.icon"></i>
          </div>
          <div class="item-details">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-info">{{ item.details }}</div>
          </div>
        </div>
        <div class="item-controls">
          <div class="item-price">{{ formatCurrency(item.price) }}</div>
          <div class="control-buttons">
            <button class="control-btn edit-btn" title="Изменить">
              <i class="fas fa-pencil-alt"></i>
            </button>
            <button class="control-btn delete-btn" title="Удалить">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Кнопка добавления нового расхода -->
    <div class="add-expense">
      <button class="add-btn">
        <i class="fas fa-plus-circle"></i>
        <span>Добавить расход</span>
      </button>
    </div>

    <!-- AI-инсайт про редактирование -->
    <div class="ai-insight">
      <div class="insight-icon">
        <i class="fas fa-robot"></i>
      </div>
      <div class="insight-text">
        <strong>AI создал базу</strong>, а вы её <strong>редактируете</strong>.
        Добавляйте свои расходы, меняйте категории — бюджет пересчитается автоматически.
      </div>
    </div>

    <!-- Статистика изменений -->
    <div class="edit-stats">
      <div class="stat-item">
        <div class="stat-value">14</div>
        <div class="stat-label">статей расходов</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">+3</div>
        <div class="stat-label">добавили вы</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">98.7%</div>
        <div class="stat-label">точность AI</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AICard',
  data() {
    return {
      editableItems: [
        {
          id: 1,
          name: 'Ужин в ресторане',
          details: 'Гастрономический ужин',
          price: 2500,
          icon: 'fas fa-utensils'
        },
        {
          id: 2,
          name: 'Экскурсия в музей',
          details: 'С аудиогидом',
          price: 700,
          icon: 'fas fa-landmark'
        },
        {
          id: 3,
          name: 'Трансфер из аэропорта',
          details: 'Предложил AI, вы подтвердили',
          price: 1400,
          icon: 'fas fa-taxi'
        },
        {
          id: 4,
          name: 'Страховка',
          details: 'Медицинская + багаж',
          price: 900,
          icon: 'fas fa-shield-alt'
        }
      ]
    }
  },
  methods: {
    formatCurrency(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽'
    }
  }
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

.ai-badge {
  background: rgba(139, 92, 246, 0.1);
  color: var(--primary);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ai-badge:hover {
  background: rgba(139, 92, 246, 0.2);
  transform: scale(1.05);
}

/* Редактируемый список */
.editable-list {
  margin-bottom: 15px;
  max-height: 180px;
  overflow-y: auto;
  padding-right: 5px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: rgba(139, 92, 246, 0.03);
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: all 0.2s ease;
}

.list-item:hover {
  background: rgba(139, 92, 246, 0.08);
  transform: translateX(3px);
  border-color: rgba(139, 92, 246, 0.3);
}

.item-content {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.item-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(139, 92, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 12px;
  flex-shrink: 0;
}

.item-details {
  flex: 1;
}

.item-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 2px;
}

.item-info {
  font-size: 11px;
  color: var(--text-light);
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-price {
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
  min-width: 60px;
  text-align: right;
}

.control-buttons {
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.list-item:hover .control-buttons {
  opacity: 1;
}

.control-btn {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 11px;
}

.edit-btn {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.edit-btn:hover {
  background: #3b82f6;
  color: white;
}

.delete-btn {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.delete-btn:hover {
  background: #ef4444;
  color: white;
}

/* Кнопка добавления */
.add-expense {
  margin-bottom: 15px;
}

.add-btn {
  width: 100%;
  padding: 10px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px dashed rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  color: #10b981;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.add-btn:hover {
  background: rgba(16, 185, 129, 0.2);
  border-style: solid;
  transform: translateY(-2px);
}

/* AI-инсайт */
.ai-insight {
  margin-bottom: 15px;
  padding: 12px;
  background: rgba(139, 92, 246, 0.05);
  border-radius: 10px;
  border-left: 3px solid var(--primary);
}

.insight-icon {
  display: none; /* Скрываем иконку для компактности */
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

/* Статистика изменений */
.edit-stats {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-value {
  font-size: 16px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 2px;
}

.stat-label {
  font-size: 10px;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.stat-item:nth-child(2) .stat-value {
  color: #10b981;
}

.stat-item:nth-child(3) .stat-value {
  color: #8b5cf6;
}

/* Скроллбар */
.editable-list::-webkit-scrollbar {
  width: 4px;
}

.editable-list::-webkit-scrollbar-track {
  background: rgba(139, 92, 246, 0.05);
  border-radius: 2px;
}

.editable-list::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.2);
  border-radius: 2px;
}

.editable-list::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.3);
}

/* Адаптивность */
@media (max-width: 768px) {
  .ai-card {
    max-width: 100%;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .ai-badge {
    align-self: flex-end;
  }
  
  .control-buttons {
    opacity: 1; /* Всегда показываем кнопки на мобильных */
  }
  
  .item-price {
    font-size: 12px;
    min-width: 50px;
  }
}
</style>