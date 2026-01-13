<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';

interface ScheduleItem {
  time: string;
  activity: string;
}

interface Card {
  id: number;
  title: string;
  icon: string;
  type: string;
  budget?: number;
  scheduleItems?: ScheduleItem[];
  description: string;
}

interface Props {
  card: Card;
  position: string;
  currentBudget: number;
}

const props = defineProps<Props>();

// Добавляем состояние для анимации
const isVisible = ref(false);
const isTransitioning = ref(false);

// Классы и стили для плавных переходов
const cardClass = computed(() => {
  const classes = ['card'];
  
  // Добавляем класс позиции
  classes.push(`card-${props.position}`);
  
  // Добавляем классы видимости и анимации
  if (isVisible.value) classes.push('visible');
  if (isTransitioning.value) classes.push('transitioning');
  
  return classes.join(' ');
});

const cardStyle = computed(() => {
  const styles: any = {};
  
  // Для центральной карточки добавляем мягкую пульсацию
  if (props.position === 'center') {
    styles.animation = 'softPulse 8s infinite ease-in-out';
  }
  
  return styles;
});

// Определяем позиции для каждой карточки
const getTransform = computed(() => {
  switch (props.position) {
    case 'center':
      return 'translate(-50%, -50%) scale(1)';
    case 'left':
      return 'translate(-120%, -50%) scale(0.9)';
    case 'right':
      return 'translate(20%, -50%) scale(0.9)';
    default: // hidden
      return 'translate(150%, -50%) scale(0.8)';
  }
});

// Прозрачность в зависимости от позиции
const getOpacity = computed(() => {
  switch (props.position) {
    case 'center':
      return 1;
    case 'left':
    case 'right':
      return 0.7;
    default: // hidden
      return 0;
  }
});

// Z-index для правильного наложения
const getZIndex = computed(() => {
  switch (props.position) {
    case 'center':
      return 30;
    case 'left':
      return 20;
    case 'right':
      return 10;
    default:
      return 0;
  }
});

// Анимация появления
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 50);
});

// Эмит для клика
const emit = defineEmits(['click']);
</script>

<template>
  <div 
    :class="cardClass" 
    :style="{
      ...cardStyle,
      transform: getTransform,
      opacity: getOpacity,
      zIndex: getZIndex,
    }"
    @click="emit('click')"
  >
    <div class="card-icon">
      <i :class="card.icon"></i>
    </div>
    
    <h3 class="card-title">{{ card.title }}</h3>
    
    <div class="card-content">
      <p>{{ card.description }}</p>
      
      <!-- Бюджет -->
      <div v-if="card.type === 'budget'" class="budget-display">
        <div class="budget-amount">{{ Math.round(currentBudget).toLocaleString() }}</div>
        <div class="budget-currency">$</div>
      </div>
      <p v-if="card.type === 'budget'" class="budget-description">
        Итоговая стоимость для 7-дневного путешествия в Европу на двоих
      </p>
      
      <!-- Расписание -->
      <div v-if="card.type === 'schedule' && card.scheduleItems" class="schedule-container">
        <div 
          v-for="(item, index) in card.scheduleItems" 
          :key="index" 
          class="schedule-item"
        >
          <div class="schedule-time">{{ item.time }}</div>
          <div class="schedule-activity">{{ item.activity }}</div>
        </div>
      </div>
      
      <!-- Изображение-заглушка для других карточек -->
      <div v-if="card.type === 'route'" class="photo-placeholder">
        <i class="fas fa-route"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: absolute;
  border-radius: 20px;
  background: white;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform-origin: center;
  will-change: transform, opacity, filter;
}

/* Размеры карточек */
.card {
  width: 380px;
  height: 480px;
}

/* Для скрытых карточек - они уже справа */
.card-hidden {
  opacity: 0;
  transform: translate(150%, -50%) scale(0.8);
  filter: blur(4px);
}

/* Левая карточка */
.card-left {
  opacity: 0.7;
  filter: blur(1px) brightness(0.95);
  transform: translate(-120%, -50%) scale(0.9);
}

