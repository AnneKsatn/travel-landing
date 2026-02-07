<template>
  <div class="features-audience-section">
    <!-- Что делает -->
    <div class="what-does-section">
      <p class="section-subtitle">Ассистент и конструктор в одном месте</p>

      <!-- Обновленная сетка -->
      <div class="features-grid">
        <!-- Первая большая карточка (маршрут + отели) -->
        <div class="feature-card wide-card">
          <div class="wide-card-content">
            <div class="wide-card-left">
              <div class="card-icon">
                <i class="fas fa-map-marked-alt"></i>
              </div>
              <h3>Детальный маршрут от AI</h3>
              <p class="feature-description">
                Почасовой план: достопримечательности, кафе и отдых
              </p>
            </div>
          </div>
        </div>

        <!-- Вторая строка: две карточки -->
        <div class="feature-card">
          <div class="card-icon">
            <i class="fas fa-tools"></i>
          </div>
          <h3>Гибкий конструктор</h3>
          <p class="feature-description">
            Изменяйте места, порядок посещения и добавляйте своё
          </p>
        </div>

        <div class="feature-card">
          <div class="card-icon">
            <i class="fas fa-calculator"></i>
          </div>
          <h3>Расчет бюджета</h3>
          <p class="feature-description">Билеты, проживание, питание и развлечения</p>
        </div>
      </div>
    </div>

    <!-- Кто: кто наша аудитория -->
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
  name: "FeaturesAudienceSection",
};
</script>

<style scoped>
.features-audience-section {
  margin-bottom: 30px;
}

/* What Does Section */
.what-does-section {
  margin-bottom: 30px;
}

.section-subtitle {
  text-align: center;
  font-size: 16px;
  color: var(--text-medium);
  margin-bottom: 25px;
  font-weight: 500;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

/* Базовая карточка */
.feature-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 170px;
  min-height: 170px;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.1);
}

/* Широкая карточка (первая) */
.wide-card {
  grid-column: 1 / -1; /* Занимает все колонки */
  height: auto;
  min-height: 170px;
  padding: 20px;
}

.wide-card-content {
  display: flex;
  width: 100%;
  gap: 20px;
}

.wide-card-left,
.wide-card-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.card-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  color: white;
  font-size: 18px;
  flex-shrink: 0;
}

.feature-card h3 {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 8px;
  line-height: 1.3;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.feature-description {
  font-size: 13px;
  color: var(--text-medium);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  margin: 0;
}

/* For Who Section */
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
@media (max-width: 768px) {
  .wide-card-content {
    flex-direction: column;
    gap: 15px;
  }

  .wide-card-left,
  .wide-card-right {
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(139, 92, 246, 0.1);
  }

  .wide-card-right {
    border-bottom: none;
    padding-bottom: 0;
  }
}

@media (max-width: 480px) {
  .section-subtitle {
    font-size: 15px;
    margin-bottom: 20px;
  }

  .features-grid {
    gap: 12px;
  }

  .feature-card {
    padding: 16px;
    height: 160px;
    min-height: 160px;
  }

  .wide-card {
    padding: 16px;
  }

  .wide-card-content {
    gap: 15px;
  }

  .card-icon {
    width: 44px;
    height: 44px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .feature-card h3 {
    font-size: 14px;
    min-height: 34px;
  }

  .feature-description {
    font-size: 12px;
    line-height: 1.3;
  }

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

@media (max-width: 360px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .feature-card {
    height: auto;
    min-height: 140px;
    padding: 14px;
  }

  .wide-card {
    grid-column: 1; /* На очень маленьких экранах тоже одна колонка */
  }
}
</style>
