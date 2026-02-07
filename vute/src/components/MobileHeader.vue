<template>
  <div class="mobile-header">
    <div class="header-top">
      <div class="language-dropdown">
        <button 
          class="dropdown-toggle" 
          @click="toggleDropdown"
          :aria-expanded="dropdownOpen.toString()"
        >
          <span class="current-language">
            <span class="language-flag">{{ getCurrentFlag }}</span>
            <span class="language-name">{{ getCurrentName }}</span>
          </span>
          <i class="fas" :class="dropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </button>
        
        <div v-if="dropdownOpen" class="dropdown-menu">
          <div class="dropdown-backdrop" @click="closeDropdown"></div>
          <div class="dropdown-content">
            <button
              v-for="lang in languages"
              :key="lang.code"
              class="dropdown-item"
              :class="{ active: language === lang.code }"
              @click="setLanguage(lang.code)"
            >
              <span class="item-flag">{{ lang.flag }}</span>
              <span class="item-name">{{ lang.name }}</span>
              <i v-if="language === lang.code" class="fas fa-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="header-content">
      <div class="mobile-logo">
        <div class="logo-icon">
          <i class="fas fa-compass"></i>
        </div>
        <h1 class="logo-title">
          <span class="trip">Trip</span>
          <span class="fy">fy</span>
          <span class="planner"> Planner</span>
        </h1>
        
        <!-- НОВЫЙ ТЕКСТ -->
        <div class="header-taglines">
          <div class="tagline-main">Цифровой планёр путешествий</div>
          <div class="tagline-sub">
            <span class="ai-part">AI создаст маршрут</span>
            <span class="separator">, </span>
            <span class="you-part">вы его настроите</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MobileHeader",
  data() {
    return {
      language: "ru",
      dropdownOpen: false,
      languages: [
        { code: "ru", name: "Русский", flag: "🇷🇺" },
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "es", name: "Español", flag: "🇪🇸" },
        { code: "fr", name: "Français", flag: "🇫🇷" },
        { code: "de", name: "Deutsch", flag: "🇩🇪" },
        { code: "it", name: "Italiano", flag: "🇮🇹" },
        { code: "pt", name: "Português", flag: "🇵🇹" },
        { code: "ja", name: "日本語", flag: "🇯🇵" },
        { code: "ko", name: "한국어", flag: "🇰🇷" },
        { code: "zh", name: "中文", flag: "🇨🇳" },
        { code: "ar", name: "العربية", flag: "🇸🇦" },
        { code: "tr", name: "Türkçe", flag: "🇹🇷" },
      ],
    };
  },
  computed: {
    getCurrentFlag() {
      const lang = this.languages.find(l => l.code === this.language);
      return lang ? lang.flag : "🇷🇺";
    },
    getCurrentName() {
      const lang = this.languages.find(l => l.code === this.language);
      return lang ? lang.name : "Русский";
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    
    closeDropdown() {
      this.dropdownOpen = false;
    },
    
    setLanguage(lang) {
      this.language = lang;
      this.$emit("language-changed", lang);
      this.closeDropdown();
    },
  },
  emits: ["language-changed"],
  
  mounted() {
    document.addEventListener('click', (event) => {
      if (!this.$el.contains(event.target)) {
        this.closeDropdown();
      }
    });
  }
};
</script>

<style scoped>
.mobile-header {
  background: linear-gradient(
    135deg,
    rgba(14, 165, 233, 0.9) 0%,
    rgba(139, 92, 246, 0.8) 100%
  );
  padding: 12px 20px 25px;
  border-radius: 0 0 30px 30px;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
}

.mobile-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.header-top {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
}

/* Dropdown стили */
.language-dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 140px;
}

.dropdown-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
}

.dropdown-toggle i {
  font-size: 12px;
  opacity: 0.8;
  transition: transform 0.2s ease;
}

.current-language {
  display: flex;
  align-items: center;
  gap: 8px;
}

.language-flag {
  font-size: 16px;
}

.language-name {
  font-size: 13px;
  opacity: 0.9;
}

/* Выпадающее меню */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 1000;
  width: 220px;
}

.dropdown-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.dropdown-content {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-height: 300px;
  overflow-y: auto;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: var(--text-dark);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: rgba(14, 165, 233, 0.05);
}

.dropdown-item.active {
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  font-weight: 600;
}

.item-flag {
  font-size: 18px;
  margin-right: 12px;
  width: 24px;
  text-align: center;
}

.item-name {
  flex: 1;
  text-align: left;
}

.dropdown-item .fa-check {
  color: var(--primary);
  font-size: 12px;
  margin-left: 8px;
}

/* Стиль для скроллбара */
.dropdown-content::-webkit-scrollbar {
  width: 6px;
}

.dropdown-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.03);
  border-radius: 3px;
}

.dropdown-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.dropdown-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}

.header-content {
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.mobile-logo {
  text-align: center;
  margin-bottom: 10px;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  color: white;
  font-size: 22px;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.logo-title {
  font-size: 32px;
  font-weight: 800;
  color: white;
  margin-bottom: 6px;
  letter-spacing: -0.5px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}

.logo-title .trip {
  font-size: 32px;
}

.logo-title .fy {
  font-size: 18px;
  align-self: flex-start;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  top: -2px;
}

.logo-title .planner {
  font-size: 32px;
  margin-left: 9px;
}

.logo-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  line-height: 1.4;
}

/* Адаптивность для маленьких экранов */
@media (max-width: 480px) {
  .dropdown-menu {
    width: 200px;
  }
  
  .dropdown-toggle {
    min-width: 130px;
    padding: 7px 14px;
  }
  
  .language-name {
    font-size: 12px;
  }
}

@media (max-width: 350px) {
  .logo-title {
    font-size: 28px;
  }

  .logo-title .trip,
  .logo-title .planner {
    font-size: 28px;
  }

  .logo-title .fy {
    font-size: 16px;
    top: -1px;
  }
  
  .logo-subtitle {
    font-size: 15px;
  }
  
  .dropdown-toggle {
    min-width: 120px;
  }
  
  .dropdown-menu {
    width: 180px;
    z-index: 10;
  }
}

/* Ховер-эффекты для десктопа */
@media (hover: hover) and (pointer: fine) {
  .dropdown-toggle:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  }
  
  .lang-btn:hover {
    transform: scale(1.05);
  }
}

.header-taglines {
  margin-top: 8px;
  text-align: center;
}

.tagline-main {
  font-size: 18px;
  color: white;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 4px;
  opacity: 0.95;
}

.tagline-sub {
  font-size: 16px;
  color: white;
  line-height: 1.4;
  opacity: 0.9;
}

.ai-part {
  font-weight: 600;
  color: #FFD700; /* золотой акцент на AI */
}

.separator {
  opacity: 0.7;
}

.you-part {
  font-weight: 500;
  opacity: 0.95;
}

/* Адаптивность для нового текста */
@media (max-width: 480px) {
  .tagline-main {
    font-size: 16px;
  }
  
  .tagline-sub {
    font-size: 14px;
  }
}

@media (max-width: 350px) {
  .tagline-main {
    font-size: 15px;
  }
  
  .tagline-sub {
    font-size: 13px;
    line-height: 1.3;
  }
}

</style>