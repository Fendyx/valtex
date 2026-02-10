import React from 'react';
import { Wheat, Sprout } from 'lucide-react';
import './Services.css';

export function Services() {
  return (
    <section className="services-section" id="products">
      <div className="services-container">
        
        {/* Заголовок секции */}
        <div className="services-header">
          <h2 className="section-title">Our Products</h2>
          <div className="title-decoration"></div>
        </div>

        {/* Сетка карточек */}
        <div className="services-grid">
          
          {/* Agricultural Trading */}
          {/* Заменили Card на div */}
          <div className="service-card">
            <div className="card-image-wrapper">
              {/* Заменили ImageWithFallback на img */}
              <img
                src="/agricultural.png"
                alt="Grain and seeds"
                className="card-image"
              />
              <div className="card-icon-badge">
                <Wheat className="service-icon" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Agricultural Trading</h3>
              <p className="card-text">
                We provide stable wholesale supplies of grains, oilseeds, and feed additives. Thanks to direct contracts with producers, we guarantee competitive prices and premium product quality.
              </p>
            </div>
          </div>

          {/* Mineral Fertilizers */}
          {/* Заменили Card на div */}
          <div className="service-card">
            <div className="card-image-wrapper">
              {/* Заменили ImageWithFallback на img */}
              <img
                src="https://eos.com/wp-content/uploads/2023/11/components-of-different-types-of-fertilizers.jpg"
                alt="Mineral fertilizers"
                className="card-image"
              />
              <div className="card-icon-badge">
                <Sprout className="service-icon" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Mineral Fertilizers</h3>
              <p className="card-text">
                We supply high-efficiency products from leading chemical manufacturers. We provide farmers across Europe and Asia with the essential resources to boost crop yields.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}