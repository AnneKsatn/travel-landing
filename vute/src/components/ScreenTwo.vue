<template>
  <div class="screen-two">
    <!-- Фоновые элементы -->
    <div class="screen-bg">
      <div class="bg-gradient"></div>
      <div class="bg-dots"></div>
    </div>

    <div class="screen-container">
      <!-- Левый блок: описание системы -->
      <div class="left-panel">
        <h2 class="section-title">
          Чем больше вы расскажете, тем <span class="highlight">точнее </span> будет
          маршрут от AI.
        </h2>

        <p class="section-description">
          Простая анкета помогает нам лучше понять ваш идеальный маршрут. На
          основе 12 ключевых параметров AI создаёт профиль, чтобы
          подобрать места, которые заставят ваше сердце биться чаще.
        </p>

        <div class="preference-list">
          <div class="preference-item">
            <i class="fas fa-heart"></i>
            <div>
              <h4>Интересы</h4>
              <p>Искусство, гастрономия, природа, история, шопинг</p>
            </div>
          </div>

          <div class="preference-item">
            <i class="fas fa-walking"></i>
            <div>
              <h4>Активность</h4>
              <p>Расслабленный отдых, активные маршруты, баланс 50/50</p>
            </div>
          </div>

          <div class="preference-item">
            <i class="fas fa-users"></i>
            <div>
              <h4>Компания</h4>
              <p>Соло, пара, семья, друзья, бизнес-поездка</p>
            </div>
          </div>

          <div class="preference-item">
            <i class="fas fa-coins"></i>
            <div>
              <h4>Бюджет</h4>
              <p>Эконом, комфорт, премиум, люкс — без компромиссов</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Правый блок: карточки мест -->
      <div class="right-panel">
        <div class="places-grid">
          <!-- Карточка музея -->
          <div class="place-card museum-card">
            <div
              class="place-image"
              style="
                background-image: url('https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
              "
            ></div>
            <div class="place-content">
              <div class="place-icon">
                <i class="fas fa-landmark"></i>
              </div>
              <h4>Музеи & Галереи</h4>
              <p>Точное соответствие вашим художественным вкусам</p>
              <div class="place-tag">Искусство</div>
            </div>
          </div>

          <!-- Карточка парка -->
          <div class="place-card park-card">
            <div
              class="place-image"
              style="
                background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
              "
            ></div>
            <div class="place-content">
              <div class="place-icon">
                <i class="fas fa-tree"></i>
              </div>
              <h4>Природные парки</h4>
              <p>Маршруты по уровню сложности и живописности</p>
              <div class="place-tag">Природа</div>
            </div>
          </div>

          <!-- Карточка ресторана -->
          <div class="place-card restaurant-card">
            <div
              class="place-image"
              style="
                background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
              "
            ></div>
            <div class="place-content">
              <div class="place-icon">
                <i class="fas fa-utensils"></i>
              </div>
              <h4>Рестораны</h4>
              <p>Кухня, атмосфера, цена — всё по вашим предпочтениям</p>
              <div class="place-tag">Гастрономия</div>
            </div>
          </div>

          <!-- Карточка смотровой -->
          <div class="place-card viewpoint-card">
            <div
              class="place-image"
              style="
                background-image: url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
              "
            ></div>
            <div class="place-content">
              <div class="place-icon">
                <i class="fas fa-binoculars"></i>
              </div>
              <h4>Смотровые площадки</h4>
              <p>Лучшие виды в лучшее время суток</p>
              <div class="place-tag">Фото-точки</div>
            </div>
          </div>
        </div>

        <div class="ai-stats">
          <div class="stat-item">
            <div class="stat-value">1000+</div>
            <div class="stat-label">точек в базе AI</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">94%</div>
            <div class="stat-label">точность подбора</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">12</div>
            <div class="stat-label">параметров анализа</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScreenTwo",
  mounted() {
    this.setupScrollAnimations();
  },
  methods: {
    setupScrollAnimations() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
            }
          });
        },
        { threshold: 0.1 }
      );

      // Анимируем карточки
      document.querySelectorAll(".place-card").forEach((card) => {
        observer.observe(card);
      });

      // Анимируем элементы списка
      document.querySelectorAll(".preference-item").forEach((item) => {
        observer.observe(item);
      });
    },
  },
};
</script>

<style scoped>
.screen-two {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
  padding: 80px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.screen-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: white;
}

.bg-gradient {
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.03), rgba(6, 182, 212, 0.03));
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

.bg-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
}

.screen-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Левый блок */
.left-panel {
  padding-right: 40px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(139, 92, 246, 0.1);
  color: var(--primary);
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 25px;
  color: var(--text);
}

.highlight {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.section-description {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 40px;
}

/* Список предпочтений */
.preference-list {
  margin-bottom: 50px;
}

.preference-item {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.preference-item.animate-in {
  animation: slideUp 0.6s ease forwards;
}

.preference-item:nth-child(2) {
  animation-delay: 0.1s;
}
.preference-item:nth-child(3) {
  animation-delay: 0.2s;
}
.preference-item:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.preference-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(139, 92, 246, 0.1);
}

.preference-item i {
  font-size: 24px;
  color: var(--primary);
  width: 50px;
  height: 50px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.preference-item h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 5px;
}

.preference-item p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.5;
  margin: 0;
}

/* Процесс AI */
.ai-process {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  padding: 25px;
  border-radius: 20px;
  border: 1px solid rgba(139, 92, 246, 0.1);
}

.process-step {
  text-align: center;
  flex: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin: 0 auto 10px;
  font-size: 18px;
}

.step-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}

.process-arrow {
  color: var(--primary);
  font-size: 18px;
  opacity: 0.5;
}

/* Правый блок */
.right-panel {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.right-label {
  background: rgba(6, 182, 212, 0.1);
  color: var(--secondary);
  align-self: flex-start;
}

/* Сетка мест */
.places-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.place-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
}

.place-card.animate-in {
  animation: cardAppear 0.6s ease forwards;
}

.place-card:nth-child(2) {
  animation-delay: 0.1s;
}
.place-card:nth-child(3) {
  animation-delay: 0.2s;
}
.place-card:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes cardAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.place-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(139, 92, 246, 0.15);
}

.place-image {
  height: 180px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.place-content {
  padding: 20px;
  position: relative;
}

.place-icon {
  position: absolute;
  top: -25px;
  left: 20px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
}

.place-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin: 10px 0 8px;
  padding-top: 10px;
}

.place-card p {
  font-size: 13px;
  color: var(--text-light);
  line-height: 1.5;
  margin-bottom: 15px;
}

.place-tag {
  display: inline-block;
  background: rgba(139, 92, 246, 0.1);
  color: var(--primary);
  padding: 5px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
}

/* Статистика AI */
.ai-stats {
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  padding: 25px;
  border-radius: 20px;
  border: 1px solid rgba(139, 92, 246, 0.1);
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-value {
  font-size: 32px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 5px;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: var(--text-light);
  font-weight: 500;
}

.stat-item:nth-child(2) .stat-value {
  color: var(--secondary);
}

.stat-item:nth-child(3) .stat-value {
  color: #10b981;
}

/* Адаптивность */
@media (max-width: 1200px) {
  .screen-container {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .left-panel {
    padding-right: 0;
    text-align: center;
  }

  .preference-item {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .ai-process {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .screen-two {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .places-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .ai-stats {
    flex-direction: column;
    gap: 20px;
  }

  .ai-process {
    flex-direction: column;
    gap: 20px;
  }

  .process-arrow {
    transform: rotate(90deg);
  }
}
</style>
