import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [form, setForm] = useState({
    from: "LBV",
    to: "CDG",
    departureDate: "2026-03-12",
    returnDate: "2026-03-28",
    passengers: 1,
    maxPrice: "",
    stops: "",
    cabinClass: "",
    refundable: "",
    airline: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(form);
  };

  return (
    <>
      <div className="search-form-wrapper">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-grid">
            {/* Origine et Destination */}
            <div className="input-group">
              <label htmlFor="from">
                <span className="label-icon">🛫</span>
                Départ
              </label>
              <input
                id="from"
                name="from"
                value={form.from}
                onChange={handleChange}
                placeholder="Code aéroport (ex: LBV)"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="to">
                <span className="label-icon">🛬</span>
                Destination
              </label>
              <input
                id="to"
                name="to"
                value={form.to}
                onChange={handleChange}
                placeholder="Code aéroport (ex: CDG)"
                required
              />
            </div>

            {/* Dates */}
            <div className="input-group">
              <label htmlFor="departureDate">
                <span className="label-icon">📅</span>
                Date de départ
              </label>
              <input
                id="departureDate"
                type="date"
                name="departureDate"
                value={form.departureDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="returnDate">
                <span className="label-icon">📅</span>
                Date de retour
              </label>
              <input
                id="returnDate"
                type="date"
                name="returnDate"
                value={form.returnDate}
                onChange={handleChange}
              />
            </div>

            {/* Passagers et Prix */}
            <div className="input-group">
              <label htmlFor="passengers">
                <span className="label-icon">👥</span>
                Passagers
              </label>
              <input
                id="passengers"
                type="number"
                name="passengers"
                min="1"
                max="9"
                value={form.passengers}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="maxPrice">
                <span className="label-icon">💰</span>
                Prix max (€)
              </label>
              <input
                id="maxPrice"
                type="number"
                name="maxPrice"
                placeholder="Ex: 600"
                value={form.maxPrice}
                onChange={handleChange}
              />
            </div>

            {/* Escales et Classe */}
            <div className="input-group">
              <label htmlFor="stops">
                <span className="label-icon">🔄</span>
                Escales
              </label>
              <select id="stops" name="stops" value={form.stops} onChange={handleChange}>
                <option value="">Toutes</option>
                <option value="0">Direct</option>
                <option value="1">1 escale</option>
                <option value="2">2 escales</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="cabinClass">
                <span className="label-icon">💺</span>
                Classe
              </label>
              <select id="cabinClass" name="cabinClass" value={form.cabinClass} onChange={handleChange}>
                <option value="">Toutes</option>
                <option value="economy">Économie</option>
                <option value="premium">Premium Eco</option>
                <option value="business">Business</option>
                <option value="first">Première</option>
              </select>
            </div>

            {/* Remboursable et Compagnie */}
            <div className="input-group">
              <label htmlFor="refundable">
                <span className="label-icon">✓</span>
                Remboursable
              </label>
              <select id="refundable" name="refundable" value={form.refundable} onChange={handleChange}>
                <option value="">Peu importe</option>
                <option value="true">Oui</option>
                <option value="false">Non</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="airline">
                <span className="label-icon">✈️</span>
                Compagnie
              </label>
              <select id="airline" name="airline" value={form.airline} onChange={handleChange}>
                <option value="">Toutes</option>
                <option value="Royal Air Maroc">Royal Air Maroc</option>
                <option value="Turkish Airlines">Turkish Airlines</option>
                <option value="Air France">Air France</option>
                <option value="Ethiopian Airlines">Ethiopian Airlines</option>
              </select>
            </div>
          </div>

          <button type="submit" className="search-btn">
            <span className="btn-icon">🔍</span>
            <span className="btn-text">Rechercher les vols</span>
            <span className="btn-arrow">→</span>
          </button>
        </form>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .search-form-wrapper {
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
          margin-bottom: 32px;
        }

        .search-form {
          width: 100%;
        }

        .search-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #0a1f3d;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .label-icon {
          font-size: 16px;
          opacity: 0.7;
        }

        .input-group input,
        .input-group select {
          font-family: 'DM Sans', sans-serif;
          padding: 14px 16px;
          border: 2px solid #e5e9f0;
          border-radius: 12px;
          font-size: 15px;
          color: #0a1f3d;
          transition: all 0.3s ease;
          background: #fafbfc;
          font-weight: 500;
        }

        .input-group input::placeholder {
          color: #a8b3c1;
          font-weight: 400;
        }

        .input-group input:focus,
        .input-group select:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
          transform: translateY(-1px);
        }

        .input-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%233e4c5e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }

        .search-btn {
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          padding: 18px 32px;
          border-radius: 14px;
          border: 2px solid #ff8c42;
          background: linear-gradient(135deg, #3b82f6, #1e3a8a);
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.25);
          position: relative;
          overflow: hidden;
        }

        .search-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .search-btn:hover::before {
          left: 100%;
        }

        .search-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(59, 130, 246, 0.35), 0 0 0 3px rgba(255, 140, 66, 0.2);
          border-color: #ff8c42;
        }

        .search-btn:active {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.25);
        }

        .btn-icon {
          font-size: 20px;
        }

        .btn-text {
          position: relative;
          z-index: 1;
        }

        .btn-arrow {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .search-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .search-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .search-form-wrapper {
            padding: 24px;
          }

          .search-btn {
            padding: 16px 28px;
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .input-group input,
          .input-group select {
            padding: 12px 14px;
            font-size: 14px;
          }

          .input-group label {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}