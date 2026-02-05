<template>
  <div class="language-switcher" :class="{ compact: compact }" ref="switcher">
    <!-- Убрали @blur и @mousedown -->
    <button class="current-language" @click.stop="toggleDropdown" :disabled="isLoading">
      <span class="current-flag">
        <img
          :src="currentLanguage.flagIcon"
          :alt="currentLanguage.code"
          class="flag-icon"
        />
      </span>
      <span class="current-name">{{ currentLanguage.displayName }}</span>
      <i class="dropdown-icon" :class="{ open: isOpen }">
        <span v-if="isLoading" class="loading-spinner"></span>
        <span v-else>▼</span>
      </i>
    </button>

    <!-- Остальной шаблон без изменений -->
    <div v-if="isOpen" class="dropdown-menu" :style="dropdownStyle">
      <div
        v-for="lang in availableLanguages"
        :key="lang.code"
        :class="[
          'language-option',
          { active: currentLang === lang.code, disabled: !lang.enabled },
        ]"
        @click="lang.enabled && selectLanguage(lang)"
        @mousedown.prevent
      >
        <span class="option-flag">
          <img :src="lang.flagIcon" :alt="lang.code" class="flag-icon" />
          <span v-if="!lang.enabled" class="coming-soon">Soon</span>
        </span>
        <div class="option-content">
          <span class="option-name">{{ lang.displayName }}</span>
          <span class="option-native">{{ lang.nativeName }}</span>
        </div>
        <i v-if="currentLang === lang.code" class="check-icon">✓</i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from "../i18n/useLanguage";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["language-changed"]);

const { currentLanguage, availableLanguages, changeLanguage, isLoading } = useLanguage();

// Реактивные переменные
const isOpen = ref(false);
const dropdownWidth = ref(200);
const switcher = ref(null);

// Computed свойства
const dropdownStyle = computed(() => ({
  width: `${dropdownWidth.value}px`,
  left: "0",
  right: "auto",
}));

const currentLang = computed(() => currentLanguage.value?.code);

// Методы
function toggleDropdown(event) {
  // Предотвращаем всплытие события, чтобы handleDocumentClick не сработал
  event?.stopPropagation();
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    updateDropdownWidth();
  }
}

function updateDropdownWidth() {
  const button = switcher.value?.querySelector(".current-language");
  if (button) {
    dropdownWidth.value = button.offsetWidth;
  }
}

function closeDropdown() {
  isOpen.value = false;
}

async function selectLanguage(lang) {
  try {
    await changeLanguage(lang.code);
    emit("language-changed", lang.code);
    closeDropdown();
  } catch (error) {
    console.error("Failed to change language:", error);
  }
}

// Обработчик клика по документу
function handleDocumentClick(e) {
  // Если клик был вне компонента - закрываем dropdown
  if (switcher.value && !switcher.value.contains(e.target)) {
    closeDropdown();
  }
}

// Добавляем обработчик mousedown для кнопки
function handleMouseDown(e) {
  e.preventDefault(); // Предотвращаем blur
}

// Хуки жизненного цикла
onMounted(() => {
  // Используем capture фазу, чтобы сработать раньше других обработчиков
  document.addEventListener("click", handleDocumentClick, true);
  window.addEventListener("resize", updateDropdownWidth);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick, true);
  window.removeEventListener("resize", updateDropdownWidth);
});
</script>

<style scoped>
.language-switcher {
  position: relative;
  z-index: 1000;
  display: inline-block;
}

/* Кнопка текущего языка */
.current-language {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  color: var(--text);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.08);
  min-width: 140px;
  white-space: nowrap;
  width: 100%;
  justify-content: space-between;
}

.current-language:hover {
  background: white;
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.1);
}

.current-language:active {
  transform: translateY(0);
}

.current-language:disabled {
  opacity: 0.7;
  cursor: wait;
}

.current-flag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
}

.flag-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: filter 0.2s ease;
}

.language-option:hover .flag-icon {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

.current-name {
  font-size: 14px;
  font-weight: 600;
  flex-grow: 1;
  text-align: left;
}

.dropdown-icon {
  font-size: 10px;
  transition: transform 0.3s ease;
  color: var(--text-light);
  flex-shrink: 0;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

.loading-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Compact версия */
.language-switcher.compact .current-language {
  padding: 10px 14px;
  min-width: 60px;
  width: auto;
  justify-content: center;
  gap: 8px;
}

.language-switcher.compact .current-name {
  display: none;
}

.language-switcher.compact .dropdown-icon {
  margin-left: 0;
}

/* Dropdown меню */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  overflow: hidden;
  z-index: 1001;
  min-width: 180px;
}

/* Анимация dropdown */
.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Элементы выбора языка */
.language-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(139, 92, 246, 0.05);
}

.language-option:last-child {
  border-bottom: none;
}

.language-option:hover {
  background: rgba(139, 92, 246, 0.05);
}

.language-option.active {
  background: rgba(139, 92, 246, 0.08);
}

.language-option.active:hover {
  background: rgba(139, 92, 246, 0.12);
}

.language-option.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.language-option.disabled:hover {
  background: inherit;
}

.option-flag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
}

.option-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
}

.option-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}

.option-native {
  font-size: 12px;
  color: var(--text-light);
  opacity: 0.8;
}

.check-icon {
  font-size: 14px;
  color: var(--primary);
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.2s ease;
  flex-shrink: 0;
}

.language-option.active .check-icon {
  opacity: 1;
}

.coming-soon {
  position: absolute;
  top: -6px;
  right: -6px;
  background: var(--primary);
  color: white;
  font-size: 8px;
  padding: 1px 4px;
  border-radius: 4px;
  font-weight: bold;
  line-height: 1;
}

/* Для компактной версии */
.language-switcher.compact .option-native {
  display: none;
}

.language-switcher.compact .language-option {
  padding: 10px 14px;
}

.language-switcher.compact .option-flag {
  width: 20px;
  height: 20px;
}

/* Глобальная подсветка активного состояния */
.language-switcher:focus-within .current-language {
  border-color: var(--primary);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15), 0 0 0 2px rgba(139, 92, 246, 0.1);
}

/* Декоративная линия под текущим языком */
.current-language::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 16px;
  right: 16px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.language-switcher:focus-within .current-language::after {
  opacity: 0.3;
}

/* Адаптивность */
@media (max-width: 768px) {
  .language-switcher:not(.compact) .current-language {
    padding: 10px 14px;
    font-size: 13px;
    min-width: 130px;
  }

  .dropdown-menu {
    min-width: 160px;
  }

  .language-switcher.compact .dropdown-menu {
    min-width: 140px;
  }
}

@media (max-width: 480px) {
  .language-switcher:not(.compact) .option-native {
    display: none;
  }

  .language-switcher:not(.compact) .dropdown-menu {
    min-width: 140px;
  }

  .option-name {
    font-size: 13px;
  }
}

/* Анимация для флага при смене языка */
@keyframes flagPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.current-language .current-flag {
  transition: transform 0.3s ease;
}

.current-language:hover .current-flag {
  animation: flagPulse 0.6s ease;
}
</style>
