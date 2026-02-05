<template>
  <div class="luxury-container">
    <!-- Левая часть - текст -->
    <LuxuryHeader 
      @start-planning="$emit('start-planning')" 
      @learn-more="$emit('learn-more')" 
    />
    
    <!-- Правая часть - карточки -->
    <div class="luxury-cards-section">
      <DestinationCard 
        :destination="currentDestination"
        class="floating delay-1"
      />
      
      <ScheduleCard class="floating delay-2" />
      
      <BudgetCard 
        :initial-budget="initialBudget"
        class="floating delay-3"
        @budget-analyzed="$emit('budget-analyzed', $event)"
      />
      
      <AICard class="floating" />
    </div>
  </div>
</template>

<script>
import LuxuryHeader from './LuxuryHeader.vue'
import DestinationCard from './DestinationCard.vue'
import BudgetCard from './BudgetCard.vue'
import ScheduleCard from './ScheduleCard.vue'
import AICard from './AICard.vue'

export default {
  name: 'HeroSection',
  components: {
    LuxuryHeader,
    DestinationCard,
    BudgetCard,
    ScheduleCard,
    AICard
  },
  props: {
    currentDestination: {
      type: Object,
      required: true
    },
    initialBudget: {
      type: Number,
      default: 87500
    }
  },
  emits: ['start-planning', 'learn-more', 'budget-analyzed']
}
</script>

<style scoped>
.luxury-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  min-height: calc(100vh - 160px);
}

/* Правая часть - карточки */
.luxury-cards-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  perspective: 1000px;
}

/* Адаптивность */
@media (max-width: 1200px) {
  .luxury-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .luxury-cards-section {
    grid-template-columns: 1fr;
  }
  
  .luxury-container {
    padding: 30px 20px;
  }
}

/* Анимации */
.floating {
  animation: float 6s ease-in-out infinite;
}

.delay-1 {
  animation-delay: 1s;
}

.delay-2 {
  animation-delay: 2s;
}

.delay-3 {
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
</style>