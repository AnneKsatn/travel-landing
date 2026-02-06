<template>
  <div class="mobile-app">
    <!-- Header вынесен в отдельный компонент -->
    <MobileHeader @language-changed="setLanguage" />
    <HeroSectionMobile @destination-submitted="handleDestinationSubmitted" />

    <!-- Демо-секция: Что получит клиент -->
    <div class="mobile-demo-section">
      <div class="demo-header">
        <h2 class="demo-title">
          Что вы <span class="highlight">получите</span>
        </h2>
        <p class="demo-subtitle">Пример готового плана поездки на Санторини</p>
      </div>

      <!-- Пример расчета бюджета -->
      <div class="demo-card budget-demo">
        <div class="demo-card-header">
          <div class="card-icon">
            <i class="fas fa-calculator"></i>
          </div>
          <div class="card-title-content">
            <h3>Детальный расчет бюджета</h3>
            <p>Все расходы разбиты по категориям</p>
          </div>
        </div>

        <div class="budget-items">
          <div class="budget-item">
            <div class="budget-category">
              <i class="fas fa-hotel"></i>
              <span>Отель (7 ночей)</span>
            </div>
            <div class="budget-amount">24 500 ₽</div>
          </div>
          
          <div class="budget-item">
            <div class="budget-category">
              <i class="fas fa-utensils"></i>
              <span>Ужин в ресторане</span>
            </div>
            <div class="budget-amount">2 500 ₽</div>
          </div>
          
          <div class="budget-item">
            <div class="budget-category">
              <i class="fas fa-taxi"></i>
              <span>Трансфер из аэропорта</span>
            </div>
            <div class="budget-amount">1 400 ₽</div>
          </div>
          
          <div class="budget-item">
            <div class="budget-category">
              <i class="fas fa-gift"></i>
              <span>Сувениры</span>
            </div>
            <div class="budget-amount">1 500 ₽</div>
          </div>
          
          <div class="budget-item total">
            <div class="budget-category">
              <i class="fas fa-check-double"></i>
              <strong>Итого за день:</strong>
            </div>
            <div class="budget-amount total-amount">30 400 ₽</div>
          </div>
        </div>

        <div class="demo-insight">
          <i class="fas fa-lightbulb"></i>
          <span>AI учитывает сезонные цены и ваши предпочтения</span>
        </div>
      </div>

      <!-- Пример расписания дня -->
      <div class="demo-card schedule-demo">
        <div class="demo-card-header">
          <div class="card-icon">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <div class="card-title-content">
            <h3>План дня по часам</h3>
            <p>Что, где и когда делать</p>
          </div>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="time-badge">9:00</div>
            <div class="timeline-content">
              <div class="activity-title">Завтрак с видом на кальдеру</div>
              <div class="activity-desc">Кафе "Sunset View" в Ие</div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time-badge">10:30</div>
            <div class="timeline-content">
              <div class="activity-title">Прогулка по улицам Ии</div>
              <div class="activity-desc">Голубые купола и белые домики</div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time-badge">13:00</div>
            <div class="timeline-content">
              <div class="activity-title">Обед в местной таверне</div>
              <div class="activity-desc">Греческая кухня, морепродукты</div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time-badge">15:00</div>
            <div class="timeline-content">
              <div class="activity-title">Пляж Перисса</div>
              <div class="activity-desc">Черный вулканический песок</div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time-badge">18:00</div>
            <div class="timeline-content">
              <div class="activity-title">Закат на смотровой</div>
              <div class="activity-desc">Лучший вид на закат</div>
            </div>
          </div>
        </div>

        <div class="demo-insight">
          <i class="fas fa-robot"></i>
          <span>AI оптимизирует маршрут, чтобы вы ничего не пропустили</span>
        </div>
      </div>

      <!-- Пример конструктора -->
      <div class="demo-card constructor-demo">
        <div class="demo-card-header">
          <div class="card-icon">
            <i class="fas fa-sliders-h"></i>
          </div>
          <div class="card-title-content">
            <h3>Редактируйте как конструктор</h3>
            <p>Меняйте пункты, добавляйте свое</p>
          </div>
        </div>

        <div class="constructor-examples">
          <div class="example-item">
            <div class="example-icon edited">
              <i class="fas fa-pen"></i>
            </div>
            <div class="example-text">
              <strong>Изменили ужин</strong>
              <span>2 500 ₽ → 3 200 ₽</span>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-icon added">
              <i class="fas fa-plus"></i>
            </div>
            <div class="example-text">
              <strong>Добавили сувениры</strong>
              <span>+1 500 ₽ к бюджету</span>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-icon hidden">
              <i class="fas fa-times"></i>
            </div>
            <div class="example-text">
              <strong>Убрали парковку</strong>
              <span>— 800 ₽ из расчета</span>
            </div>
          </div>
        </div>

        <button class="constructor-btn" @click="startPlanning">
          <i class="fas fa-wand-magic-sparkles"></i>
          Создать свой план
        </button>
      </div>
    </div>

    <!-- Финальный призыв -->
    <div class="mobile-final-cta">
      <div class="final-cta-content">
        <div class="sparkles">
          <i class="fas fa-sparkles"></i>
        </div>
        <h3>Готовы к идеальному путешествию?</h3>
        <p>Создайте персонализированный план за 2 минуты</p>
        <button class="final-cta-btn" @click="startPlanning">
          <i class="fas fa-paper-plane"></i>
          Начать планирование
        </button>
      </div>
    </div>

    <!-- Мобильный футер -->
    <div class="mobile-footer">
      <div class="footer-logo">
        <i class="fas fa-globe-americas"></i>
        <span>Tripfy Planner</span>
      </div>
      <p class="footer-tagline">Ваш AI-помощник в идеальных путешествиях</p>

      <div class="footer-links">
        <a href="#" @click.prevent="showAbout">О нас</a>
        <a href="#" @click.prevent="showContacts">Контакты</a>
        <a href="#" @click.prevent="showPrivacy">Конфиденциальность</a>
      </div>

      <div class="footer-copyright">© 2023 Tripfy Planner. Все права защищены.</div>
    </div>
  </div>
