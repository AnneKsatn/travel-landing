<template>
  <div class="luxury-card schedule-card">
    <div class="budget-header">
      <div class="card-icon-container">
        <i class="fas fa-calendar-alt"></i>
      </div>
      <div>
        <h3 class="card-title">Расписание дня</h3>
        <div class="card-subtitle">Идеально сбалансированный график</div>
      </div>
    </div>
    
    <div class="timeline">
      <div class="timeline-item" v-for="item in timeline" :key="item.time">
        <div class="timeline-time">{{ item.time }}</div>
        <div class="timeline-dot"></div>
        <div class="timeline-text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleCard',
  data() {
    return {
      timeline: [
        { time: '09:00', text: 'Завтрак в ресторане с видом на море' },
        { time: '11:00', text: 'Экскурсия по историческому центру' },
        { time: '14:00', text: 'Обед в гастрономическом ресторане' },
        { time: '16:00', text: 'Отдых на пляже или спа-процедуры' }
      ]
    }
  }
}
</script>

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