<template>
  <div class="mobile-footer">
    <div class="footer-logo">
      <i class="fas fa-globe-americas"></i>
      <span>{{ t('app.name') }}</span>
    </div>
    <p class="footer-tagline">{{ t('app.slogan') }}</p>

    <div class="footer-copyright">© 2024 {{ t('app.name') }}. Все права защищены.</div>
  </div>
</template>

<script>
import { useLanguage } from '../i18n/useLanguage'

export default {
  name: "MobileFooter",
  setup() {
    const { t } = useLanguage()
    
    return {
      t
    }
  }
};
</script>

<style scoped>
.mobile-footer {
  text-align: center;
  padding: 30px 20px;
  background: linear-gradient(135deg, var(--text-dark), #334155);
  color: white;
  margin-top: 20px;
  border-radius: 30px 30px 0 0;
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 10px;
}

.footer-logo i {
  color: var(--primary);
}

.footer-tagline {
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 25px;
}

.footer-copyright {
  font-size: 12px;
  color: var(--text-light);
}

@media (max-width: 360px) {
  .footer-logo {
    font-size: 22px;
  }
}
</style>