</template>

<script>
import MobileHeader from "./MobileHeader.vue";
import HeroSectionMobile from "./HeroSectionMobile.vue";

export default {
  name: "MobileHero",
  components: {
    MobileHeader,
    HeroSectionMobile,
  },
  methods: {
    startPlanning() {
      this.$emit("start-planning");
    },
    handleDestinationSubmitted(destination) {
      this.$emit("destination-submitted", destination);
    },
    showAbout() {
      this.$emit("show-about");
    },
    showContacts() {
      this.$emit("show-contacts");
    },
    showPrivacy() {
      this.$emit("show-privacy");
    },
    setLanguage(lang) {
      this.$emit("language-changed", lang);
    },
  },
  emits: [
    "start-planning",
    "destination-submitted",
    "show-about",
    "show-contacts",
    "show-privacy",
    "language-changed",
  ],
};
</script>

<style scoped>
.mobile-app {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Секция демонстрации */
.mobile-demo-section {
  padding: 40px 20px;
  max-width: 500px;
  margin: 0 auto;
}

.demo-header {
  text-align: center;
  margin-bottom: 40px;
}

.demo-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 12px;
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.demo-subtitle {
  font-size: 16px;
  color: var(--text-medium);
  line-height: 1.5;
}

/* Карточки демонстрации */
.demo-card {
  background: white;
  border-radius: 24px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(14, 165, 233, 0.1);
}

.demo-card-header {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  flex-shrink: 0;
}

.card-title-content h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
  line-height: 1.2;
}

.card-title-content p {
  font-size: 14px;
  color: var(--text-medium);
}

/* Демо бюджета */
.budget-items {
  margin-bottom: 20px;
}

