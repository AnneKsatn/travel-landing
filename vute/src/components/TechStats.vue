<template>
  <div class="tech-stats">
    <div class="stat">
      <i class="fas fa-users"></i>
      <span>{{ t('techStats.users') }}: <span class="stat-value">128K+</span></span>
    </div>
    <div class="stat">
      <i class="fas fa-route"></i>
      <span>{{ t('techStats.routes') }}: <span class="stat-value">42K+</span></span>
    </div>
    <div class="stat">
      <i class="fas fa-brain"></i>
      <span>{{ t('techStats.accuracy') }}: <span class="stat-value">98.7%</span></span>
    </div>
  </div>
</template>

<script>
import { useLanguage } from '../i18n/useLanguage'

export default {
  name: 'TechStats',
  setup() {
    const { t } = useLanguage()
    
    return {
      t
    }
  }
}
</script>

<style scoped>
.tech-stats {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border-radius: 100px;
    padding: 16px 32px;
    display: flex;
    justify-content: center;
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