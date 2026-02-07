<template>
  <div class="features-section">
    <div class="ai-relationship">
      <span class="ai-part">AI планирует</span>
      <span class="separator">, </span>
      <span class="you-part">вы контролируете</span>
    </div>

    <div class="journey-steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <div class="step-title">Маршрут за минуты</div>
          <div class="step-description">AI создаст почасовой план по вашим интересам</div>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <div class="step-title">Бюджет с учётом деталей</div>
          <div class="step-description">Все расходы, включая мелочи, о которых забывают</div>
        </div>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <div class="step-title">Гибкая настройка</div>
          <div class="step-description">Редактируйте маршрут и бюджет в конструкторе</div>
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
  margin-top: 40px;
  margin-bottom: 30px;
}

.ai-relationship {
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
  line-height: 1.4;
  padding: 0 16px;
  color: #4a5568;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
}

.ai-part {
  color: #5b21b6;
  font-weight: 500;
}

.separator {
  opacity: 0.4;
  font-weight: 400;
}

.you-part {
  color: #075985;
  font-weight: 500;
}

.journey-steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: white;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
}

.step:hover {
  border-color: rgba(139, 92, 246, 0.15);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
}

.step-number {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(14, 165, 233, 0.1));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 2px;
}

.step-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.step-title {
  font-size: 15px;
  color: var(--text-dark);
  font-weight: 600;
  line-height: 1.3;
}

.step-description {
  font-size: 13px;
  color: #666;
  line-height: 1.3;
  font-weight: 400;
}

@media (max-width: 768px) {
  .features-section {
    margin-top: 36px;
    margin-bottom: 28px;
  }
  .ai-relationship {
    font-size: 15px;
    margin-bottom: 22px;
  }
  .journey-steps {
    gap: 10px;
  }
  .step {
    padding: 15px;
    border-radius: 14px;
    gap: 12px;
  }
  .step-number {
    width: 26px;
    height: 26px;
    font-size: 12px;
    margin-top: 1px;
  }
  .step-title {
    font-size: 14px;
  }
  .step-description {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .features-section {
    margin-top: 32px;
    margin-bottom: 24px;
  }
  .ai-relationship {
    font-size: 14px;
    margin-bottom: 20px;
    max-width: 250px;
  }
  .journey-steps {
    gap: 9px;
  }
  .step {
    padding: 14px;
    border-radius: 13px;
    gap: 11px;
  }
  .step-number {
    width: 24px;
    height: 24px;
    font-size: 11px;
    border-radius: 7px;
  }
  .step-title {
    font-size: 14px;
  }
  .step-description {
    font-size: 12px;
  }
}

@media (max-width: 360px) {
  .features-section {
    margin-top: 28px;
    margin-bottom: 20px;
  }
  .ai-relationship {
    font-size: 13px;
    margin-bottom: 18px;
  }
  .journey-steps {
    gap: 8px;
  }
  .step {
    padding: 13px;
    gap: 10px;
  }
  .step-title {
    font-size: 13px;
  }
  .step-description {
    font-size: 11px;
  }
}
</style>