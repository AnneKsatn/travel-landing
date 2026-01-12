// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('TripGenius лендинг загружен!');
    
    // Настройка анимаций при скролле
    initScrollAnimations();
    
    // Настройка формы
    initForm();
    
    // Настройка плавной прокрутки
    initSmoothScroll();
});

// Анимации при скролле
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми элементами с анимацией
    const animatedElements = document.querySelectorAll(
        '.feature-card, .step, .example-card, .comparison-table, ' +
        '.free-feature, .premium-card, .testimonial-card, .form-container'
    );
    
    animatedElements.forEach(el => {
        el.classList.remove('animate');
        observer.observe(el);
    });
}

// Обработка формы
function initForm() {
    const form = document.getElementById('tripForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const city = document.getElementById('city').value.trim();
        const dates = document.getElementById('dates').value.trim();
        const interests = document.getElementById('interests').value.trim();
        
        // Валидация
        if (!city || !dates || !interests) {
            showNotification('Пожалуйста, заполните все поля', 'error');
            return;
        }
        
        // Показать состояние загрузки
        const button = this.querySelector('.form-button');
        const originalText = button.innerHTML;
        button.innerHTML = 'ИИ создает ваш маршрут... <i class="fas fa-spinner fa-spin"></i>';
        button.disabled = true;
        
        // Имитация обработки ИИ
        simulateAIProcessing(city, dates, interests, button, originalText);
    });
    
    // Автозаполнение дат (пример)
    setupDateSuggestions();
}

// Имитация работы ИИ
function simulateAIProcessing(city, dates, interests, button, originalText) {
    // Случайная задержка 1.5-3 секунды
    const delay = 1500 + Math.random() * 1500;
    
    setTimeout(() => {
        // Успешное завершение
        button.innerHTML = 'Маршрут готов! <i class="fas fa-check"></i>';
        button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
        
        // Показать уведомление об успехе
        setTimeout(() => {
            showSuccessModal(city, dates, interests);
            
            // Сброс формы
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                button.style.background = '';
                document.getElementById('tripForm').reset();
            }, 500);
        }, 1000);
        
        // Записать в "аналитику"
        logFormSubmission(city, interests);
        
    }, delay);
}

