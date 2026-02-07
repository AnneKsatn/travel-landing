<template>
  <div class="hero-section-mobile">
    <div class="mobile-hero">
      <!-- Ценности и социальное доказательство -->
      <div class="value-section">
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">
              <i class="fas fa-route"></i>
            </div>
            <div class="benefit-content">
              <h3>Персональный маршрут</h3>
              <p>С учетом ваших интересов и предпочтений</p>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">
              <i class="fas fa-calculator"></i>
            </div>
            <div class="benefit-content">
              <h3>Честный бюджет</h3>
              <p>Без скрытых расходов и неожиданностей</p>
            </div>
          </div>
        </div>

        <div class="social-proof">
          <div class="proof-content">
            <i class="fas fa-users"></i>
            <div class="proof-text">
              <strong>42K+ туристов</strong> доверяют планирование нам
            </div>
          </div>
        </div>
      </div>

      <!-- Форма планирования -->
      <div class="form-section">
        <h2 class="form-title">
          Куда <span class="highlight">отправимся</span>?
        </h2>

        <form @submit.prevent="handleSubmit" class="simple-form" autocomplete="off">
          <div class="input-wrapper">
            <div class="input-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            
            <input
              type="text"
              v-model="destination"
              placeholder="Например: Санторини, Токио, Бали..."
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
              Построить мой маршрут
            </span>
            <span v-else>
              <i class="fas fa-spinner fa-spin"></i>
              Создаем план...
            </span>
          </button>
        </form>

        <!-- Гарантии -->
        <div class="guarantees">
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
  padding: 20px 20px 40px;
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

/* Секция ценностей */
.value-section {
  margin-bottom: 30px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

.benefit-card {
  background: white;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(14, 165, 233, 0.1);
  text-align: center;
}

.benefit-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  color: white;
  font-size: 18px;
}

.benefit-content h3 {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 6px;
  line-height: 1.2;
}

.benefit-content p {
  font-size: 12px;
  color: var(--text-medium);
  line-height: 1.3;
}

/* Социальное доказательство */
.social-proof {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 16px;
  padding: 18px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.15);
}

.proof-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.proof-content i {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.9);
}

.proof-text {
  text-align: left;
  font-size: 15px;
  line-height: 1.3;
}

.proof-text strong {
  font-weight: 800;
  display: block;
  margin-bottom: 2px;
}

/* Форма */
.form-section {
  margin-bottom: 20px;
}

.form-title {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 20px;
  color: var(--text-dark);
  line-height: 1.2;
  text-align: center;
}

.form-title .highlight {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
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
    padding: 15px 16px 35px;
  }
  
  .form-title {
    font-size: 26px;
    margin-bottom: 18px;
  }
  
  .benefits-grid {
    gap: 12px;
  }
  
  .benefit-card {
    padding: 15px;
  }
  
  .benefit-icon {
    width: 44px;
    height: 44px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .benefit-content h3 {
    font-size: 14px;
  }
  
  .benefit-content p {
    font-size: 11px;
  }
  
  .social-proof {
    padding: 16px;
  }
  
  .proof-text {
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
    padding: 8px 14px;
    font-size: 12px;
  }
  
  .guarantees {
    gap: 10px;
  }
}

@media (max-width: 360px) {
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .suggestion-tags {
    gap: 6px;
  }
  
  .guarantees {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>