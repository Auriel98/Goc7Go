export default function HowItWorks() {
  return (
    <section className="how">
      <div className="container">
        <div className="header-wrapper">
          <h2 className="title">Comment ça marche ?</h2>
          <p className="subtitle">
            Trouver un billet d'avion au meilleur prix n'a jamais été aussi simple.
            Notre plateforme compare en temps réel des centaines de compagnies et agences.
          </p>
        </div>

        <div className="steps">
          <div className="card card-1">
            <div className="card-number">01</div>
            <div className="icon">🔎</div>
            <h3>Recherchez votre vol</h3>
            <p>
              Indiquez votre ville de départ, votre destination et vos dates de voyage.
              Nous analysons instantanément les meilleures options disponibles.
            </p>
          </div>

          <div className="card card-2">
            <div className="card-number">02</div>
            <div className="icon">📊</div>
            <h3>Comparez les offres</h3>
            <p>
              Comparez les prix, les horaires, les compagnies aériennes et la durée des vols.
              Notre moteur sélectionne les meilleures opportunités.
            </p>
          </div>

          <div className="card card-3">
            <div className="card-number">03</div>
            <div className="icon">💳</div>
            <h3>Réservez en toute sécurité</h3>
            <p>
              Choisissez votre vol et finalisez votre réservation auprès de nos partenaires
              certifiés avec paiement sécurisé.
            </p>
          </div>
        </div>

        <div className="extra">
          <div className="stat-item">
            <span className="stat-icon">✈️</span>
            <span className="stat-text">Plus de <strong>200 compagnies</strong> aériennes comparées</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🌍</span>
            <span className="stat-text">Couverture <strong>mondiale</strong></span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⚡</span>
            <span className="stat-text">Résultats en <strong>quelques secondes</strong></span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .how {
          padding: 120px 24px;
          background: linear-gradient(180deg, #fafbfc 0%, #f4f6f9 100%);
          position: relative;
          overflow: hidden;
        }

        .how::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(42, 127, 184, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .how::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -15%;
          width: 500px;
          height: 500px;
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

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }

        .card {
          background: white;
          padding: 48px 36px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(10, 31, 61, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border: 2px solid transparent;
          animation: fadeInUp 0.8s ease-out backwards;
        }

        .card-1 {
          animation-delay: 0.1s;
        }

        .card-2 {
          animation-delay: 0.2s;
        }

        .card-3 {
          animation-delay: 0.3s;
        }

        .card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(10, 31, 61, 0.12);
          border-color: #ff8c42;
        }

        .card-number {
          position: absolute;
          top: 24px;
          right: 24px;
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 48px;
          font-weight: 700;
          color: rgba(42, 127, 184, 0.08);
          line-height: 1;
        }

        .icon {
          font-size: 56px;
          margin-bottom: 24px;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .card:hover .icon {
          transform: scale(1.15) rotate(5deg);
        }

        .card h3 {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #0a1f3d;
          letter-spacing: -0.01em;
        }

        .card p {
          color: #3e4c5e;
          font-size: 16px;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
        }

        .extra {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
          padding: 40px 32px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(10, 31, 61, 0.06);
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          color: #3e4c5e;
        }

        .stat-icon {
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-text strong {
          color: #0a1f3d;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .how {
            padding: 80px 20px;
          }

          .header-wrapper {
            margin-bottom: 48px;
          }

          .steps {
            gap: 24px;
            margin-bottom: 56px;
          }

          .card {
            padding: 36px 28px;
          }

          .extra {
            gap: 32px;
            padding: 32px 24px;
          }

          .stat-item {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}