<template>
  <div class="responsive-layout">
    <!-- Десктопная версия (768px и выше) -->
    <div class="desktop-view" v-if="!isMobile">
      <slot name="desktop"></slot>
    </div>
    
    <!-- Мобильная версия (меньше 768px) -->
    <div class="mobile-view" v-else>
      <slot name="mobile"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveLayout',
  data() {
    return {
      isMobile: this.checkIfMobile()
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    checkIfMobile() {
      // Проверяем ширину экрана И user-agent для точности
      const width = window.innerWidth
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      return width <= 768 && isTouchDevice
    },
    handleResize() {
      this.isMobile = this.checkIfMobile()
    }
  }
}
</script>

<style scoped>
.desktop-view, .mobile-view {
  width: 100%;
}

/* Стили для мобильного скролла */
.mobile-view {
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
}
</style>