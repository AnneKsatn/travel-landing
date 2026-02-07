<template>
  <div class="demo-section">
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
            <span>Отель</span>
          </div>
          <div class="budget-amount">4 500 ₽</div>
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
          <div class="budget-amount total-amount">9 900 ₽</div>
        </div>
      </div>

      <div class="demo-insight">
        <i class="fas fa-lightbulb"></i>
        <span>AI помнит про чаевые, сувениры, налоги и другие мелочи, о которых забывают 83% туристов</span>
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
            <div class="activity-title">Прогулка по улицам</div>
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
</template>

<script>
export default {
  name: "DemoSection",
  emits: ["start-planning"],
  methods: {
    startPlanning() {
      this.$emit("start-planning");
    },
  },
};
</script>

<style scoped>
.demo-section {
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
  cursor: pointer;
}

.constructor-btn:active {
  transform: scale(0.98);
}

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

@media (max-width: 480px) {
  .demo-section {
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
}
</style>