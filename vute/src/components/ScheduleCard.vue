<template>
  <div class="luxury-card schedule-card">
    <div class="card-header">
      <div class="header-left">
        <div class="card-icon">
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div>
          <h3 class="card-title">{{ t('cards.schedule.title') }}</h3>
          <div class="card-subtitle">{{ t('cards.schedule.subtitle') }}</div>
        </div>
      </div>
    </div>

    <div class="timeline-compact">
      <div class="timeline-item" v-for="item in schedule" :key="item.time">
        <div class="time-badge">{{ item.time }}</div>
        <div class="timeline-content">
          <div class="activity-name">{{ t(item.activityKey) }}</div>
          <div class="activity-details">{{ item.details }}</div>
        </div>
      </div>
    </div>

    <div class="schedule-note">
      <i class="fas fa-robot"></i>
      <span>{{ t('ai.insight') }}</span>
    </div>
  </div>
</template>

<script>
import { useLanguage } from '../i18n/useLanguage'

export default {
  name: 'ScheduleCard',
  setup() {
    const { t } = useLanguage()
    
    const schedule = [
      { time: '9:00', activityKey: 'schedule.breakfast', details: 'В кафе с видом на кальдеру' },
      { time: '10:30', activityKey: 'schedule.walk', details: 'По улицам Ии' },
      { time: '13:00', activityKey: 'schedule.lunch', details: 'Местная таверна' },
      { time: '15:00', activityKey: 'schedule.beach', details: 'Чёрный песок Периссы' },
      { time: '18:00', activityKey: 'schedule.sunset', details: 'Смотровая площадка' }
    ]

    return {
      t,
      schedule
    }
  }
}
</script>

<style scoped>
.schedule-card {
  padding: 20px;
  min-height: auto;
  height: fit-content;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 16px;
}

.card-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 2px;
}

.card-subtitle {
  font-size: 12px;
  color: var(--text-light);
}

.schedule-badge {
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Компактный таймлайн */
.timeline-compact {
  margin-bottom: 15px;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}

.timeline-item:last-child {
  border-bottom: none;
}

.time-badge {
  flex-shrink: 0;
  background: rgba(139, 92, 246, 0.1);
  color: var(--primary);
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  min-width: 45px;
  text-align: center;
}

.timeline-content {
  flex: 1;
}

.activity-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 2px;
}

.activity-details {
  font-size: 11px;
  color: var(--text-light);
  line-height: 1.3;
}

.schedule-note {
  background: rgba(16, 185, 129, 0.05);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 11px;
  color: var(--text-light);
  border-left: 2px solid #10b981;
}

.schedule-note i {
  color: #10b981;
  font-size: 12px;
}

/* Анимация при наведении */
.timeline-item:hover {
  background: rgba(139, 92, 246, 0.03);
  border-radius: 6px;
  padding: 8px;
  margin: 0 -8px;
}

.timeline-item:hover .time-badge {
  background: var(--primary);
  color: white;
}

@media (max-width: 768px) {
  .schedule-card {
    max-width: 100%;
  }
}
</style>
<style scoped>
.schedule-card .timeline {
    margin-top: 20px;
}

.timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.timeline-time {
    width: 60px;
    font-weight: 600;
    color: var(--primary);
    font-size: 14px;
}

.timeline-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary);
    margin: 0 15px;
    position: relative;
}

.timeline-dot:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.2);
}

.timeline-text {
    flex-grow: 1;
    font-size: 14px;
    color: var(--text-light);
}
</style>