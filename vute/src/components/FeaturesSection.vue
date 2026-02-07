<template>
  <div class="features-section">
    <p class="section-subtitle">
      Мы верим, что планирование должно быть простым, а поездки — совершенными.
    </p>

    <div class="ai-pillars">
      <div class="pillar">
        <div class="pillar-icon">
          <i class="fas fa-brain"></i>
        </div>
        <div class="pillar-content">
          <div class="pain-point">Проводите часы за планированием путешествия?</div>
          <div class="solution">AI создаст маршрут по вашим пожеланиям за 3 - 4 минуты</div>
        </div>
      </div>

      <div class="pillar">
        <div class="pillar-icon">
          <i class="fas fa-coins"></i>
        </div>
        <div class="pillar-content">
          <div class="pain-point">Непредвиденные расходы в каждом путешествии?</div>
          <div class="solution">Наш AI помнит про все мелочи, о которых забывают туристы</div>
        </div>
      </div>

      <div class="pillar">
        <div class="pillar-icon">
          <i class="fas fa-tools"></i>
        </div>
        <div class="pillar-content">
          <div class="pain-point">Хотите иметь контроль над маршрутом и бюджетом?</div>
          <div class="solution">У вас будет конструктор для изменения плана</div>
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
  margin-top: 20px;
  margin-bottom: 25px;
}

.section-subtitle {
  text-align: center;
  font-size: 16px;
  color: var(--text-medium);
  margin-bottom: 22px;
  font-weight: 500;
  line-height: 1.35;
  padding: 0 10px;
}

/* AI Pillars - компактные и нейтральные */
.ai-pillars {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pillar {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: white;
  padding: 16px;
  border-radius: 14px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(139, 92, 246, 0.08);
  transition: all 0.2s ease;
}

.pillar:hover {
  transform: translateY(-1px);
  box-shadow: 0 5px 18px rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.15);
}

.pillar-icon {
  width: 34px;
  height: 34px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 2px;
}

.pillar-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pain-point {
  font-size: 14px;
  color: #666;
  font-weight: 500;
  line-height: 1.3;
  position: relative;
  padding-left: 14px;
}



.solution {
  padding-top: 5px;
  font-size: 15px;
  color: var(--text-dark);
  font-weight: 600;
  line-height: 1.3;
  position: relative;
  padding-left: 14px;
}


/* Адаптивность */
@media (max-width: 768px) {
  .features-section {
    margin-top: 18px;
    margin-bottom: 22px;
  }
  
  .section-subtitle {
    font-size: 15px;
    margin-bottom: 20px;
    line-height: 1.3;
  }

  .ai-pillars {
    gap: 9px;
  }

  .pillar {
    padding: 15px;
    border-radius: 13px;
    gap: 11px;
  }

  .pillar-icon {
    width: 42px;
    height: 42px;
    font-size: 17px;
    border-radius: 9px;
  }

  .pillar-content {
    gap: 5px;
  }

  .pain-point {
    font-size: 14px;
    padding-left: 12px;
  }

  .pain-point::before {
    top: 5px;
    width: 5px;
    height: 5px;
  }

  .solution {
    font-size: 15px;
    padding-left: 12px;
  }
}

@media (max-width: 480px) {
  .section-subtitle {
    font-size: 14px;
    margin-bottom: 18px;
    padding: 0 8px;
  }

  .ai-pillars {
    gap: 8px;
  }

  .pillar {
    padding: 14px;
    border-radius: 12px;
    gap: 10px;
  }

  .pillar-icon {
    width: 34px;
    height: 34px;
    font-size: 16px;
    border-radius: 8px;
  }

  .pillar-content {
    gap: 4px;
  }

  .pain-point {
    font-size: 14px;
    padding-left: 11px;
  }

  .solution {
    font-size: 15px;
    padding-left: 11px;
  }
}

@media (max-width: 360px) {
  .features-section {
    margin-top: 16px;
    margin-bottom: 20px;
  }
  
  .section-subtitle {
    font-size: 13px;
    margin-bottom: 16px;
  }

  .ai-pillars {
    gap: 7px;
  }

  .pillar {
    padding: 13px;
    border-radius: 11px;
    gap: 9px;
  }

  .pillar-icon {
    width: 38px;
    height: 38px;
    font-size: 15px;
    border-radius: 7px;
  }

  .pain-point {
    font-size: 14px;
    padding-left: 10px;
  }

  .solution {
    font-size: 15px;
    padding-left: 10px;
  }
}
</style>