import React from 'react';
import { Truck, Ship, Warehouse, Globe, CheckCircle, Users } from 'lucide-react';
import './Logistics.css';

export function Logistics() {
  const features = [
    {
      icon: Truck,
      title: 'Complete Supply Chain',
      description: 'We manage the entire logistics process from origin to destination'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Strong partnerships across European and Asian markets'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every stage of delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly qualified staff dedicated to your success'
    }
  ];

  const deliveryMethods = [
    {
      icon: Truck,
      title: 'Ground Transport',
      description: 'Reliable road and rail delivery services'
    },
    {
      icon: Ship,
      title: 'Sea Freight',
      description: 'Efficient maritime shipping solutions'
    },
    {
      icon: Warehouse,
      title: 'Modern Warehouses',
      description: 'Temperature-controlled storage facilities'
    }
  ];

  const regions = {
    europe: {
      title: 'Europe',
      countries: [
        'Germany', 'Poland', 'France', 'Netherlands',
        'Italy', 'Spain', 'Romania', 'Czech Republic'
      ]
    },
    asia: {
      title: 'Asia',
      countries: [
        'Turkey', 'Kazakhstan', 'Uzbekistan', 'China',
        'India', 'Vietnam', 'Thailand', 'South Korea'
      ]
    }
  };

  return (
    <section className="logistics-section" id="logistics">
      <div className="logistics-container">
        
        {/* Intro & Features Block */}
        <div className="logistics-intro-block">
          <h2 className="logistics-title">Logistics & Support</h2>
          <p className="logistics-description">
            Behind every successful deal stands our highly qualified staff. We don't just transport cargo — we take over the entire supply chain management.
          </p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-wrapper">
                  <div className="icon-box green">
                    <feature.icon className="icon-sm" />
                  </div>
                </div>
                <div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Methods */}
        <div className="methods-block">
          <h3 className="subsection-title">Delivery Methods</h3>
          <div className="methods-grid">
            {deliveryMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="icon-box-large green">
                  <method.icon className="icon-md" />
                </div>
                <h4 className="method-title">{method.title}</h4>
                <p className="method-text">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Regions */}
        <div className="regions-block">
          <h3 className="subsection-title">Delivery Regions</h3>
          <div className="regions-grid">
            
            {/* Europe */}
            <div className="region-card">
              <div className="region-header">
                <div className="icon-box blue">
                  <Globe className="icon-sm" />
                </div>
                <h4 className="region-title">{regions.europe.title}</h4>
              </div>
              <ul className="country-list">
                {regions.europe.countries.map((country, index) => (
                  <li key={index} className="country-item">
                    <span className="bullet-point"></span>
                    {country}
                  </li>
                ))}
              </ul>
            </div>

            {/* Asia */}
            <div className="region-card">
              <div className="region-header">
                <div className="icon-box orange">
                  <Globe className="icon-sm" />
                </div>
                <h4 className="region-title">{regions.asia.title}</h4>
              </div>
              <ul className="country-list">
                {regions.asia.countries.map((country, index) => (
                  <li key={index} className="country-item">
                    <span className="bullet-point"></span>
                    {country}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}