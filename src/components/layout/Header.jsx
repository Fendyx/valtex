import React, { useState, useEffect, useRef } from 'react';
import { Menu, Phone, Mail } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Обработчик скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Если меню открыто И клик был не по мобильному меню И не по кнопке бургера
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // Для мобильных устройств
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Обработка кнопки "Назад" на телефоне
  useEffect(() => {
    const handlePopState = (event) => {
      // Если нажали "Назад", мы ловим это событие
      // Браузер удалит фиктивную запись из истории, а мы закроем меню
      setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      // ТРЮК: Добавляем текущее состояние в историю браузера.
      // Это создает "буфер", чтобы нажатие кнопки "Назад" не уводило с сайта,
      // а просто возвращало историю к состоянию "до открытия меню".
      window.history.pushState({ menuOpen: true }, '', window.location.href);
      
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [mobileMenuOpen]);

  // Проверяем, находимся ли мы на главной странице
  const isHomePage = location.pathname === '/';

  // Вычисляем, нужно ли показывать "белый" (scrolled) стиль
  const shouldShowScrolled = !isHomePage || isScrolled;

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { targetId } });
    }
  };

  // Закрытие меню при нажатии Escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header-fixed">
      {/* Верхняя полоса (Контакты) */}
      <div className={`header-top ${shouldShowScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-top-content">
            <a href="tel:+1234567890" className="contact-link">
              <Phone className="icon-sm" />
              <span className="contact-text">+48 577 480 689</span>
            </a>
            <a href="mailto:info@valtexplus.com" className="contact-link">
              <Mail className="icon-sm" />
              <span className="contact-text">info@valtexplus.eu</span>
            </a>
          </div>
        </div>
      </div>

      {/* Основная навигация */}
      <nav className={`header-nav ${shouldShowScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            {/* Логотип */}
            <a 
              href="/" 
              className={`nav-logo ${shouldShowScrolled ? 'scrolled' : ''}`}
              onClick={(e) => handleScrollToSection(e, 'home')}
            >
              VALTEX PLUS
            </a>
            
            {/* Десктопное меню */}
            <div className="nav-links-desktop">
              <a href="#home" onClick={(e) => handleScrollToSection(e, 'home')} className={`nav-link ${shouldShowScrolled ? 'scrolled' : ''}`}>Home</a>
              <a href="#products" onClick={(e) => handleScrollToSection(e, 'products')} className={`nav-link ${shouldShowScrolled ? 'scrolled' : ''}`}>Products</a>
              <a href="#logistics" onClick={(e) => handleScrollToSection(e, 'logistics')} className={`nav-link ${shouldShowScrolled ? 'scrolled' : ''}`}>Logistics</a>
              
              <Link to="/contact" className="header-btn">Contact Us</Link>
            </div>

            {/* Кнопка мобильного меню */}
            <button 
              ref={toggleButtonRef}
              className={`mobile-toggle ${shouldShowScrolled ? 'scrolled' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="icon-md" />
            </button>
          </div>

          {/* Мобильное меню */}
          {mobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <a href="#home" onClick={(e) => handleScrollToSection(e, 'home')} className={`nav-link ${shouldShowScrolled ? 'scrolled' : ''}`}>Home</a>
              <a href="#products" onClick={(e) => handleScrollToSection(e, 'products')} className={`nav-link ${shouldShowScrolled ? 'scrolled' : ''}`}>Products</a>
              <a href="#logistics" onClick={(e) => handleScrollToSection(e, 'logistics')} className={`nav-link ${shouldShowScrolled ? 'scrolled' : ''}`}>Logistics</a>
              
              <div className="mobile-btn-wrapper">
                <Link to="/contact" className="header-btn full-width-btn" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}