<template>
  <div id="app">
    <!-- Частицы фона -->
    <div class="particles-bg" id="particles"></div>
    
    <div class="luxury-container">
      <!-- Левая часть - текст -->
      <LuxuryHeader 
        @start-planning="startPlanning" 
        @learn-more="learnMore" 
      />
      
      <!-- Правая часть - карточки -->
      <div class="luxury-cards-section">
        <DestinationCard 
          :destination="currentDestination"
          class="floating delay-1"
        />
        
        <ScheduleCard class="floating delay-2" />
        
        <BudgetCard 
          :initial-budget="87500"
          class="floating delay-3"
          @budget-analyzed="onBudgetAnalyzed"
        />
        
        <AICard class="floating" />
      </div>
    </div>
    
    <!-- Футер со статистикой -->
    <!-- <TechStats class="luxury-footer" /> -->
    
    <!-- Уведомления -->
    <div v-if="notification.show" class="notification" :style="notificationStyle">
      <i class="fas fa-info-circle"></i>
      <span>{{ notification.message }}</span>
    </div>
  </div>
</template>

<script>
import LuxuryHeader from './components/LuxuryHeader.vue'
import DestinationCard from './components/DestinationCard.vue'
import BudgetCard from './components/BudgetCard.vue'
import ScheduleCard from './components/ScheduleCard.vue'
import AICard from './components/AICard.vue'
import TechStats from './components/TechStats.vue'

export default {
  name: 'App',
  components: {
    LuxuryHeader,
    DestinationCard,
    BudgetCard,
    ScheduleCard,
    AICard,
    TechStats
  },
  data() {
    return {
      currentDestinationIndex: 0,
      destinations: [
        {
          name: "Санторини",
          location: "Греция, Эгейское море",
          rating: "9.8/10",
          photo: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        },
        {
          name: "Токио",
          location: "Япония",
          rating: "9.7/10",
          photo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        },
        {
          name: "Мальдивы",
          location: "Индийский океан",
          rating: "9.9/10",
          photo: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        },
        {
          name: "Бали",
          location: "Индонезия",
          rating: "9.6/10",
          photo: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        }
      ],
      notification: {
        show: false,
        message: '',
        type: 'info'
      },
      notificationTimer: null
    }
  },
  computed: {
    currentDestination() {
      return this.destinations[this.currentDestinationIndex]
    },
    notificationStyle() {
      return {
        transform: this.notification.show ? 'translateX(0)' : 'translateX(150%)'
      }
    }
  },
  methods: {
    createParticles() {
      const particlesContainer = document.getElementById('particles')
      const particleCount = 20
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.classList.add('particle')
        
        const size = Math.random() * 100 + 20
        const x = Math.random() * 100
        const y = Math.random() * 100
        const delay = Math.random() * 5
        
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.left = `${x}%`
        particle.style.top = `${y}%`
        particle.style.animationDelay = `${delay}s`
        
        particlesContainer.appendChild(particle)
      }
    },
    changeDestinationPhoto() {
      this.currentDestinationIndex = (this.currentDestinationIndex + 1) % this.destinations.length
    },
    startPlanning() {
      this.showNotification('AI начал планирование вашего идеального путешествия!')
    },
    learnMore() {
      this.showNotification('Открываем подробную информацию о возможностях TravelGenius...')
    },
    onBudgetAnalyzed(amount) {
      this.showNotification(`AI рассчитал точный бюджет: ${amount}`)
    },
    showNotification(message, duration = 5000) {
      this.notification.message = message
      this.notification.show = true
      
      if (this.notificationTimer) {
        clearTimeout(this.notificationTimer)
      }
      
      this.notificationTimer = setTimeout(() => {
        this.notification.show = false
      }, duration)
    },
    setupMouseParallax() {
      document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle')
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50
        
        particles.forEach(particle => {
          const speed = particle.style.width ? parseInt(particle.style.width) / 200 : 0.2
          particle.style.transform = `translate(${xAxis * speed}px, ${yAxis * speed}px)`
        })
      })
    },
    setupCardAnimations() {
      const cards = document.querySelectorAll('.luxury-card')
      cards.forEach(card => {
        const delay = Math.random() * 3
        card.style.animationDelay = `${delay}s`
      })
    }
  },
  mounted() {
    this.createParticles()
    this.setupCardAnimations()
    this.setupMouseParallax()
    
    // Автоматическая смена фотографий
    setInterval(this.changeDestinationPhoto, 8000)
  },
  beforeDestroy() {
    if (this.notificationTimer) {
      clearTimeout(this.notificationTimer)
    }
  }
}
</script>

