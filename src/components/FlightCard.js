export default function FlightCard({ flight }) {
  console.log("🎫 FlightCard reçoit:", flight);

  // Protection immédiate contre flight undefined
  if (!flight) {
    console.warn("❌ FlightCard: flight est undefined");
    return (
      <div style={{padding: '20px', background: '#fee', border: '2px solid red', borderRadius: '10px'}}>
        <p style={{color: 'red', fontWeight: 'bold'}}>Erreur: Aucune donnée de vol</p>
      </div>
    );
  }

  const f = flight;
  console.log("✅ Données du vol:", {
    id: f.id,
    airline: f.airline,
    price: f.price,
    outbound: f.outbound
  });

  // Vérifications de sécurité pour toutes les propriétés essentielles
  const hasAirline = f.airline && f.airline.name;
  const hasPrice = f.price && typeof f.price.total !== 'undefined';
  const hasOutbound = f.outbound && f.outbound.from && f.outbound.to;
  const hasReturn = f.return && f.return.from && f.return.to;
  const hasBaggage = f.baggage && f.baggage.cabin && f.baggage.checked;
  const hasEmissions = f.emissions && f.emissions.co2;
  const hasRating = f.rating && f.rating.score && f.rating.reviews;
  const hasProvider = f.provider && f.provider.name;

  console.log("🔍 Vérifications:", {
    hasAirline,
    hasPrice,
    hasOutbound,
    hasReturn,
    hasBaggage,
    hasEmissions,
    hasRating,
    hasProvider
  });

  // Si les données essentielles manquent, afficher une carte d'erreur
  if (!hasAirline || !hasPrice || !hasOutbound) {
    console.error("❌ Données essentielles manquantes:", {
      hasAirline,
      hasPrice,
      hasOutbound,
      flightData: f
    });
    return (
      <div style={{
        padding: '20px',
        background: '#fff3cd',
        border: '2px solid #856404',
        borderRadius: '10px',
        color: '#856404'
      }}>
        <h3>⚠️ Données de vol incomplètes</h3>
        <p>ID du vol: {f.id || 'Inconnu'}</p>
        <pre style={{fontSize: '12px', overflow: 'auto'}}>
          {JSON.stringify(f, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <>
      <div className="flight-card">
        {/* En-tête avec compagnie et prix */}
        <div className="card-header">
          <div className="airline-section">
            <div className="airline-icon">✈️</div>
            <div className="airline-info">
              <h3 className="airline-name">{f.airline.name}</h3>
              <div className="flight-meta">
                <span className="meta-item">
                  <span className="meta-icon">⏱</span>
                  {f.outbound.duration || 'N/A'}
                </span>
                <span className="meta-divider">•</span>
                <span className="meta-item">
                  <span className="meta-icon">🛑</span>
                  {f.outbound.stops === 0 
                    ? "Direct" 
                    : `${f.outbound.stops || 0} escale${(f.outbound.stops || 0) > 1 ? 's' : ''}`
                  }
                </span>
              </div>
            </div>
          </div>
          
          <div className="price-section">
            <span className="price-label">À partir de</span>
            <div className="price-value">{f.price.total} €</div>
            <span className="price-detail">par personne</span>
          </div>
        </div>

        {/* Détails du vol aller */}
        <div className="flight-details">
          <div className="flight-direction">
            <div className="direction-label">
              <span className="direction-icon">🛫</span>
              <span>Vol aller</span>
            </div>
            <span className="flight-date">{f.outbound.date || 'Date non disponible'}</span>
          </div>

          <div className="route-timeline">
            <div className="route-point">
              <div className="time-large">{f.outbound.departureTime || '--:--'}</div>
              <div className="airport-code">{f.outbound.from.code || '---'}</div>
              <div className="city-name">{f.outbound.from.city || 'Ville inconnue'}</div>
            </div>

            <div className="route-line">
              <div className="duration-badge">{f.outbound.duration || 'N/A'}</div>
              {f.outbound.stops > 0 && f.outbound.segments && Array.isArray(f.outbound.segments) && (
                <div className="stops-indicator">
                  {f.outbound.segments.slice(0, -1).map((seg, idx) => (
                    <div key={idx} className="stop-point" title={`Escale à ${seg.to || 'Inconnu'}`}>
                      <span className="stop-dot"></span>
                      <span className="stop-code">{seg.to || '???'}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="route-point">
              <div className="time-large">{f.outbound.arrivalTime || '--:--'}</div>
              <div className="airport-code">{f.outbound.to.code || '---'}</div>
              <div className="city-name">{f.outbound.to.city || 'Ville inconnue'}</div>
            </div>
          </div>
        </div>

        {/* Détails du vol retour */}
        {hasReturn && (
          <div className="flight-details">
            <div className="flight-direction">
              <div className="direction-label">
                <span className="direction-icon">🛬</span>
                <span>Vol retour</span>
              </div>
              <span className="flight-date">{f.return.date || 'Date non disponible'}</span>
            </div>

            <div className="route-timeline">
              <div className="route-point">
                <div className="time-large">{f.return.departureTime || '--:--'}</div>
                <div className="airport-code">{f.return.from.code || '---'}</div>
                <div className="city-name">{f.return.from.city || 'Ville inconnue'}</div>
              </div>

              <div className="route-line">
                <div className="duration-badge">{f.return.duration || 'N/A'}</div>
                {f.return.stops > 0 && f.return.segments && Array.isArray(f.return.segments) && (
                  <div className="stops-indicator">
                    {f.return.segments.slice(0, -1).map((seg, idx) => (
                      <div key={idx} className="stop-point" title={`Escale à ${seg.to || 'Inconnu'}`}>
                        <span className="stop-dot"></span>
                        <span className="stop-code">{seg.to || '???'}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="route-point">
                <div className="time-large">{f.return.arrivalTime || '--:--'}</div>
                <div className="airport-code">{f.return.to.code || '---'}</div>
                <div className="city-name">{f.return.to.city || 'Ville inconnue'}</div>
              </div>
            </div>
          </div>
        )}

        {/* Informations supplémentaires */}
        {(hasBaggage || hasEmissions || hasRating) && (
          <div className="flight-extras">
            {hasBaggage && (
              <>
                <div className="extra-item">
                  <span className="extra-icon">💼</span>
                  <span className="extra-text">Bagage cabine: {f.baggage.cabin}</span>
                </div>
                <div className="extra-item">
                  <span className="extra-icon">🧳</span>
                  <span className="extra-text">Bagage soute: {f.baggage.checked}</span>
                </div>
              </>
            )}
            {hasEmissions && (
              <div className="extra-item">
                <span className="extra-icon">🌱</span>
                <span className="extra-text">CO₂: {f.emissions.co2}</span>
              </div>
            )}
            {hasRating && (
              <div className="extra-item">
                <span className="extra-icon">⭐</span>
                <span className="extra-text">{f.rating.score}/5 ({f.rating.reviews} avis)</span>
              </div>
            )}
          </div>
        )}

        {/* Pied de carte */}
        <div className="card-footer">
          <div className="badge-container">
            {f.outbound.stops === 0 && <span className="badge badge-direct">Vol direct</span>}
            {f.price.total < 500 && <span className="badge badge-deal">Bon plan</span>}
            {f.refundable && <span className="badge badge-refundable">Remboursable</span>}
            {f.changeable && <span className="badge badge-flexible">Modifiable</span>}
          </div>
          
          <button 
            className="view-btn" 
            onClick={() => {
              if (f.provider && f.provider.bookingUrl) {
                window.open(f.provider.bookingUrl, '_blank');
              } else {
                alert('Lien de réservation non disponible');
              }
            }}
          >
            <span className="btn-text">
              {hasProvider ? `Réserver avec ${f.provider.name}` : 'Voir les détails'}
            </span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .flight-card {
          background: white;
          border-radius: 20px;
          border: 2px solid #e5e9f0;
          padding: 28px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .flight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #2a7fb8, #ff8c42);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .flight-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(42, 127, 184, 0.15);
          border-color: #2a7fb8;
        }

        .flight-card:hover::before {
          opacity: 1;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
          gap: 20px;
          padding-bottom: 24px;
          border-bottom: 2px solid #f5f7fa;
        }

        .airline-section {
          display: flex;
          gap: 16px;
          flex: 1;
        }

        .airline-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, rgba(42, 127, 184, 0.1), rgba(255, 140, 66, 0.1));
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .flight-card:hover .airline-icon {
          transform: rotate(10deg) scale(1.1);
        }

        .airline-info {
          flex: 1;
        }

        .airline-name {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #0a1f3d;
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
        }

        .flight-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #6b7a8f;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 500;
        }

        .meta-icon {
          font-size: 15px;
        }

        .meta-divider {
          color: #d1d8e3;
        }

        .price-section {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .price-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #6b7a8f;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .price-value {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 36px;
          font-weight: 700;
          color: #2a7fb8;
          line-height: 1;
        }

        .price-detail {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #9aa5b5;
        }

        .flight-details {
          margin-bottom: 24px;
        }

        .flight-direction {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .direction-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #0a1f3d;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .direction-icon {
          font-size: 18px;
        }

        .flight-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #6b7a8f;
          font-weight: 500;
        }

        .route-timeline {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 20px;
          align-items: center;
          padding: 20px;
          background: #f8fafe;
          border-radius: 12px;
        }

        .route-point {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .time-large {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          color: #0a1f3d;
        }

        .airport-code {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #2a7fb8;
        }

        .city-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #6b7a8f;
        }

        .route-line {
          position: relative;
          height: 2px;
          background: linear-gradient(90deg, #2a7fb8, #ff8c42);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .duration-badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          background: white;
          color: #2a7fb8;
          padding: 6px 12px;
          border-radius: 20px;
          border: 2px solid #2a7fb8;
          white-space: nowrap;
        }

        .stops-indicator {
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        .stop-point {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .stop-dot {
          width: 10px;
          height: 10px;
          background: white;
          border: 3px solid #ff8c42;
          border-radius: 50%;
        }

        .stop-code {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #ff8c42;
          background: white;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .flight-extras {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin-bottom: 20px;
          padding: 16px;
          background: #f8fafe;
          border-radius: 12px;
        }

        .extra-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #6b7a8f;
        }

        .extra-icon {
          font-size: 16px;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-top: 20px;
          border-top: 2px solid #f5f7fa;
        }

        .badge-container {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          flex: 1;
        }

        .badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 20px;
        }

        .badge-direct {
          background: rgba(42, 127, 184, 0.1);
          color: #2a7fb8;
          border: 1px solid rgba(42, 127, 184, 0.3);
        }

        .badge-deal {
          background: rgba(255, 140, 66, 0.15);
          color: #ff8c42;
          border: 1px solid rgba(255, 140, 66, 0.3);
        }

        .badge-refundable {
          background: rgba(52, 211, 153, 0.1);
          color: #10b981;
          border: 1px solid rgba(52, 211, 153, 0.3);
        }

        .badge-flexible {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .view-btn {
          font-family: 'DM Sans', sans-serif;
          padding: 14px 28px;
          border-radius: 12px;
          border: 2px solid #2a7fb8;
          background: white;
          color: #2a7fb8;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .view-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2a7fb8, #1e5a8e);
          transition: left 0.4s ease;
          z-index: 0;
        }

        .view-btn:hover::before {
          left: 0;
        }

        .view-btn:hover {
          color: white;
          border-color: #1e5a8e;
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(42, 127, 184, 0.3);
        }

        .btn-text,
        .btn-arrow {
          position: relative;
          z-index: 1;
        }

        .btn-arrow {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .view-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .flight-card {
            padding: 20px;
          }

          .card-header {
            flex-direction: column;
          }

          .price-section {
            align-items: flex-start;
            width: 100%;
          }

          .route-timeline {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .route-line {
            height: 60px;
            width: 2px;
            background: linear-gradient(180deg, #2a7fb8, #ff8c42);
          }

          .stops-indicator {
            flex-direction: column;
            height: 100%;
          }

          .flight-extras {
            grid-template-columns: 1fr;
          }

          .card-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .view-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}