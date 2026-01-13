<template>
  <div class="luxury-card ai-card">
    <div class="card-header">
      <div class="header-left">
        <div class="card-icon">
          <i class="fas fa-sliders-h"></i>
        </div>
        <div>
          <h3 class="card-title">Конструктор</h3>
          <div class="card-subtitle">Настройте план под себя</div>
        </div>
      </div>
    </div>
    <!-- Простые возможности -->
    <div class="capabilities">
      <div class="capability">
        <i class="fas fa-check-circle"></i>
        <span>Добавляйте свои расходы</span>
      </div>
      <div class="capability">
        <i class="fas fa-check-circle"></i>
        <span>Меняйте категории</span>
      </div>
      <div class="capability">
        <i class="fas fa-check-circle"></i>
        <span>Регулируйте бюджет</span>
      </div>
      <div class="capability">
        <i class="fas fa-check-circle"></i>
        <span>Персонализируйте маршрут</span>
      </div>
    </div>

    <!-- Текстовая пояснение -->
    <div class="constructor-message">
      <p>
        <strong>AI создаёт основу</strong> на основе опыта 42,678+ путешественников.
        <strong>Вы настраиваете</strong> под свои предпочтения и бюджет.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AICard",
};
</script>

<style scoped>
.ai-card {
  padding: 20px;
  min-height: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
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
  line-height: 1.2;
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
}

/* Визуализация конструктора */
.constructor-visual {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.visual-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.visual-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  transition: transform 0.3s ease;
}

.ai-icon {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1));
  color: var(--primary);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.1);
}

.user-icon {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 211, 238, 0.1));
  color: #10b981;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);
}

.visual-arrow {
  color: var(--text-light);
  font-size: 18px;
  animation: pulseArrow 2s infinite;
}

@keyframes pulseArrow {
  0%,
  100% {
    opacity: 0.5;
    transform: translateX(0);
  }
  50% {
    opacity: 1;
    transform: translateX(3px);
  }
}

/* Сообщение */
.constructor-message {
  margin: 15px 0;
  padding: 12px;
  background: rgba(139, 92, 246, 0.03);
  border-radius: 10px;
  border-left: 3px solid var(--primary);
}

.constructor-message p {
  font-size: 13px;
  color: var(--text-light);
  line-height: 1.5;
  margin: 0;
}

.constructor-message strong {
  color: var(--text);
  font-weight: 700;
}

/* Возможности */
.capabilities {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px 0;
}

.capability {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--text-light);
}

.capability i {
  color: #10b981;
  font-size: 10px;
  flex-shrink: 0;
}

/* Мини статистика */
.stats-mini {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.stat-mini {
  text-align: center;
  flex: 1;
}

.stat-value {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 2px;
  line-height: 1;
}

.stat-label {
  font-size: 10px;
  color: var(--text-light);
  font-weight: 500;
  line-height: 1.2;
}

.stat-mini:nth-child(2) .stat-value {
  color: #10b981;
  font-size: 20px;
}

.stat-mini:nth-child(3) .stat-value {
  color: #8b5cf6;
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

  .visual-item {
    gap: 15px;
  }

  .visual-icon {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .constructor-message p {
    font-size: 12px;
  }

  .capability {
    font-size: 11px;
  }
}
</style>