// Показать модальное окно успеха
function showSuccessModal(city, dates, interests) {
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Ваш маршрут создан!</h3>
            <p><strong>Направление:</strong> ${city}</p>
            <p><strong>Даты:</strong> ${dates}</p>
            <p><strong>Интересы:</strong> ${interests}</p>
            <p class="modal-note">ИИ обработал более 50 источников, чтобы создать идеальный план для вас.</p>
            <button class="modal-button">Закрыть</button>
        </div>
    `;
    
    // Стили для модального окна
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 20px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.4s ease;
    `;
    
    const modalIcon = modal.querySelector('.modal-icon');
    modalIcon.style.cssText = `
        font-size: 4rem;
        color: #D4AF37;
        margin-bottom: 20px;
    `;
    
    const modalButton = modal.querySelector('.modal-button');
    modalButton.style.cssText = `
        background: #D4AF37;
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        margin-top: 20px;
        transition: all 0.3s ease;
    `;
    
    modalButton.addEventListener('mouseover', function() {
        this.style.background = '#C19A2F';
        this.style.transform = 'translateY(-2px)';
    });
    
    modalButton.addEventListener('mouseout', function() {
        this.style.background = '#D4AF37';
        this.style.transform = 'translateY(0)';
    });
    
    // Закрытие модального окна
    modalButton.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    document.body.appendChild(modal);
    
    // Добавляем CSS анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(30px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Показать уведомление
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ff6b6b' : '#D4AF37'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 1001;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
    
    // Добавляем CSS анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { 
                opacity: 0;
                transform: translateX(100%);
            }
            to { 
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOutRight {
            from { 
                opacity: 1;
                transform: translateX(0);
            }
            to { 
                opacity: 0;
                transform: translateX(100%);
            }
        }
    `;
    document.head.appendChild(style);
}

// Настройка подсказок для дат
function setupDateSuggestions() {
    const datesInput = document.getElementById('dates');
    
    if (!datesInput) return;
    
    // Пример подсказки
    datesInput.addEventListener('focus', function() {
        if (!this.value) {
            const today = new Date();
            const nextWeek = new Date(today);
            nextWeek.setDate(today.getDate() + 7);
            
            const formatDate = (date) => {
                return date.toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'long'
                });
            };
            
            this.placeholder = `Например: ${formatDate(today)} — ${formatDate(nextWeek)}`;
        }
    });
    
    datesInput.addEventListener('blur', function() {
        this.placeholder = '15 июня — 20 июня 2024';
    });
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Логирование отправки формы (для аналитики)
function logFormSubmission(city, interests) {
    const data = {
        city: city,
        interests: interests,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    // В реальном проекте здесь был бы fetch на сервер
    console.log('Form submission logged:', data);
    
    // Сохраняем в localStorage для демонстрации
    try {
        const submissions = JSON.parse(localStorage.getItem('tripgenius_submissions') || '[]');
        submissions.push(data);
        localStorage.setItem('tripgenius_submissions', JSON.stringify(submissions));
    } catch (e) {
        console.log('Could not save to localStorage:', e);
    }
}

// Функция для фото-коллажа
function initPhotoCollage() {
    const polaroids = document.querySelectorAll('.polaroid');
    
    polaroids.forEach(polaroid => {
        // Клик на фото
        polaroid.addEventListener('click', function() {
            // Эффект "всплытия" фото
            this.style.zIndex = '1000';
            this.style.transform = 'scale(1.2) rotate(0deg)';
            this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
            
            // Затемнение других фото
            polaroids.forEach(p => {
                if (p !== this) {
                    p.style.filter = 'blur(2px) brightness(0.9)';
                    p.style.transition = 'filter 0.3s ease';
                }
            });
            
            // Возврат по второму клику
            const resetCollage = () => {
                this.style.transform = '';
                this.style.zIndex = '1';
                this.style.boxShadow = '';
                
                polaroids.forEach(p => {
                    p.style.filter = '';
                });
                
                // Удаляем обработчик после сброса
                document.removeEventListener('click', resetOnClickOutside);
            };
            
            // Сброс при клике вне фото
            const resetOnClickOutside = (e) => {
                if (!polaroid.contains(e.target)) {
                    resetCollage();
                }
            };
            
            // Задержка перед добавлением обработчика
            setTimeout(() => {
                document.addEventListener('click', resetOnClickOutside);
            }, 100);
            
            // Сброс через 5 секунд автоматически
            setTimeout(resetCollage, 5000);
        });
        
        // Плавное покачивание фото при наведении
        polaroid.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
    });
    
    // Эффект "разлетания" фото при скролле
    window.addEventListener('scroll', function() {
        const collageSection = document.querySelector('.photo-collage-section');
        if (!collageSection) return;
        
        const rect = collageSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
            const scrollProgress = 1 - (rect.top / window.innerHeight);
            
            polaroids.forEach((polaroid, index) => {
                const offset = (index % 2 === 0 ? 1 : -1) * (scrollProgress * 20);
                polaroid.style.transform = `rotate(${polaroid.dataset.rotation || 0}deg) translateY(${offset}px)`;
            });
        }
    });
}

// Вызвать функцию в DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initPhotoCollage(); // Добавить эту строку
});

// Дополнительные эффекты для кнопок
document.addEventListener('DOMContentLoaded', function() {
    // Эффект пульсации для CTA кнопки
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.boxShadow = '0 12px 40px rgba(212, 175, 55, 0.3)';
            setTimeout(() => {
                ctaButton.style.boxShadow = 'var(--shadow-soft)';
            }, 800);
        }, 4000);
    }
});

