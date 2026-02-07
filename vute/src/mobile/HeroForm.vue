<template>
  <div class="hero-form-section">
    <!-- Декоративный разделитель -->
    <div class="section-divider">
      <div class="divider-line"></div>
      <div class="divider-icon">
        <i class="fas fa-plane"></i>
      </div>
      <div class="divider-line"></div>
    </div>

    <!-- Форма -->
    <div class="form-section">
      <h2 class="form-title">{{ t("cta.title") }}</h2>

      <form @submit.prevent="handleSubmit" class="simple-form" autocomplete="off">
        <div class="input-wrapper">
          <div class="input-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>

          <input
            type="text"
            v-model="destination"
            :placeholder="t('cta.placeholder')"
            class="destination-input"
            required
          />
        </div>

        <!-- Быстрые подсказки -->
        <div class="quick-suggestions">
          <span class="suggest-label">{{ t("cta.suggestions") }}:</span>
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
        <button type="submit" class="submit-btn" :disabled="isLoading">
          <span v-if="!isLoading">{{ t("cta.submit") }}</span>
          <span v-else class="loading-text">
            <i class="fas fa-spinner fa-spin"></i> {{ t("common.loading") }}
          </span>
        </button>
      </form>

      <!-- Гарантии -->
      <div class="guarantees">
        <div class="guarantee">
          <i class="fas fa-shield-alt"></i>
          <span>{{ t("cta.guarantees.secure") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from "../i18n/useLanguage";

export default {
  name: "HeroForm",
  setup() {
    const { t } = useLanguage();

    return {
      t,
    };
  },
  data() {
    return {
      destination: "",
      isLoading: false,
      popularPlaces: ["Санторини", "Токио", "Бали"],
    };
  },
  methods: {
    selectPlace(place) {
      this.destination = place;
      const input = document.querySelector(".destination-input");
      if (input) {
        input.focus();
      }
    },

    handleSubmit() {
      if (!this.destination.trim()) {
        return;
      }

      this.isLoading = true;
      this.redirectToQuestionnaire();
      this.isLoading = false;
    },

    redirectToQuestionnaire() {
      const destination = this.destination.trim();

      // Вариант 1: Простой параметр
      const params = new URLSearchParams({
        destination: destination,
        source: "mobile_form_btn",
        timestamp: new Date().getTime(),
        locale: navigator.language,
        user_agent: navigator.userAgent,
      });

      // Используем тот вариант, который вам нужен:
      const url = `http://tripfy-app.tech/app/questionnaire?${params.toString()}`;

      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.hero-form-section {
  width: 100%;
}

.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 30px;
  gap: 15px;
}

.divider-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
}

.divider-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

.form-section {
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 30px 25px;
  border-radius: 24px;
}

.form-title {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 25px;
  color: var(--text-dark);
  line-height: 1.2;
  text-align: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.simple-form {
  width: 100%;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 5px 5px 5px 20px;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.12), 0 0 0 1px rgba(139, 92, 246, 0.15);
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  box-shadow: 0 15px 40px rgba(139, 92, 246, 0.18), 0 0 0 2px var(--primary);
  transform: translateY(-2px);
}

.input-icon {
  color: var(--primary);
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 12px;
}

.destination-input {
  flex: 1;
  border: none;
  padding: 20px 10px;
  font-size: 18px;
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
  padding: 22px;
  border-radius: 18px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 25px;
  box-shadow: 0 12px 30px rgba(139, 92, 246, 0.25);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.35);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.15) !important;
}

.loading-text {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quick-suggestions {
  margin-bottom: 30px;
}

.suggest-label {
  display: block;
  font-size: 14px;
  color: var(--text-medium);
  margin-bottom: 12px;
  text-align: center;
  font-weight: 600;
}

.suggestion-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.suggestion-tag {
  padding: 12px 18px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 20px;
  color: var(--primary);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.suggestion-tag:hover {
  background: rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.15);
}

.suggestion-tag:active {
  transform: scale(0.98);
}

.guarantees {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 30px;
}

.guarantee {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: var(--text-dark);
  background: rgba(139, 92, 246, 0.03);
  padding: 14px 18px;
  border-radius: 14px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(139, 92, 246, 0.08);
  transition: all 0.2s ease;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.guarantee:hover {
  background: rgba(139, 92, 246, 0.06);
  transform: translateX(3px);
}

.guarantee i {
  color: var(--primary);
  font-size: 16px;
  min-width: 24px;
}

@media (max-width: 480px) {
  .section-divider {
    margin: 30px 0 25px;
    gap: 10px;
  }
  .divider-icon {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
  .form-section {
    padding: 25px 20px;
    border-radius: 20px;
    margin-top: 15px;
  }
  .form-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .input-wrapper {
    padding: 5px 5px 5px 16px;
    margin-bottom: 20px;
  }
  .destination-input {
    padding: 18px 10px;
    font-size: 16px;
  }
  .suggest-label {
    font-size: 13px;
  }
  .suggestion-tag {
    padding: 10px 16px;
    font-size: 13px;
  }
  .submit-btn {
    padding: 20px;
    font-size: 17px;
    border-radius: 16px;
  }
  .guarantee {
    padding: 12px 16px;
    font-size: 14px;
  }
}

@media (max-width: 360px) {
  .form-section {
    padding: 20px 16px;
  }
  .form-title {
    font-size: 22px;
  }
  .suggestion-tags {
    gap: 8px;
  }
  .suggestion-tag {
    padding: 8px 14px;
    font-size: 12px;
  }
  .guarantee {
    padding: 10px 14px;
    font-size: 13px;
  }
  .divider-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