.budget-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 15px;
}

.budget-item:last-child {
  border-bottom: none;
}

.budget-item.total {
  border-top: 2px solid var(--primary);
  margin-top: 8px;
  padding-top: 16px;
  font-weight: 700;
}

.budget-category {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-dark);
}

.budget-category i {
  color: var(--primary);
  width: 20px;
  font-size: 16px;
}

.budget-amount {
  font-weight: 600;
  color: var(--text-dark);
}

.total-amount {
  font-size: 18px;
  color: var(--primary);
}

/* Демо расписания */
.timeline {
  margin-bottom: 20px;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.timeline-item:last-child {
  border-bottom: none;
}

.time-badge {
  flex-shrink: 0;
  width: 50px;
  height: 26px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.timeline-content {
  flex: 1;
}

.activity-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.activity-desc {
  font-size: 13px;
  color: var(--text-medium);
  line-height: 1.4;
}

/* Демо конструктора */
.constructor-examples {
  margin-bottom: 25px;
}

.example-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(139, 92, 246, 0.03);
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(139, 92, 246, 0.1);
}

.example-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  flex-shrink: 0;
}

.example-icon.edited {
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
}

.example-icon.added {
  background: linear-gradient(135deg, #f97316, #fb923c);
}

.example-icon.hidden {
  background: linear-gradient(135deg, #ef4444, #f87171);
}

.example-text {
  flex: 1;
}

.example-text strong {
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.example-text span {
  font-size: 13px;
  color: var(--text-medium);
}

.constructor-btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  padding: 18px 25px;
  border-radius: 16px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(14, 165, 233, 0.2);
}

.constructor-btn:active {
  transform: scale(0.98);
}

/* Инсайты */
.demo-insight {
  background: rgba(14, 165, 233, 0.05);
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--text-medium);
  border-left: 3px solid var(--primary);
}

.demo-insight i {
  color: var(--primary);
  font-size: 16px;
  flex-shrink: 0;
}

/* Финальный призыв */
.mobile-final-cta {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  margin: 0 20px 40px;
  padding: 40px 25px;
  border-radius: 28px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(14, 165, 233, 0.3);
  position: relative;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto 40px;
}

.mobile-final-cta::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
}

.final-cta-content {
  position: relative;
  z-index: 1;
}

.sparkles {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 24px;
}

.mobile-final-cta h3 {
  font-size: 24px;
  font-weight: 800;
  color: white;
  margin-bottom: 12px;
  line-height: 1.3;
}

.mobile-final-cta p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
}

.final-cta-btn {
  background: white;
  color: var(--primary);
  border: none;
  padding: 20px 30px;
  border-radius: 16px;
  font-size: 17px;
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.final-cta-btn:active {
  transform: scale(0.98);
}

/* Мобильный футер */
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

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 25px;
}

.footer-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-links a:active {
  color: white;
}

.footer-copyright {
  font-size: 12px;
  color: var(--text-light);
}

/* Адаптивность */
@media (max-width: 480px) {
  .mobile-demo-section {
    padding: 30px 16px;
  }
  
  .demo-title {
    font-size: 24px;
  }
  
  .demo-card {
    padding: 20px;
  }
  
  .card-icon {
    width: 44px;
    height: 44px;
    font-size: 18px;
  }
  
  .card-title-content h3 {
    font-size: 16px;
  }
  
  .card-title-content p {
    font-size: 13px;
  }
  
  .budget-item,
  .timeline-item,
  .example-item {
    font-size: 14px;
  }
  
  .time-badge {
    width: 46px;
    height: 24px;
    font-size: 11px;
  }
  
  .mobile-final-cta {
    padding: 35px 20px;
    margin: 0 16px 35px;
  }
  
  .mobile-final-cta h3 {
    font-size: 22px;
  }
  
  .sparkles {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
}

@media (max-width: 360px) {
  .footer-links {
    flex-direction: column;
    gap: 15px;
  }
}
</style>