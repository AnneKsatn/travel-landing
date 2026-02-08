<template>
  <div class="constructor-block">
    <!-- Фоновый градиент -->
    <div class="constructor-bg">
      <div class="bg-gradient-1"></div>
      <div class="bg-gradient-2"></div>
    </div>

    <div class="container">
      <!-- Шапка блока -->
      <div class="constructor-header">
        <div class="section-label">
          <i class="fas fa-cogs"></i>
          {{ t('ai.humanCombination') }}
        </div>
        
        <h2 class="section-title">
          {{ t('constructor.title') }}
        </h2>
        
        <p class="section-description">
          {{ t('constructor.description') }}
        </p>
      </div>

      <!-- Две колонки с фичами -->
      <div class="constructor-features">
        <!-- Левая колонка -->
        <ConstructorBlockFeatureEdit
          :t="t"
          :format-currency="formatCurrency"
        />
        
        <!-- Правая колонка -->
        <!-- <ConstructorBlockFeatureCategories
          :t="t"
          :format-currency="formatCurrency"
          :selected-options="selectedOptions"
        /> -->
      </div>

      <!-- Общая статистика конструктора -->
      <ConstructorBlockStats
        :t="t"
      />
    </div>
  </div>
</template>

<script>
import { useLanguage } from '../i18n/useLanguage'
import ConstructorBlockFeatureEdit from './ConstructorBlockFeatureEdit.vue'
import ConstructorBlockFeatureCategories from './ConstructorBlockFeatureCategories.vue'
import ConstructorBlockStats from './ConstructorBlockStats.vue'

export default {
  name: 'ConstructorBlock',
  components: {
    ConstructorBlockFeatureEdit,
    ConstructorBlockFeatureCategories,
    ConstructorBlockStats
  },
  setup() {
    const { t, formatCurrency } = useLanguage()
    
    const selectedOptions = {
      hotel: 'comfort',
      food: 'premium'
    }

    return {
      t,
      formatCurrency,
      selectedOptions
    }
  },
  mounted() {
    this.setupAnimations()
  },
  methods: {
    setupAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.table-row, .category-selector, .stat-card').forEach(el => {
        observer.observe(el)
      })
    }
  }
}
</script>

<style scoped>
.constructor-block {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
  padding: 100px 40px;
}

.constructor-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bg-gradient-1 {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 40%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.04), rgba(6, 182, 212, 0.04));
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

.bg-gradient-2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 60%;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.04), rgba(34, 211, 238, 0.04));
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Шапка блока */
.constructor-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(139, 92, 246, 0.1);
  color: var(--primary);
  padding: 12px 24px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 25px;
  color: var(--text);
}

.section-description {
  font-size: 20px;
  line-height: 1.7;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
}

/* Две колонки с фичами */
.constructor-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 80px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Адаптивность */
@media (max-width: 1200px) {
  .constructor-features {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}

@media (max-width: 768px) {
  .constructor-block {
    padding: 60px 20px;
  }
  
  .section-title {
    font-size: 36px;
  }
}
</style>