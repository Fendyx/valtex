import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-background-wrapper">
        {/* Заменили ImageWithFallback на обычный img */}
        <img
          src="https://images.unsplash.com/photo-1721577756352-54505d771f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGZpZWxkJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzY5MDI5OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Agricultural field"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-title">
            VALTEX PLUS
          </h1>
          <p className="hero-subtitle">
            Your Reliable Partner in the Global Agro-Market
          </p>
          <p className="hero-description">
            We connect European and Asian markets, creating efficient trade corridors for agriculture and industry. Our mission is to ensure food security by supplying high-quality products and fertilizers exactly on time.
          </p>
          
          {/* Заменили Button на ссылку <a> с теми же классами */}
          <a href="#services" className="hero-button">
            Get Started <ArrowRight className="hero-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}