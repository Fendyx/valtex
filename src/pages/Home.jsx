import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Stats } from '../components/sections/Stats';
import { Logistics } from '../components/sections/Logistics';
// Contact здесь больше не импортируем и не рендерим!

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Если пришли с другой страницы (например, с Contact) с указанием секции
    if (location.state && location.state.targetId) {
      const targetId = location.state.targetId;

      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          // Небольшая задержка для рендеринга
          setTimeout(() => {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }, 100);
        }
      }
      // Очищаем state, чтобы при F5 не прыгало
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="services">
        <Services />
      </div>

      {/* Stats используем как блок About */}
      <div id="about">
        <Stats />
      </div>
      
      <div id="logistics">
        <Logistics />
      </div>
    </>
  );
}