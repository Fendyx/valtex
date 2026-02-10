import { Mail, ArrowRight, MessageSquare, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const phoneNumber = "48577480689";
  
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      description: "For general inquiries and partnership opportunities",
      value: "info@valtexplus.eu",
      link: "mailto:info@valtexplus.eu",
      className: "email"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      description: "For immediate assistance and quick consultations",
      value: "+48 577 480 689",
      link: `https://wa.me/${phoneNumber}`,
      className: "whatsapp"
    },
    {
      icon: Send,
      title: "Telegram",
      description: "For detailed discussions and document sharing",
      value: "+48 577 480 689",
      link: `https://t.me/+${phoneNumber}`,
      className: "telegram"
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">Contact Us</span>
          <h2 className="contact-title">Get in Touch</h2>
        </div>

        <div className="contact-grid">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('mailto:') ? undefined : '_blank'}
                rel={contact.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`contact-card ${contact.className}`}
              >
                <div className="contact-card-header">
                  <div className="contact-icon-wrapper">
                    <Icon className="contact-icon" />
                  </div>
                  <h3>{contact.title}</h3>
                </div>
                
                <p className="contact-description">{contact.description}</p>
                
                <div className="contact-value">
                  <span>{contact.value}</span>
                  <ArrowRight className="contact-arrow" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
