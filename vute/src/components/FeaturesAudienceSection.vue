<template>
  <div class="page-container">
    <FeaturesSection />
  </div>
</template>

<script>
import FeaturesSection from './FeaturesSection.vue';
import AudienceSection from './AudienceSection.vue';

export default {
  name: "HomePage",
  components: {
    FeaturesSection,
    AudienceSection
  }
};
</script>

<style>
.page-container {
  margin-bottom: 30px;
}
</style>