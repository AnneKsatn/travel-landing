<template>
  <div class="feature-column">
    <div class="feature-card">
      <div class="feature-header">
        <div class="feature-icon">
          <i class="fas fa-layer-group"></i>
        </div>
        <h3 class="feature-title">{{ t('constructor.chooseCategories') }}</h3>
        <p class="feature-subtitle">{{ t('ai.recommends') }}</p>
      </div>

      <ConstructorBlockDayExample
        :t="t"
        :format-currency="formatCurrency"
        :selected-options="selectedOptions"
      />

      <div class="feature-explanation">
        <ConstructorBlockExplanationItem
          :icon="'fas fa-sliders-h'"
          :title="t('constructor.features.threeLevels.title')"
          :description="t('constructor.features.threeLevels.description')"
        />
        
        <ConstructorBlockExplanationItem
          :icon="'fas fa-robot'"
          :title="t('constructor.features.aiRecommends.title')"
          :description="t('constructor.features.aiRecommends.description')"
        />
        
        <ConstructorBlockExplanationItem
          :icon="'fas fa-bolt'"
          :title="t('constructor.features.instantRecalculation.title')"
          :description="t('constructor.features.instantRecalculation.description')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ConstructorBlockDayExample from './ConstructorBlockDayExample.vue'
import ConstructorBlockExplanationItem from './ConstructorBlockExplanationItem.vue'

export default {
  name: 'ConstructorBlockFeatureCategories',
  components: {
    ConstructorBlockDayExample,
    ConstructorBlockExplanationItem
  },
  props: {
    t: {
      type: Function,
      required: true
    },
    formatCurrency: {
      type: Function,
      required: true
    },
    selectedOptions: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.feature-column {
  display: flex;
  flex-direction: column;
}

.feature-card {
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.1);
  height: 100%;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-header {
  margin-bottom: 30px;
  text-align: center;
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: var(--primary);
  font-size: 24px;
}

.feature-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}

.feature-subtitle {
  font-size: 16px;
  color: var(--text-light);
}

.feature-explanation {
  margin-top: 30px;
}
</style>