/* Центральная карточка */
.card-center {
  opacity: 1;
  filter: blur(0) brightness(1);
  transform: translate(-50%, -50%) scale(1);
  box-shadow: 
    0 20px 60px rgba(74, 109, 229, 0.15),
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Правая карточка */
.card-right {
  opacity: 0.7;
  filter: blur(1px) brightness(0.95);
  transform: translate(20%, -50%) scale(0.9);
}

/* Эффекты при наведении */
.card:hover:not(.card-center) {
  filter: blur(0.5px) brightness(1);
  opacity: 0.85;
  transform: translate(-50%, -50%) scale(0.95);
}

.card-center:hover {
  transform: translate(-50%, -50%) scale(1.02);
  box-shadow: 
    0 25px 70px rgba(74, 109, 229, 0.2),
    0 10px 40px rgba(0, 0, 0, 0.12);
}

.card-icon {
  font-size: 40px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #4a6de5, #6d8eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.4s ease;
}

.card:hover .card-icon {
  transform: scale(1.05);
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1a1a1a;
  transition: color 0.3s ease;
}

.card:hover .card-title {
  color: #4a6de5;
}

.card-content {
  flex: 1;
  color: #495057;
  font-size: 16px;
}

.card-content p {
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

.card:hover .card-content p {
  color: #343a40;
}

.budget-display {
  display: flex;
  align-items: baseline;
  margin: 20px 0 10px;
  transition: transform 0.3s ease;
}

.card:hover .budget-display {
  transform: translateY(-2px);
}

.budget-amount {
  font-size: 36px;
  font-weight: 800;
  color: #4a6de5;
  margin-right: 10px;
  transition: all 0.3s ease;
}

.card:hover .budget-amount {
  text-shadow: 0 2px 8px rgba(74, 109, 229, 0.2);
}

.budget-currency {
  font-size: 24px;
  color: #6c757d;
  font-weight: 600;
}

.budget-description {
  font-size: 14px;
  color: #6c757d;
  margin-top: 5px;
  opacity: 0.8;
}

.schedule-container {
  margin-top: 15px;
}

.schedule-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.schedule-item:hover {
  background-color: #edf2ff;
  border-left-color: #4a6de5;
  transform: translateX(4px);
}

.schedule-time {
  font-weight: 700;
  color: #4a6de5;
  min-width: 80px;
}

.schedule-activity {
  flex: 1;
}

.photo-placeholder {
  height: 180px;
  background: linear-gradient(135deg, #e3e7ff, #f0f2ff);
  border-radius: 12px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.4s ease;
}

.card:hover .photo-placeholder {
  background: linear-gradient(135deg, #d7ddff, #e8ebff);
  transform: scale(1.02);
}

.photo-placeholder i {
  font-size: 60px;
  color: #a5b4fc;
  opacity: 0.7;
  transition: all 0.4s ease;
}

.card:hover .photo-placeholder i {
  opacity: 0.9;
  transform: scale(1.1);
}

/* Мягкая пульсация для центральной карточки */
@keyframes softPulse {
  0%, 100% { 
    box-shadow: 
      0 20px 60px rgba(74, 109, 229, 0.15),
      0 8px 32px rgba(0, 0, 0, 0.1);
  }
  50% { 
    box-shadow: 
      0 25px 70px rgba(74, 109, 229, 0.2),
      0 10px 40px rgba(0, 0, 0, 0.12);
  }
}

/* Плавное появление карточек */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(150%, -50%) scale(0.8);
    filter: blur(8px);
  }
  to {
    opacity: v-bind(getOpacity);
    transform: v-bind(getTransform);
    filter: blur(v-bind(getBlur));
  }
}

/* Адаптивность карточек */
@media (max-width: 1200px) {
  .card {
    width: 340px;
    height: 440px;
  }
}

@media (max-width: 768px) {
  .card {
    width: 300px;
    height: 400px;
    padding: 20px;
  }
  
  .card-title {
    font-size: 20px;
  }
  
  .budget-amount {
    font-size: 28px;
  }
  
  .card-content {
    font-size: 14px;
  }
  
  /* Уменьшаем дистанцию для мобильных */
  .card-left {
    transform: translate(-100%, -50%) scale(0.85);
  }
  
  .card-right {
    transform: translate(0%, -50%) scale(0.85);
  }
}
</style>