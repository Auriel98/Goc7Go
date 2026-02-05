import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    // Simulation envoi (remplacer par API plus tard)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="header-wrapper">
          <h2 className="title">Contactez-nous</h2>
          <p className="subtitle">
            Une question ? Un problème avec votre réservation ?  
            Notre équipe est disponible pour vous aider.
          </p>
        </div>

        <div className="content-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Saisissez votre nom complet"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Exemple@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="subject">Sujet</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Demande d'information"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Décrivez votre demande..."
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <span className="icon">✉️</span>
                  Envoyer le message
                </>
              )}
            </button>

            {success && (
              <div className="success">
                <span className="success-icon">✓</span>
                Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </div>
            )}
          </form>

          <div className="info-card">
            <h3 className="info-title">Informations de contact</h3>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <a href="mailto:support@travelcompare.com" className="info-value">
                    support@travelcompare.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <span className="info-label">Téléphone</span>
                  <a href="tel:+24100000000" className="info-value">
                    +241 XX XX XX XX
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">⏰</div>
                <div className="info-content">
                  <span className="info-label">Horaires</span>
                  <span className="info-value">
                    Lun - Ven : 9h - 18h
                  </span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <p className="social-title">Suivez-nous</p>
              <div className="social-icons">
                <a href="/" className="social-icon">🐦</a>
                <a href="/" className="social-icon">📘</a>
                <a href="/" className="social-icon">📷</a>
                <a href="/" className="social-icon">💼</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .contact {
          padding: 120px 24px;
          background: linear-gradient(180deg, #fafbfc 0%, #f4f6f9 100%);
          position: relative;
          overflow: hidden;
        }

        .contact::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -15%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(42, 127, 184, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .contact::after {
          content: '';
          position: absolute;
          bottom: -25%;
          right: -20%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255, 140, 66, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          position: relative;
          z-index: 1;
        }

        .header-wrapper {
          text-align: center;
          margin-bottom: 64px;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .title {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: clamp(36px, 5vw, 48px);
          font-weight: 700;
          color: #0a1f3d;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
          position: relative;
          display: inline-block;
        }

        .title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #2a7fb8, #ff8c42);
          border-radius: 2px;
        }

        .subtitle {
          max-width: 600px;
          margin: 24px auto 0;
          color: #3e4c5e;
          font-size: 18px;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 48px;
          align-items: start;
        }

        /* ===== FORM ===== */

        .form {
          background: white;
          padding: 48px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(10, 31, 61, 0.08);
          border: 2px solid #e5e9f0;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .input-group {
          margin-bottom: 24px;
        }

        .input-group:last-of-type {
          margin-bottom: 32px;
        }

        label {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #0a1f3d;
          margin-bottom: 8px;
          text-align: left;
        }

        input, textarea {
          width: 100%;
          padding: 16px 20px;
          border-radius: 12px;
          border: 2px solid #e5e9f0;
          font-size: 16px;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.3s ease;
          background: #fafbfc;
        }

        input:focus, textarea:focus {
          border-color: #2a7fb8;
          outline: none;
          background: white;
          box-shadow: 0 0 0 4px rgba(42, 127, 184, 0.08);
        }

        input::placeholder, textarea::placeholder {
          color: #a8b3c1;
        }

        textarea {
          resize: vertical;
          min-height: 140px;
        }

        .submit-btn {
          width: 100%;
          padding: 18px 32px;
          background: linear-gradient(135deg, #2a7fb8, #1e5a8e);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(42, 127, 184, 0.3);
          border: 2px solid #ff8c42;
        }

        .submit-btn:disabled {
          background: #a8b3c1;
          cursor: not-allowed;
          transform: none;
        }

        .submit-btn:disabled:hover {
          box-shadow: none;
          border: none;
        }

        .submit-btn .icon {
          font-size: 20px;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        .success {
          margin-top: 24px;
          padding: 16px 20px;
          background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          color: #2e7d32;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: fadeIn 0.5s ease-out;
        }

        .success-icon {
          width: 24px;
          height: 24px;
          background: #4caf50;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* ===== INFO CARD ===== */

        .info-card {
          background: white;
          padding: 48px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(10, 31, 61, 0.08);
          border: 2px solid #e5e9f0;
          animation: slideInRight 0.8s ease-out 0.3s backwards;
          position: sticky;
          top: 24px;
        }

        .info-title {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          color: #0a1f3d;
          margin-bottom: 32px;
          text-align: center;
        }

        .info-items {
          margin-bottom: 40px;
        }

        .info-item {
          display: flex;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #e5e9f0;
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(42, 127, 184, 0.1), rgba(255, 140, 66, 0.08));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .info-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #6b7a8f;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #0a1f3d;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        a.info-value:hover {
          color: #ff8c42;
        }

        /* ===== SOCIAL ===== */

        .social-links {
          padding-top: 32px;
          border-top: 1px solid #e5e9f0;
        }

        .social-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #6b7a8f;
          text-align: center;
          margin-bottom: 16px;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #fafbfc, #f4f6f9);
          border: 2px solid #e5e9f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-4px);
          border-color: #ff8c42;
          box-shadow: 0 8px 20px rgba(255, 140, 66, 0.15);
        }

        /* ===== RESPONSIVE ===== */

        @media (max-width: 968px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .info-card {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .contact {
            padding: 80px 20px;
          }

          .header-wrapper {
            margin-bottom: 48px;
          }

          .form, .info-card {
            padding: 32px 24px;
          }

          .row {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}