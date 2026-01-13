<template>
  <div id="app">
    <!-- Частицы фона -->
    
    <!-- TechStats наверху первого экрана -->
    <TechStats class="tech-stats-top" />
    
    <!-- Главный герой-секция -->
    <HeroSection 
      :current-destination="currentDestination"
      @start-planning="startPlanning"
      @learn-more="learnMore"
      @budget-analyzed="onBudgetAnalyzed"
    />
    
    <!-- Второй экран -->
    <ScreenTwo />
    
    <!-- Третий экран: Конструктор -->
    <ConstructorBlock />
    
    <!-- Четвертый экран: Форма -->
    <SimpleCTA @destination-submitted="handleDestinationSubmit" />
    
    <!-- Уведомления -->
    <div v-if="notification.show" class="notification" :style="notificationStyle">
      <i class="fas fa-info-circle"></i>
      <span>{{ notification.message }}</span>
    </div>
  </div>
</template>

<script>
import TechStats from './components/TechStats.vue'
import ScreenTwo from './components/ScreenTwo.vue'
import ConstructorBlock from './components/ConstructorBlock.vue'
import SimpleCTA from './components/CTAForm.vue'
import HeroSection from './components/HeroSection.vue' // Импортируем новый компонент

export default {
  name: 'App',
  components: {
    TechStats,
    ScreenTwo,
    ConstructorBlock,
    SimpleCTA,
    HeroSection
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
    },
    handleDestinationSubmit(destination) {
      this.showNotification(`AI начинает подготовку маршрута для ${destination}! Переходим в анкету...`)
      // Здесь будет реальный редирект:
      // window.location.href = `/questionnaire?destination=${encodeURIComponent(destination)}`
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
/* Весь CSS стиль остается здесь, кроме стилей для .luxury-container и .luxury-cards-section 
   которые теперь перенесены в HeroSection.vue */
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



/* TechStats наверху */
.tech-stats-top {
    max-width: 800px;
    margin: 20px auto 40px;
    position: relative;
    z-index: 10;
    animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Стили для карточек (остаются, так как используются в дочерних компонентах) */
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
    
    .tech-stats-top {
        margin: 30px 20px;
    }
}

@media (max-width: 768px) {
    .luxury-headline {
        font-size: 36px;
    }
    
    .tech-stats-top {
        padding: 12px 20px;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: 30px;
    }
    
    .tech-stats-top .stat {
        font-size: 12px;
    }
}

/* Анимации */
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