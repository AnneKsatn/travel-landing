<template>
  <div class="tech-stats">
    <div class="stat">
      <i class="fas fa-users"></i>
      <span>Пользователей: <span class="stat-value">128K+</span></span>
    </div>
    <div class="stat">
      <i class="fas fa-route"></i>
      <span>Спланировано маршрутов: <span class="stat-value">42K+</span></span>
    </div>
    <div class="stat">
      <i class="fas fa-brain"></i>
      <span>Точность AI: <span class="stat-value">98.7%</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechStats'
}
</script>

<style scoped>
.tech-stats {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border-radius: 100px;
    padding: 16px 32px;
    display: flex;
    gap: 40px;
    box-shadow: var(--shadow);
    border: 1px solid var(--glass-border);
}

.stat {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-light);
    font-size: 14px;
    font-weight: 500;
}

.stat i {
    color: var(--primary);
}

.stat-value {
    font-weight: 700;
    color: var(--text);
    margin-left: 5px;
}
</style>