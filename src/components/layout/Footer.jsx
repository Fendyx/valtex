import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Функция скролла (для ссылок внутри главной страницы)
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();

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
      }
    } else {
      navigate('/', { state: { targetId } });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Основная сетка (4 колонки) */}
        <div className="footer-grid">
          
          {/* Колонка 1: Бренд */}
          <div className="footer-column">
            <h3 className="footer-brand">VALTEX PLUS</h3>
            <p className="footer-description">
              Your reliable partner in the global agro-market, connecting Europe and Asia.
            </p>
          </div>

          {/* Колонка 2: Ссылки */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {/* Ссылки на секции главной страницы (Products / Logistics) */}
              <li>
                <a href="#products" onClick={(e) => handleScrollToSection(e, 'products')} className="footer-link">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#logistics" onClick={(e) => handleScrollToSection(e, 'logistics')} className="footer-link">
                  Logistics
                </a>
              </li>
              
              {/* Ссылка на ОТДЕЛЬНУЮ страницу Contact */}
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Услуги */}
          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li>Agricultural Trading</li>
              <li>Mineral Fertilizers</li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-list contact-list">
              <li className="contact-item">
                <Mail className="footer-icon" />
                <span>info@valtexplus.com</span>
              </li>
              <li className="contact-item">
                <Phone className="footer-icon" />
                <span>+48 577 480 689</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2026 VALTEX PLUS. All rights reserved.</p>
            
            {/* Ссылки на Privacy и Terms */}
            <div className="footer-legal-links">
              <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}