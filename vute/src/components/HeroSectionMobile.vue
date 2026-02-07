<template>
  <div class="hero-section-mobile">
    <div class="mobile-hero">
      <!-- Заголовок и форма ближе друг к другу -->
      <div class="form-section">
        <h2 class="form-title">
          <span class="highlight">Ваше идеальное путешествие</span>
          спланирует AI
        </h2>
        
        <!-- Микро-иконки преимуществ -->
        <div class="benefits-icons">
          <div class="benefit-icon-item">
            <i class="fas fa-route"></i>
            <span>Маршрут</span>
          </div>
          <div class="benefit-icon-item">
            <i class="fas fa-calculator"></i>
            <span>Бюджет</span>
          </div>
          <div class="benefit-icon-item">
            <i class="fas fa-calendar-alt"></i>
            <span>План дня</span>
          </div>
          <div class="benefit-icon-item">
            <i class="fas fa-sliders-h"></i>
            <span>Конструктор</span>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="simple-form" autocomplete="off">
          <div class="input-wrapper">
            <div class="input-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            
            <input
              type="text"
              v-model="destination"
              placeholder="Куда хотите поехать? Например: Санторини, Токио..."
              class="destination-input"
              required
            >
          </div>

          <!-- Быстрые подсказки -->
          <div class="quick-suggestions">
            <span class="suggest-label">Популярные направления:</span>
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
          <button type="submit" class="submit-btn" :disabled="isLoading || !destination.trim()">
            <span v-if="!isLoading">
              <i class="fas fa-magic"></i>
              Создать план путешествия
            </span>
            <span v-else>
              <i class="fas fa-spinner fa-spin"></i>
              ИИ анализирует...
            </span>
          </button>
        </form>
      </div>

      <!-- Минимальные гарантии -->
      <div class="mini-guarantees">
        <div class="guarantee">
          <i class="fas fa-bolt"></i>
          <span>2 минуты</span>
        </div>
        <div class="guarantee">
          <i class="fas fa-edit"></i>
          <span>Редактируемый</span>
        </div>
        <div class="guarantee">
          <i class="fas fa-shield-alt"></i>
          <span>Без регистрации</span>
        </div>
        <div class="guarantee">
          <i class="fas fa-robot"></i>
          <span>AI-помощник</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSectionMobile",
  data() {
    return {
      destination: "",
      isLoading: false,
      popularPlaces: ["Санторини", "Токио", "Бали", "Париж"],
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
  padding: 30px 20px 40px;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.mobile-hero {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

/* Секция формы - больше воздуха */
.form-section {
  margin-bottom: 35px;
}

.form-title {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 12px;
  color: var(--text-dark);
  line-height: 1.2;
  text-align: center;
}

.form-title .highlight {
  display: block;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
}

.form-subtitle {
  font-size: 15px;
  color: var(--text-medium);
  text-align: center;
  margin-bottom: 25px;
  line-height: 1.4;
}

/* Микро-иконки преимуществ */
.benefits-icons {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 30px;
  max-width: 400px;
  gap: 12px;
  padding: 0 5px;
}

.benefit-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.benefit-icon-item i {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
}

.benefit-icon-item span {
  font-size: 11px;
  color: var(--text-medium);
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
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

/* Минимальные гарантии */
.mini-guarantees {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  padding-top: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.guarantee {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-medium);
  background: white;
  padding: 10px 16px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03);
}

.guarantee i {
  color: var(--primary);
  font-size: 13px;
}

/* Адаптивность */
@media (max-width: 480px) {
  .hero-section-mobile {
    padding: 25px 16px 35px;
  }
  
  .form-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .form-subtitle {
    font-size: 14px;
    margin-bottom: 20px;
  }
  
  .benefits-icons {
    margin-bottom: 25px;
    gap: 8px;
  }
  
  .benefit-icon-item i {
    width: 36px;
    height: 36px;
    font-size: 15px;
  }
  
  .benefit-icon-item span {
    font-size: 10px;
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
    padding: 8px 14px;
    font-size: 12px;
  }
  
  .mini-guarantees {
    gap: 10px;
  }
}

@media (max-width: 360px) {
  .benefits-icons {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
  
  .benefit-icon-item {
    flex: 0 0 calc(50% - 15px);
  }
  
  .suggestion-tags {
    gap: 6px;
  }
  
  .mini-guarantees {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>