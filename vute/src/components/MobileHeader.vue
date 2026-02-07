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

          <p>
            Планирование должно быть простым, <br />
            а поездки — совершенными.
          </p>
          <!-- <div class="tagline-sub">
            <span class="ai-part">AI создаст маршрут</span>
            <span class="separator">, </span>
            <span class="you-part">вы его настроите</span>
          </div> -->
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
      const lang = this.languages.find((l) => l.code === this.language);
      return lang ? lang.flag : "🇷🇺";
    },
    getCurrentName() {
      const lang = this.languages.find((l) => l.code === this.language);
      return lang ? lang.name : "Русский";
    },
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
    document.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.closeDropdown();
      }
    });
  },
};
</script>

<style scoped>
.mobile-header {
  background: linear-gradient(
    135deg,
    rgba(14, 165, 233, 0.9) 0%,
    rgba(139, 92, 246, 0.8) 100%
  );
  padding: 18px 20px 30px;
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
  margin-bottom: 20px;
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
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 150px;
}

.dropdown-toggle:hover {
  background: rgba(255, 255, 255, 0.25);
}

.dropdown-toggle i {
  font-size: 12px;
  opacity: 0.8;
  transition: transform 0.2s ease;
}

.current-language {
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-flag {
  font-size: 18px;
}

.language-name {
  font-size: 14px;
  opacity: 0.95;
}

/* Выпадающее меню */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 1000;
  width: 230px;
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
  border-radius: 18px;
  box-shadow: 0 12px 45px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  max-height: 320px;
  overflow-y: auto;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: var(--text-dark);
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: rgba(14, 165, 233, 0.08);
}

.dropdown-item.active {
  background: rgba(14, 165, 233, 0.12);
  color: var(--primary);
  font-weight: 600;
}

.item-flag {
  font-size: 20px;
  margin-right: 14px;
  width: 26px;
  text-align: center;
}

.item-name {
  flex: 1;
  text-align: left;
}

.dropdown-item .fa-check {
  color: var(--primary);
  font-size: 13px;
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
  background: rgba(0, 0, 0, 0.12);
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
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
  font-size: 26px;
  border: 2px solid rgba(255, 255, 255, 0.35);
}

.logo-title {
  font-size: 36px;
  font-weight: 800;
  color: white;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}

.logo-title .trip {
  font-size: 36px;
}

.logo-title .fy {
  font-size: 20px;
  align-self: flex-start;
  color: rgba(255, 255, 255, 0.95);
  position: relative;
  top: -2px;
}

.logo-title .planner {
  font-size: 36px;
  margin-left: 10px;
}

.logo-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  line-height: 1.4;
}

.header-taglines {
  margin-top: 14px;
  text-align: center;
}

.tagline-main {
  font-size: 19px;
  color: white;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 6px;
  opacity: 0.98;
}

.tagline-sub {
  font-size: 17px;
  color: white;
  line-height: 1.4;
  opacity: 0.92;
}

.ai-part {
  font-weight: 600;
  color: #ffe066;
}

.separator {
  opacity: 0.7;
}

.you-part {
  font-weight: 500;
  opacity: 0.98;
}

/* Адаптивность */
@media (max-width: 480px) {
  .mobile-header {
    padding: 16px 18px 28px;
  }

  .logo-icon {
    width: 56px;
    height: 56px;
    font-size: 24px;
    border-radius: 16px;
    margin-bottom: 14px;
  }

  .logo-title {
    font-size: 32px;
  }

  .logo-title .trip,
  .logo-title .planner {
    font-size: 32px;
  }

  .logo-title .fy {
    font-size: 18px;
    top: -1px;
  }

  .tagline-main {
    font-size: 18px;
  }

  .tagline-sub {
    font-size: 16px;
  }

  .dropdown-toggle {
    min-width: 140px;
    padding: 9px 16px;
  }

  .dropdown-menu {
    width: 210px;
  }

  .language-name {
    font-size: 13px;
  }
}

@media (max-width: 380px) {
  .mobile-header {
    padding: 14px 16px 24px;
    border-radius: 0 0 25px 25px;
  }

  .logo-icon {
    width: 52px;
    height: 52px;
    font-size: 22px;
    border-radius: 14px;
    margin-bottom: 12px;
  }

  .logo-title {
    font-size: 28px;
    margin-bottom: 6px;
  }

  .logo-title .trip,
  .logo-title .planner {
    font-size: 28px;
  }

  .logo-title .fy {
    font-size: 16px;
  }

  .header-taglines {
    margin-top: 12px;
  }

  .tagline-main {
    font-size: 17px;
  }

  .tagline-sub {
    font-size: 15px;
  }

  .dropdown-toggle {
    min-width: 130px;
    padding: 8px 14px;
    font-size: 14px;
  }

  .dropdown-menu {
    width: 190px;
  }

  .dropdown-item {
    padding: 12px 16px;
    font-size: 14px;
  }

  .item-flag {
    font-size: 18px;
  }
}

/* Ховер-эффекты для десктопа */
@media (hover: hover) and (pointer: fine) {
  .dropdown-toggle:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.15);
  }
}
</style>
