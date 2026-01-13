<template>
  <div class="simple-cta">
    <div class="cta-container">
      <div class="cta-content">
        <!-- Заголовок -->
        <h2 class="cta-title">
          Куда хотите <span class="highlight">поехать?</span>
        </h2>
        
        <p class="cta-subtitle">
          Введите направление — AI создаст идеальный маршрут за 2 минуты
        </p>
        
        <!-- Простая форма -->
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
            
            <button 
              type="submit" 
              class="submit-btn"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">
                <i class="fas fa-paper-plane"></i>
                Поехали!
              </span>
              <span v-else>
                <i class="fas fa-spinner fa-spin"></i>
              </span>
            </button>
          </div>
          
          <!-- Подсказки популярных направлений -->
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
            <div class="guarantee">
              <i class="fas fa-lock"></i>
              <span>Безопасно</span>
            </div>
          </div>
        </form>
        
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
      
      <!-- Декоративный элемент -->
      <div class="cta-decoration">
        <div class="decoration-orb"></div>
        <div class="decoration-sparkle">
          <i class="fas fa-star"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleCTA',
  data() {
    return {
      destination: '',
      isLoading: false,
      popularPlaces: ['Санторини', 'Токио', 'Бали', 'Париж', 'Нью-Йорк', 'Дубай']
    }
  },
  methods: {
    selectPlace(place) {
      this.destination = place
    },
    
    handleSubmit() {
      if (!this.destination.trim()) {
        return
      }
      
      this.isLoading = true
      
      // Имитация отправки
      setTimeout(() => {
        // Эмитируем событие с данными
        this.$emit('destination-submitted', this.destination)
        
        // В реальном приложении здесь будет редирект:
        // window.location.href = `/questionnaire?destination=${encodeURIComponent(this.destination)}`
        
        this.isLoading = false
        
        // Можно показать уведомление в родительском компоненте
        console.log('Переход в анкету для:', this.destination)
      }, 800)
    }
  },
  emits: ['destination-submitted']
}
</script>

<style scoped>
.simple-cta {
  min-height: 80vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}

.cta-container {
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 2;
}

.cta-content {
  text-align: center;
  padding: 60px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  color: var(--text);
  line-height: 1.1;
}

.highlight {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-subtitle {
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 50px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Простая форма */
.simple-form {
  max-width: 500px;
  margin: 0 auto 40px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 20px;
  padding: 5px;
  box-shadow: 
    0 10px 30px rgba(139, 92, 246, 0.1),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  box-shadow: 
    0 15px 40px rgba(139, 92, 246, 0.15),
    0 0 0 2px var(--primary);
  transform: translateY(-2px);
}

.input-icon {
  padding: 0 20px;
  color: var(--primary);
  font-size: 20px;
  display: flex;
  align-items: center;
}

.destination-input {
  flex: 1;
  border: none;
  padding: 20px 0;
  font-size: 18px;
  color: var(--text);
  background: transparent;
  outline: none;
}

.destination-input::placeholder {
  color: #cbd5e1;
}

.submit-btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  padding: 18px 36px;
  border-radius: 16px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  margin-right: 5px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Быстрые подсказки */
.quick-suggestions {
  margin-bottom: 30px;
}

.suggest-label {
  display: block;
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 12px;
}

.suggestion-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.suggestion-tag {
  padding: 8px 16px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  color: var(--primary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.suggestion-tag:hover {
  background: rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
}

/* Минимальные гарантии */
.mini-guarantees {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.guarantee {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-light);
}

.guarantee i {
  color: var(--primary);
  font-size: 14px;
}

/* Минимальная статистика */
.mini-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 4px;
  line-height: 1;
}

.stat-label {
  font-size: 12px;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Декоративные элементы */
.cta-decoration {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  z-index: 1;
}

.decoration-orb {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.decoration-sparkle {
  position: absolute;
  top: 20%;
  left: 20%;
  animation: spin 4s linear infinite;
  color: rgba(139, 92, 246, 0.3);
  font-size: 40px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Адаптивность */
@media (max-width: 768px) {
  .cta-content {
    padding: 40px 20px;
  }
  
  .cta-title {
    font-size: 36px;
  }
  
  .cta-subtitle {
    font-size: 16px;
  }
  
  .input-wrapper {
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    background: transparent;
    box-shadow: none;
  }
  
  .destination-input {
    width: 100%;
    padding: 15px;
    border: 2px solid rgba(139, 92, 246, 0.2);
    border-radius: 12px;
    text-align: center;
  }
  
  .submit-btn {
    width: 100%;
    justify-content: center;
  }
  
  .mini-guarantees {
    gap: 15px;
  }
  
  .mini-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .cta-decoration {
    display: none;
  }
}
</style>