<style>
/* Весь CSS стиль из оригинального файла остается здесь */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

:root {
    --primary: #8b5cf6;
    --primary-glow: rgba(139, 92, 246, 0.4);
    --secondary: #06b6d4;
    --secondary-glow: rgba(6, 182, 212, 0.4);
    --accent: #10b981;
    --text: #0f172a;
    --text-light: #64748b;
    --bg: #f8fafc;
    --glass: rgba(255, 255, 255, 0.92);
    --glass-border: rgba(255, 255, 255, 0.25);
    --shadow: 0 20px 40px rgba(0, 0, 0, 0.07);
    --shadow-heavy: 0 30px 60px rgba(0, 0, 0, 0.12);
    --neon-glow: 0 0 20px var(--primary-glow);
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #f0f9ff 0%, #f8fafc 50%, #e0f2fe 100%);
    color: var(--text);
    overflow-x: hidden;
    position: relative;
}

/* Футуристичный фон с частицами */
.particles-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.3;
}

.particle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    opacity: 0.1;
}

/* Основной контейнер */
.luxury-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 60px;
    min-height: 100vh;
    align-items: center;
}

/* Правая часть - карточки */
.luxury-cards-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    perspective: 1000px;
}

/* Стили для карточек */
.luxury-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border-radius: 28px;
    padding: 32px;
    box-shadow: var(--shadow);
    border: 1px solid var(--glass-border);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    min-height: 320px;
    display: flex;
    flex-direction: column;
}

.luxury-card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.luxury-card:hover {
    transform: translateY(-15px) rotateX(5deg);
    box-shadow: var(--shadow-heavy);
}

/* Футер с информацией */
.luxury-footer {
    position: fixed;
    bottom: 30px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;
}

.tech-stats {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border-radius: 100px;
    padding: 16px 32px;
    display: flex;
    gap: 40px;
    box-shadow: var(--shadow);
    border: 1px solid var(--glass-border);
}

.stat {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-light);
    font-size: 14px;
    font-weight: 500;
}

.stat i {
    color: var(--primary);
}

.stat-value {
    font-weight: 700;
    color: var(--text);
    margin-left: 5px;
}

/* Уведомления */
.notification {
    position: fixed;
    top: 30px;
    right: 30px;
    background: var(--glass);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    padding: 20px 25px;
    box-shadow: var(--shadow-heavy);
    border: 1px solid var(--glass-border);
    border-left: 4px solid var(--primary);
    color: var(--text);
    font-weight: 500;
    z-index: 1000;
    transform: translateX(150%);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 350px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.notification i {
    color: var(--primary);
    font-size: 22px;
}

/* Адаптивность */
@media (max-width: 1200px) {
    .luxury-container {
        grid-template-columns: 1fr;
        gap: 50px;
    }
    
    .luxury-text-section {
        padding-right: 0;
        text-align: center;
    }
    
    .luxury-main-text {
        max-width: 100%;
    }
    
    .luxury-logo {
        justify-content: center;
    }
    
    .luxury-subtitle:before {
        left: 50%;
        transform: translateX(-50%);
        top: -25px;
    }
}

@media (max-width: 768px) {
    .luxury-cards-section {
        grid-template-columns: 1fr;
    }
    
    .luxury-headline {
        font-size: 36px;
    }
    
    .luxury-container {
        padding: 30px 20px;
    }
    
    .tech-stats {
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        border-radius: 30px;
        padding: 20px;
    }
    
    .luxury-footer {
        position: relative;
        bottom: 0;
        margin-top: 40px;
    }
}

/* Анимации */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.floating {
    animation: float 6s ease-in-out infinite;
}

.delay-1 {
    animation-delay: 1s;
}

.delay-2 {
    animation-delay: 2s;
}

.delay-3 {
    animation-delay: 3s;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.pulse {
    animation: pulse 2s infinite;
}
</style>