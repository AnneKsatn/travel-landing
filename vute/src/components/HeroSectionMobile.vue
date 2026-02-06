<template>
  <div class="hero-section-mobile">
    <div class="mobile-hero">
      <!-- Пошаговые преимущества -->
      <div class="benefits-list">
        <div class="benefit-item">
          <div class="benefit-icon">
            <i class="fas fa-route"></i>
          </div>
          <div class="benefit-text">
            <strong>Персонализированный маршрут</strong>
            <span>С учетом ваших интересов и предпочтений</span>
          </div>
        </div>
        
        <div class="benefit-item">
          <div class="benefit-icon">
            <i class="fas fa-calculator"></i>
          </div>
          <div class="benefit-text">
            <strong>Точный бюджет</strong>
            <span>Расчет всех расходов заранее</span>
          </div>
        </div>
        
        <div class="benefit-item">
          <div class="benefit-icon">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <div class="benefit-text">
            <strong>План на каждый день</strong>
            <span>Что, где и когда делать</span>
          </div>
        </div>
        
        <div class="benefit-item">
          <div class="benefit-icon">
            <i class="fas fa-sliders-h"></i>
          </div>
          <div class="benefit-text">
            <strong>Конструктор плана</strong>
            <span>Редактируйте готовый маршрут как конструктор</span>
          </div>
        </div>
      </div>

      <!-- Заголовок и форма ближе друг к другу -->
      <div class="form-section">
        <h2 class="form-title">
          Куда хотите <span class="highlight">поехать?</span>
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
              <i class="fas fa-paper-plane"></i>
              Начать планирование
            </span>
            <span v-else>
              <i class="fas fa-spinner fa-spin"></i>
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
          <span>Редактируемый план</span>
        </div>
      </div>

      <!-- Минимальное социальное доказательство -->
      <div class="mini-stats">
        <div class="stat">
          <div class="stat-number">42,678</div>
          <div class="stat-label">планов создано</div>
        </div>
        <div class="stat">
          <div class="stat-number">4.9</div>
          <div class="stat-label">средний рейтинг</div>
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
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.mobile-hero {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

/* Список преимуществ */
.benefits-list {
  margin-bottom: 40px;
  text-align: left;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
}

.benefit-item:hover {
  border-color: rgba(139, 92, 246, 0.1);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.08);
}

.benefit-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  flex-shrink: 0;
}

.benefit-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.benefit-text strong {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.2;
}

.benefit-text span {
  font-size: 13px;
  color: var(--text-medium);
  line-height: 1.4;
}

/* Секция формы - заголовок ближе к инпуту */
.form-section {
  margin-bottom: 40px;
}

.form-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 20px;
  color: var(--text-dark);
  line-height: 1.1;
  text-align: center;
}

.highlight {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
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
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
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

/* Минимальная статистика */
.mini-stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-top: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 28px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 4px;
  line-height: 1;
}

.stat-label {
  font-size: 11px;
  color: var(--text-medium);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Адаптивность */
@media (max-width: 480px) {
  .hero-section-mobile {
    padding: 25px 16px 35px;
  }
  
  .form-title {
    font-size: 28px;
    margin-bottom: 18px;
  }
  
  .benefit-item {
    padding: 12px;
    gap: 12px;
  }
  
  .benefit-icon {
    width: 44px;
    height: 44px;
    font-size: 16px;
  }
  
  .benefit-text strong {
    font-size: 15px;
  }
  
  .benefit-text span {
    font-size: 12px;
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
  
  .mini-stats {
    gap: 25px;
  }
  
  .stat-number {
    font-size: 24px;
  }
}

@media (max-width: 360px) {
  .benefit-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
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