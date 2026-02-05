export default function WhyUs() {
  return (
    <section className="why">
      <div className="container">
        <div className="header-wrapper">
          <h2 className="title">Pourquoi choisir Go c'est Go ?</h2>
          <p className="subtitle">
            Nous simplifions votre expérience de voyage en vous offrant
            les meilleures offres disponibles, rapidement et en toute sécurité.
          </p>
        </div>

        <div className="features">
          <div className="card card-1">
            <div className="icon-wrapper">
              <div className="icon">💸</div>
            </div>
            <h3>Meilleurs prix garantis</h3>
            <p>
              Nous comparons des centaines de compagnies aériennes et agences
              pour vous proposer les tarifs les plus compétitifs.
            </p>
          </div>

          <div className="card card-2">
            <div className="icon-wrapper">
              <div className="icon">⚡</div>
            </div>
            <h3>Recherche ultra rapide</h3>
            <p>
              Notre moteur analyse instantanément les offres disponibles
              pour vous fournir des résultats en quelques secondes.
            </p>
          </div>

          <div className="card card-3">
            <div className="icon-wrapper">
              <div className="icon">🔒</div>
            </div>
            <h3>Paiement sécurisé</h3>
            <p>
              Toutes les réservations sont réalisées via des partenaires certifiés
              avec des systèmes de paiement fiables et protégés.
            </p>
          </div>

        </div>

        {/* SECTION STATISTIQUES */}
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">+200</div>
            <p className="stat-label">Compagnies comparées</p>
            <div className="stat-bar"></div>
          </div>
          <div className="stat-card">
            <div className="stat-number">+1M</div>
            <p className="stat-label">Recherches mensuelles</p>
            <div className="stat-bar"></div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99%</div>
            <p className="stat-label">Clients satisfaits</p>
            <div className="stat-bar"></div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        .why {
          padding: 120px 24px;
          background: white;
          position: relative;
          overflow: hidden;
        }

        .why::before {
          content: '';
          position: absolute;
          top: 10%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(42, 127, 184, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .why::after {
          content: '';
          position: absolute;
          bottom: 10%;
          right: -10%;
          width: 600px;
          height: 600px;
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
          margin-bottom: 72px;
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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
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
          max-width: 700px;
          margin: 24px auto 0;
          color: #3e4c5e;
          font-size: 18px;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }

        .card {
          background: linear-gradient(135deg, #fafbfc 0%, #ffffff 100%);
          padding: 40px 32px;
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid #e5e9f0;
          position: relative;
          animation: fadeInUp 0.8s ease-out backwards;
        }

        .card-1 { animation-delay: 0.1s; }
        .card-2 { animation-delay: 0.2s; }
        .card-3 { animation-delay: 0.3s; }
        .card-4 { animation-delay: 0.4s; }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #2a7fb8, #ff8c42);
          border-radius: 20px 20px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover {
          transform: translateY(-12px);
          border-color: #ff8c42;
          box-shadow: 0 20px 40px rgba(255, 140, 66, 0.15);
        }

        .card:hover::before {
          opacity: 1;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          background: linear-gradient(135deg, rgba(42, 127, 184, 0.08), rgba(255, 140, 66, 0.08));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }

        .card:hover .icon-wrapper {
          transform: rotate(10deg) scale(1.1);
          background: linear-gradient(135deg, rgba(42, 127, 184, 0.15), rgba(255, 140, 66, 0.15));
        }

        .icon {
          font-size: 44px;
          transition: transform 0.3s ease;
        }

        .card:hover .icon {
          transform: scale(1.1);
        }

        .card h3 {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #0a1f3d;
          letter-spacing: -0.01em;
          text-align: center;
        }

        .card p {
          color: #3e4c5e;
          font-size: 16px;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
          text-align: center;
        }

        /* ===== STATS ===== */

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 48px;
          background: linear-gradient(135deg, #0a1f3d 0%, #1e5a8e 100%);
          padding: 64px 48px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
        }

        .stats::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 140, 66, 0.15) 0%, transparent 70%);
          border-radius: 50%;
        }

        .stat-card {
          text-align: center;
          position: relative;
          z-index: 1;
          animation: fadeInScale 0.8s ease-out backwards;
        }

        .stat-card:nth-child(1) { animation-delay: 0.5s; }
        .stat-card:nth-child(2) { animation-delay: 0.6s; }
        .stat-card:nth-child(3) { animation-delay: 0.7s; }

        .stat-number {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: clamp(48px, 6vw, 64px);
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #ff8c42);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          line-height: 1;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.85);
          font-size: 16px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .stat-bar {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #ff8c42, #2a7fb8);
          border-radius: 2px;
          margin: 0 auto;
          animation: slideInLeft 0.8s ease-out backwards;
        }

        .stat-card:nth-child(1) .stat-bar { animation-delay: 0.7s; }
        .stat-card:nth-child(2) .stat-bar { animation-delay: 0.8s; }
        .stat-card:nth-child(3) .stat-bar { animation-delay: 0.9s; }

        @media (max-width: 768px) {
          .why {
            padding: 80px 20px;
          }

          .header-wrapper {
            margin-bottom: 48px;
          }

          .features {
            gap: 24px;
            margin-bottom: 56px;
          }

          .card {
            padding: 32px 24px;
          }

          .stats {
            gap: 40px;
            padding: 48px 32px;
          }
        }
      `}</style>
    </section>
  );
}