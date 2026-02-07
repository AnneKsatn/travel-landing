<template>
  <div class="hero-section-mobile">
    <div class="mobile-hero">
      <FeaturesAudienceSection />

      <!-- Форма -->
      <div class="form-section">
        <h2 class="form-title">Просто скажите, куда хотите</h2>
        <p class="form-subtitle">AI создаст черновик маршрута за 2 минуты</p>

        <form @submit.prevent="handleSubmit" class="simple-form" autocomplete="off">
          <div class="input-wrapper">
            <div class="input-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>

            <input
              type="text"
              v-model="destination"
              placeholder="Куда хотите? Санторини, Токио, Бали..."
              class="destination-input"
              required
            />
          </div>

          <!-- Быстрые подсказки -->
          <div class="quick-suggestions">
            <span class="suggest-label">Популярное сейчас:</span>
            <div class="suggestion-tags">
              <button
                type="button"
                v-for="place in popularPlaces"
                :key="place"
                @click="selectPlace(place)"
                class="suggestion-tag"
              >
                {{ place }}
              </button>
            </div>
          </div>

          <!-- Кнопка отправки -->
          <button
            type="submit"
            class="submit-btn"
            :disabled="isLoading || !destination.trim()"
          >
            <span v-if="!isLoading">
              <i class="fas fa-robot"></i>
              Создать AI-план путешествия
            </span>
            <span v-else>
              <i class="fas fa-spinner fa-spin"></i>
              AI планирует...
            </span>
          </button>
        </form>

        <!-- Гарантии -->
        <div class="guarantees">
          <div class="guarantee">
            <i class="fas fa-bolt"></i>
            <span>2 минуты на черновик</span>
          </div>
          <div class="guarantee">
            <i class="fas fa-sliders-h"></i>
            <span>Полный контроль в конструкторе</span>
          </div>
          <div class="guarantee">
            <i class="fas fa-shield-alt"></i>
            <span>Без регистрации</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturesAudienceSection from "./FeaturesAudienceSection.vue";

export default {
  name: "HeroSectionMobile",
  components: {
    FeaturesAudienceSection,
  },
  data() {
    return {
      destination: "",
      isLoading: false,
      popularPlaces: ["Санторини", "Токио", "Бали", "Париж", "Испания", "Турция"],
    };
  },
  methods: {
    selectPlace(place) {
      this.destination = place;
    },

    handleSubmit() {
      if (!this.destination.trim()) {
        return;
      }

      this.isLoading = true;

      setTimeout(() => {
        this.$emit("destination-submitted", this.destination);
        this.isLoading = false;
        console.log("Переход в анкету для:", this.destination);
      }, 800);
    },
  },
  emits: ["destination-submitted"],
};
</script>

<style scoped>
.hero-section-mobile {
  padding: 20px 20px 40px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.mobile-hero {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

/* What Does Section */
.what-does-section {
  margin-bottom: 30px;
}

.main-title {
  font-size: 26px;
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1.2;
  margin-bottom: 8px;
  text-align: center;
}

.highlight-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

.section-subtitle {
  text-align: center;
  font-size: 16px;
  color: var(--text-medium);
  margin-bottom: 25px;
  font-weight: 500;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.1);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  color: white;
  font-size: 20px;
}

.feature-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 8px;
  line-height: 1.2;
}

.feature-card p {
  font-size: 13px;
  color: var(--text-medium);
  line-height: 1.3;
}

/* For Who Section */
.for-who-section {
  background: rgba(14, 165, 233, 0.05);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid rgba(14, 165, 233, 0.1);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.section-title i {
  color: var(--primary);
  font-size: 20px;
}

.for-who-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.who-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.who-item i {
  color: #10b981;
  font-size: 16px;
  margin-top: 2px;
  min-width: 20px;
}

.who-item span {
  font-size: 15px;
  color: var(--text-dark);
  line-height: 1.3;
}

/* Form Section */
.form-section {
  margin-bottom: 20px;
}

.form-title {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--text-dark);
  line-height: 1.2;
  text-align: center;
}

.form-subtitle {
  text-align: center;
  font-size: 15px;
  color: var(--text-medium);
  margin-bottom: 20px;
}

/* Форма */
.simple-form {
  width: 100%;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 5px 5px 5px 20px;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.1), 0 0 0 1px rgba(139, 92, 246, 0.1);
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.15), 0 0 0 2px var(--primary);
  transform: translateY(-2px);
}

.input-icon {
  color: var(--primary);
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.destination-input {
  flex: 1;
  border: none;
  padding: 18px 10px;
  font-size: 17px;
  color: var(--text-dark);
  background: transparent;
  outline: none;
  font-weight: 500;
}

.destination-input::placeholder {
  color: #94a3b8;
  font-weight: normal;
}

.submit-btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  padding: 20px;
  border-radius: 16px;
  color: white;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 25px;
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.2);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(139, 92, 246, 0.3);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

/* Быстрые подсказки */
.quick-suggestions {
  margin-bottom: 25px;
}

.suggest-label {
  display: block;
  font-size: 13px;
  color: var(--text-medium);
  margin-bottom: 10px;
  text-align: center;
}

.suggestion-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.suggestion-tag {
  padding: 10px 16px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  color: var(--primary);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.suggestion-tag:hover {
  background: rgba(139, 92, 246, 0.15);
  transform: translateY(-1px);
}

.suggestion-tag:active {
  transform: scale(0.98);
}

/* Гарантии */
.guarantees {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.guarantee {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text-dark);
  background: white;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03);
}

.guarantee i {
  color: var(--primary);
  font-size: 14px;
  min-width: 20px;
}

/* Адаптивность */
@media (max-width: 480px) {
  .hero-section-mobile {
    padding: 15px 16px 35px;
  }

  .main-title {
    font-size: 22px;
  }

  .section-subtitle {
    font-size: 15px;
    margin-bottom: 20px;
  }

  .features-grid {
    gap: 12px;
  }

  .feature-card {
    padding: 16px;
  }

  .card-icon {
    width: 44px;
    height: 44px;
    font-size: 18px;
    margin-bottom: 12px;
  }

  .feature-card h3 {
    font-size: 15px;
  }

  .feature-card p {
    font-size: 12px;
  }

  .for-who-section {
    padding: 16px;
  }

  .section-title {
    font-size: 16px;
  }

  .who-item span {
    font-size: 14px;
  }

  .form-title {
    font-size: 20px;
  }

  .form-subtitle {
    font-size: 14px;
  }

  .input-wrapper {
    padding: 5px 5px 5px 16px;
  }

  .destination-input {
    padding: 16px 10px;
    font-size: 16px;
  }

  .suggestion-tag {
    padding: 8px 14px;
    font-size: 12px;
  }

  .submit-btn {
    padding: 18px;
    font-size: 16px;
  }

  .guarantee {
    padding: 10px 14px;
    font-size: 13px;
  }
}

@media (max-width: 360px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .suggestion-tags {
    gap: 6px;
  }
}
</style>
