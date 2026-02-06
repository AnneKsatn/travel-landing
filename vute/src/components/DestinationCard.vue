<template>
  <div class="luxury-card destination-photo-card">
    <img :src="destination.photo" 
         :alt="destination.name" 
         class="destination-photo">
    <div class="photo-overlay">
      <div class="destination-name">{{ destination.name }}</div>
      <div class="destination-location">
        <i class="fas fa-map-marker-alt"></i>
        <span>{{ destination.location }}</span>
      </div>
    </div>
    <div class="destination-rating">{{ t('cards.destination.rating') }}: {{ destination.rating }}</div>
  </div>
</template>

<script>
import { useLanguage } from '../i18n/useLanguage'

export default {
  name: 'DestinationCard',
  props: {
    destination: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { t } = useLanguage()
    
    return {
      t
    }
  }
}
</script>

<style scoped>
.destination-photo-card {
    padding: 0;
    overflow: hidden;
    min-height: 350px;
}

.destination-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 28px;
}

.photo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 32px;
    color: white;
}

.destination-name {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
}

.destination-location {
    font-size: 16px;
    opacity: 0.9;
    display: flex;
    align-items: center;
    gap: 8px;
}

.destination-rating {
    position: absolute;
    top: 25px;
    right: 25px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    color: var(--text);
    padding: 8px 16px;
    border-radius: 100px;
    font-weight: 700;
    font-size: 16px;
    box-shadow: var(--shadow);
}
</style>