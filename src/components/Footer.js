export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">✈️</span>
              <span className="logo-text">Go c'est Go</span>
            </div>
            <p className="footer-tagline">
              Votre comparateur de vols intelligent pour voyager au meilleur prix.
            </p>
            <div className="footer-social">
              <a href="/" className="social-link" aria-label="Twitter">🐦</a>
              <a href="/" className="social-link" aria-label="Facebook">📘</a>
              <a href="/" className="social-link" aria-label="Instagram">📷</a>
              <a href="/" className="social-link" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="/search">Rechercher un vol</a></li>
                <li><a href="/how">Comment ça marche</a></li>
                <li><a href="/why">Pourquoi nous choisir</a></li>
                <li><a href="/contact">Nous contacter</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Informations</h4>
              <ul>
                <li><a href="/">À propos</a></li>
                <li><a href="/">Nos partenaires</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Carrières</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Légal</h4>
              <ul>
                <li><a href="/">Mentions légales</a></li>
                <li><a href="/">Politique de confidentialité</a></li>
                <li><a href="/">CGU</a></li>
                <li><a href="/">Cookies</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:support@travelcompare.com">📧 support@goc7go.com</a></li>
                <li><a href="tel:+24100000000">📞 +241 XX XX XX XX</a></li>
                <li><span>⏰ Lun-Ven : 9h-18h</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Go c'est Go — Tous droits réservés
          </p>
          <div className="footer-badges">
            <span className="badge">🔒 Paiement sécurisé</span>
            <span className="badge">✓ +200 compagnies</span>
            <span className="badge">⚡ Résultats instantanés</span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .footer {
          background: linear-gradient(180deg, #0a1f3d 0%, #061429 100%);
          color: rgba(255, 255, 255, 0.85);
          margin-top: 0;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(42, 127, 184, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .footer::after {
          content: '';
          position: absolute;
          bottom: -40%;
          left: -15%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 140, 66, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 48px 32px;
          position: relative;
          z-index: 1;
        }

        /* ===== TOP SECTION ===== */

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        /* ===== BRAND ===== */

        .footer-brand {
          max-width: 350px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .logo-icon {
          font-size: 32px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .logo-text {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #2a7fb8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }

        .footer-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 28px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 140, 66, 0.2);
          border-color: #ff8c42;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(255, 140, 66, 0.2);
        }

        /* ===== LINKS ===== */

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .footer-column h4 {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 12px;
        }

        .footer-column h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: linear-gradient(90deg, #ff8c42, transparent);
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column li {
          margin-bottom: 12px;
        }

        .footer-column a,
        .footer-column span {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-column a:hover {
          color: #ff8c42;
          transform: translateX(4px);
        }

        /* ===== DIVIDER ===== */

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          margin-bottom: 32px;
        }

        /* ===== BOTTOM SECTION ===== */

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-copyright {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .footer-badges {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
        }

        /* ===== RESPONSIVE ===== */

        @media (max-width: 1200px) {
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 968px) {
          .footer-container {
            padding: 60px 32px 24px;
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .footer-brand {
            max-width: 100%;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer-container {
            padding: 48px 24px 24px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-badges {
            width: 100%;
            justify-content: flex-start;
          }

          .badge {
            font-size: 12px;
            padding: 6px 12px;
          }
        }
      `}</style>
    </footer>
  );
}