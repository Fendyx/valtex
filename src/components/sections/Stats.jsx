import React from 'react';
import './Stats.css';

export function Stats() {
  const stats = [
    { value: '10+', label: 'Years of Collective Experience' },
    { value: '50+', label: 'Satisfied Clients' },
    { value: '10+', label: 'Countries' },
    { value: '98%', label: 'Customer Satisfaction' }
  ];

  return (
    <section className="stats-section">
      {/* Фон с изображением и затемнением */}
      <div className="stats-bg-wrapper">
        {/* Заменили ImageWithFallback на img */}
        <img
          src="https://images.unsplash.com/photo-1702896781096-1149fed1115f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsYW5kc2NhcGUlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2OTA4MjQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Agricultural landscape"
          className="stats-bg-image"
        />
        <div className="stats-overlay"></div>
      </div>

      {/* Контент */}
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}