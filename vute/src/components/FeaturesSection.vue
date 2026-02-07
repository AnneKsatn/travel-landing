<template>
  <div class="features-section">
    <p class="section-subtitle">
      Мы верим, что планирование должно быть простым, <br />
      а поездки — совершенными.
    </p>

    <div class="ai-pillars">
      <div class="pillar">
        <div class="pillar-icon">
          <i class="fas fa-brain"></i>
        </div>
        <div class="pillar-content">
          <div class="solution">
             AI сформирует уникальный почасовой маршрут за 3 - 4 минуты.
          </div>
        </div>
      </div>

      <div class="pillar">
        <div class="pillar-icon">
          <i class="fas fa-coins"></i>
        </div>
        <div class="pillar-content">
          <div class="pain-point">
            Устали от непредвиденных расходов в путешествиях?
          </div>
          <div class="solution">
            Наш AI помнит про все мелочи, о которых забывают туристы
          </div>
        </div>
      </div>

      <div class="pillar">
        <div class="pillar-icon">
          <i class="fas fa-tools"></i>
        </div>
        <div class="pillar-content">
          <div class="solution">
            Полный контроль: редактируйте план и бюджет в конструкторе, получайте советы путешественников и рекомендации системы.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesSection",
};
</script>

<style scoped>
.features-section {
  margin-top: 45px;
  margin-bottom: 35px;
}

.section-subtitle {
  text-align: center;
  font-size: 16px;
  color: #4a5568;
  margin-bottom: 32px;
  font-weight: 500;
  line-height: 1.5;
  padding: 0 20px;
  position: relative;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: -0.2px;
}

/* Декоративная линия сверху */
.section-subtitle::before {
  content: "";
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  border-radius: 3px;
  opacity: 0.7;
}

/* Подчеркивание снизу */
.section-subtitle::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: rgba(139, 92, 246, 0.15);
  border-radius: 2px;
}

/* AI Pillars - с увеличенными отступами */
.ai-pillars {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pillar {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: white;
  padding: 20px 18px;
  border-radius: 18px;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.12);
  transition: all 0.25s ease;
}

.pillar:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.2);
}

.pillar-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.pillar-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Стили для средней карточки (с вопросом) */
.pillar:nth-child(2) .pillar-content {
  gap: 10px;
}

.pain-point {
  font-size: 15px;
  color: #666;
  font-weight: 500;
  line-height: 1.35;
  position: relative;
  padding-left: 18px;
}

.pain-point::before {
  content: "✨";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 14px;
  opacity: 0.7;
}

.solution {
  font-size: 15px;
  color: var(--text-dark);
  font-weight: 500;
  line-height: 1.4;
  position: relative;
  padding-left: 18px;
}

/* Только для первой и третьей карточек */
.pillar:first-child .solution,
.pillar:last-child .solution {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.35;
  color: var(--text-dark);
}

.pillar:first-child .solution::before,
.pillar:last-child .solution::before {
  content: "✨";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 14px;
  opacity: 0.7;
}

/* Для второй карточки - решение */
.pillar:nth-child(2) .solution {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.35;
  color: var(--text-dark);
  padding-left: 18px;
}

.pillar:nth-child(2) .solution::before {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 14px;
  opacity: 0.7;
}

/* Адаптивность */
@media (max-width: 768px) {
  .features-section {
    margin-top: 42px;
    margin-bottom: 32px;
  }

  .section-subtitle {
    font-size: 17px;
    margin-bottom: 28px;
    line-height: 1.45;
    padding: 0 15px;
  }

  .section-subtitle::before {
    top: -14px;
    width: 45px;
  }

  .ai-pillars {
    gap: 14px;
  }

  .pillar {
    padding: 18px 16px;
    border-radius: 16px;
    gap: 14px;
  }

  .pillar-icon {
    width: 44px;
    height: 44px;
    font-size: 19px;
    border-radius: 12px;
    margin-top: 2px;
  }

  .pillar-content {
    gap: 8px;
  }

  .pillar:nth-child(2) .pillar-content {
    gap: 10px;
  }

  .pain-point {
    font-size: 15px;
    padding-left: 16px;
  }

  .pain-point::before {
    font-size: 13px;
  }

  .solution {
    font-size: 15px;
    padding-left: 16px;
  }

  .pillar:first-child .solution,
  .pillar:last-child .solution {
    font-size: 15px;
  }

  .pillar:nth-child(2) .solution {
    font-size: 15px;
  }

  .pillar:first-child .solution::before,
  .pillar:last-child .solution::before {
    font-size: 13px;
  }

  .pillar:nth-child(2) .solution::before {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .features-section {
    margin-top: 50px;
    margin-bottom: 68px;
  }

  .section-subtitle {
    font-size: 16px;
    margin-bottom: 35px;
    padding: 0 12px;
    line-height: 1.4;
    max-width: 280px;
  }

  .section-subtitle::before {
    top: -12px;
    width: 40px;
    height: 2.5px;
  }

  .ai-pillars {
    gap: 12px;
  }

  .pillar {
    padding: 16px;
    border-radius: 15px;
    gap: 12px;
  }

  .pillar-icon {
    width: 42px;
    height: 42px;
    font-size: 18px;
    border-radius: 11px;
    margin-top: 1px;
  }

  .pillar-content {
    gap: 6px;
  }

  .pillar:nth-child(2) .pillar-content {
    gap: 8px;
  }

  .pain-point {
    font-size: 14px;
    padding-left: 16px;
  }

  .pain-point::before {
    font-size: 12px;
    top: 1px;
  }

  .solution {
    font-size: 14px;
    padding-left: 16px;
  }

  .pillar:first-child .solution,
  .pillar:last-child .solution {
    font-size: 14px;
  }

  .pillar:nth-child(2) .solution {
    font-size: 14px;
  }

  .pillar:first-child .solution::before,
  .pillar:last-child .solution::before {
    font-size: 12px;
    top: 1px;
  }

  .pillar:nth-child(2) .solution::before {
    font-size: 12px;
    top: 1px;
  }
}

@media (max-width: 380px) {
  .features-section {
    margin-top: 40px;
    margin-bottom: 60px;
  }

  .section-subtitle {
    font-size: 15px;
    margin-bottom: 28px;
    padding: 0 10px;
    max-width: 260px;
  }

  .section-subtitle::before {
    top: -10px;
    width: 35px;
  }

  .ai-pillars {
    gap: 10px;
  }

  .pillar {
    padding: 15px 14px;
    border-radius: 14px;
    gap: 11px;
  }

  .pillar-icon {
    width: 40px;
    height: 40px;
    font-size: 17px;
    border-radius: 10px;
    margin-top: 1px;
  }

  .pillar-content {
    gap: 5px;
  }

  .pillar:nth-child(2) .pillar-content {
    gap: 7px;
  }

  .pain-point {
    font-size: 14px;
    padding-left: 16px;
  }

  .solution {
    font-size: 14px;
    padding-left: 16px;
  }

  .pillar:first-child .solution,
  .pillar:last-child .solution {
    font-size: 14px;
  }

  .pillar:nth-child(2) .solution {
    font-size: 14px;
  }
}
</style>