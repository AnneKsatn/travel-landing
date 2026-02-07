<template>
  <div class="mobile-app">
    <MobileHeader @language-changed="setLanguage" />
    
    <div class="hero-section-mobile">
      <div class="mobile-hero">
        <FeaturesSection />
        <HeroForm @destination-submitted="handleDestinationSubmitted" />
      </div>
    </div>
    
    <DemoSection @start-planning="startPlanning" />
    <MobileFooter />
  </div>
</template>

<script>
import MobileHeader from "./MobileHeader.vue";
import FeaturesSection from "./FeaturesSection.vue";
import HeroForm from "./HeroForm.vue";
import DemoSection from "./DemoSection.vue";
import MobileFooter from "./MobileFooter.vue";

export default {
  name: "MobileApp",
  components: {
    MobileHeader,
    FeaturesSection,
    HeroForm,
    DemoSection,
    MobileFooter,
  },
  methods: {
    startPlanning() {
      console.log("Начать планирование");
    },
    handleDestinationSubmitted(destination) {
      console.log("Направление отправлено:", destination);
    },
    setLanguage(lang) {
      console.log("Язык изменен:", lang);
    },
  },
};
</script>

<style scoped>
.mobile-app {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.hero-section-mobile {
  padding: 20px 20px 40px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.mobile-hero {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

@media (max-width: 480px) {
  .hero-section-mobile {
    padding: 15px 16px 35px;
  }
}
</style>