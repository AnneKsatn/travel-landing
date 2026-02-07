<template>
  <div class="audience-section">
    <div class="for-who-section">
      <div class="section-title">
        <i class="fas fa-user-check"></i>
        <span>Это для вас, если вы:</span>
      </div>
      <div class="for-who-list">
        <div class="who-item">
          <i class="fas fa-check-circle"></i>
          <span>Устали от ручного планирования и гугл-таблиц</span>
        </div>
        <div class="who-item">
          <i class="fas fa-check-circle"></i>
          <span>Хотите маршрут под свои интересы, а не шаблонный</span>
        </div>
        <div class="who-item">
          <i class="fas fa-check-circle"></i>
          <span>Цените и AI-помощь, и полный контроль</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudienceSection",
};
</script>

<style scoped>
.audience-section {
  margin-bottom: 30px;
}

.for-who-section {
  background: rgba(14, 165, 233, 0.05);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(14, 165, 233, 0.1);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.section-title i {
  color: var(--primary);
  font-size: 20px;
}

.for-who-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.who-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.who-item i {
  color: #10b981;
  font-size: 16px;
  margin-top: 2px;
  min-width: 20px;
  flex-shrink: 0;
}

.who-item span {
  font-size: 15px;
  color: var(--text-dark);
  line-height: 1.4;
}

/* Адаптивность */
@media (max-width: 480px) {
  .for-who-section {
    padding: 16px;
  }

  .section-title {
    font-size: 16px;
  }

  .section-title i {
    font-size: 18px;
  }

  .who-item span {
    font-size: 14px;
  }

  .who-item i {
    font-size: 14px;
  }
}
</style>