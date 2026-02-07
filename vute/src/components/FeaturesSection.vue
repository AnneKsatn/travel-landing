<template>
  <div class="features-section">
    <p class="section-subtitle">
      Мы верим, что планирование должно быть простым, а поездки — совершенными.
    </p>

    <div class="ai-pillars">
      <div class="pillar wide-card">
        <i class="fas fa-brain"></i>
        <div class="pillar-content">
          <div class="pain-point">Устали тратить часы на поиск и составление маршрутов?</div>
          <span class="solution">AI создаст детальный маршрут по вашим пожеланиям</span>
        </div>
      </div>

      <div class="pillar">
        <i class="fas fa-coins"></i>
        <div class="pillar-content">
          <div class="pain-point">Сложно понять реальную стоимость поездки?</div>
          <span class="solution">AI посчитает точный бюджет, который можно редактировать</span>
        </div>
      </div>

      <div class="pillar">
        <i class="fas fa-tools"></i>
        <div class="pillar-content">
          <div class="pain-point">Надоели негибкие готовые маршруты?</div>
          <span class="solution">AI даст конструктор для изменения плана путешествия</span>
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
  margin-top: 25px;
  margin-bottom: 25px;
}

.section-subtitle {
  text-align: center;
  font-size: 16px;
  color: var(--text-medium);
  margin-bottom: 28px;
  font-weight: 500;
  line-height: 1.4;
  padding: 0 8px;
}

/* AI Pillars */
.ai-pillars {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.pillar {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: white;
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: all 0.2s ease;
}

.pillar:hover {
  transform: translateY(-1px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  border-color: rgba(139, 92, 246, 0.15);
}

.wide-card {
  grid-column: 1 / -1;
}

.pillar i {
  color: var(--primary);
  font-size: 20px;
  margin-top: 2px;
  min-width: 26px;
  flex-shrink: 0;
}

.pillar-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pain-point {
  font-size: 14px;
  color: var(--text-medium);
  font-weight: 500;
  line-height: 1.3;
  position: relative;
  padding-left: 12px;
}

.pain-point::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #ef4444; /* Красный для боли */
  font-size: 16px;
}

.solution {
  font-size: 15px;
  color: var(--text-dark);
  font-weight: 600;
  line-height: 1.35;
}

/* Адаптивность */
@media (max-width: 768px) {
  .features-section {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .section-subtitle {
    font-size: 15px;
    margin-bottom: 24px;
    line-height: 1.35;
  }

  .ai-pillars {
    gap: 12px;
  }

  .pillar {
    padding: 16px;
    border-radius: 15px;
    gap: 12px;
  }

  .pillar i {
    font-size: 18px;
    min-width: 24px;
  }

  .pillar-content {
    gap: 5px;
  }

  .pain-point {
    font-size: 13px;
    padding-left: 10px;
  }

  .pain-point::before {
    font-size: 15px;
  }

  .solution {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section-subtitle {
    font-size: 14px;
    margin-bottom: 22px;
    padding: 0 6px;
  }

  .ai-pillars {
    gap: 10px;
  }

  .pillar {
    padding: 14px;
    border-radius: 14px;
    gap: 10px;
  }

  .pillar i {
    font-size: 16px;
    min-width: 22px;
  }

  .pillar-content {
    gap: 4px;
  }

  .pain-point {
    font-size: 12px;
    padding-left: 8px;
  }

  .pain-point::before {
    font-size: 14px;
  }

  .solution {
    font-size: 13px;
  }
}

@media (max-width: 360px) {
  .features-section {
    margin-top: 18px;
    margin-bottom: 18px;
  }
  
  .section-subtitle {
    font-size: 13.5px;
    margin-bottom: 20px;
  }

  .ai-pillars {
    gap: 9px;
  }

  .pillar {
    padding: 12px;
    border-radius: 12px;
    gap: 9px;
  }

  .pillar i {
    font-size: 15px;
    min-width: 20px;
  }

  .pain-point {
    font-size: 11.5px;
  }

  .solution {
    font-size: 12.5px;
  }
}
</style>