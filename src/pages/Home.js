import { useState, useRef, useEffect } from "react";
import { searchFlights } from "../services/flightApi"; 
import SearchForm from "../components/SearchForm";
import FlightCard from "../components/FlightCard";

import HowItWorks from "../pages/HowItWorks";
import WhyUs from "../pages/WhyUs";
import Contact from "../pages/Contact";

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  
  // Référence pour la section des résultats
  const resultsRef = useRef(null);

  const handleSearch = async (params) => {
    setLoading(true);
    setSearched(true);
    try {
      const results = await searchFlights(params);
      console.log("🔍 Résultats trouvés:", results);
      setFlights(results);
    } catch (error) {
      console.error("❌ Erreur lors de la recherche:", error);
      setFlights([]);
    } finally {
      setLoading(false);
    }
  };

  // Scroll automatique vers les résultats quand ils apparaissent
  useEffect(() => {
    if (searched && !loading && resultsRef.current) {
      // Petit délai pour laisser l'animation se terminer
      setTimeout(() => {
        resultsRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [searched, loading]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap');

        :root {
          --primary-navy: #1e3a8a;
          --primary-blue: #3b82f6;
          --accent-orange: #ff8c42;
          --neutral-white: #ffffff;
          --neutral-50: #fafbfc;
          --neutral-100: #f4f6f9;
          --neutral-200: #e5e9f0;
          --neutral-700: #3e4c5e;
          --neutral-900: #1a2332;
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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Smooth scroll pour toute la page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <main style={styles.page}>
        {/* HERO / SEARCH */}
        <section id="search" style={styles.hero}>
          <div style={styles.heroOverlay}></div>
          
          <div style={styles.heroContent}>
            <div style={styles.heroTextWrapper}>
              <h1 style={styles.title}>
                Trouvez votre prochain vol
              </h1>
              <p style={styles.subtitle}>
                Comparez instantanément des milliers de vols et réservez au meilleur prix. 
                Votre voyage commence ici.
              </p>
            </div>

            <div style={styles.searchWrapper}>
              <SearchForm onSearch={handleSearch} />
            </div>
          </div>
        </section>

        {/* RESULTS - Avec ref pour le scroll */}
        <section ref={resultsRef} style={styles.resultsSection}>
          {/* État de chargement */}
          {loading && (
            <div style={styles.loadingContainer}>
              <div style={styles.loadingSpinner}></div>
              <p style={styles.loadingText}>
                Recherche des meilleures offres en cours...
              </p>
            </div>
          )}

          {/* Résultats trouvés */}
          {!loading && flights.length > 0 && (
            <div style={styles.resultsContainer}>
              <div style={styles.resultsHeader}>
                <div>
                  <h2 style={styles.resultsTitle}>
                    {flights.length} {flights.length === 1 ? 'vol trouvé' : 'vols trouvés'}
                  </h2>
                  <span style={styles.resultsSubtitle}>Triés par prix croissant</span>
                </div>
                <div style={styles.resultsBadge}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{marginRight: 8}}>
                    <path d="M10 1L12.5 6L18 7L14 11L15 17L10 14L5 17L6 11L2 7L7.5 6L10 1Z" 
                          fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  Meilleures offres
                </div>
              </div>

              <div style={styles.resultsList}>
                {flights.map((flight, index) => (
                  <div 
                    key={flight.id} 
                    style={{
                      ...styles.resultItem,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <FlightCard flight={flight} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Aucun résultat trouvé */}
          {!loading && searched && flights.length === 0 && (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <path d="M32 8L38 24L54 28L42 40L45 56L32 48L19 56L22 40L10 28L26 24L32 8Z" 
                        stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
                  <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" 
                          fill="none" opacity="0.2" strokeDasharray="4 4"/>
                </svg>
              </div>
              <h3 style={styles.emptyTitle}>Aucun vol trouvé</h3>
              <p style={styles.emptyText}>
                Essayez de modifier vos critères de recherche pour découvrir plus d'options disponibles.
              </p>
            </div>
          )}

          {/* État initial (avant recherche) */}
          {!loading && !searched && (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <path d="M32 8L38 24L54 28L42 40L45 56L32 48L19 56L22 40L10 28L26 24L32 8Z" 
                        stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
                  <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" 
                          fill="none" opacity="0.2" strokeDasharray="4 4"/>
                </svg>
              </div>
              <h3 style={styles.emptyTitle}>Prêt à décoller ?</h3>
              <p style={styles.emptyText}>
                Lancez une recherche pour découvrir les vols disponibles et trouver les meilleures offres.
              </p>
            </div>
          )}
        </section>

        {/* AUTRES SECTIONS */}
        <section id="how" style={styles.section}>
          <HowItWorks />
        </section>

        <section id="why" style={styles.section}>
          <WhyUs />
        </section>

        <section id="contact" style={styles.section}>
          <Contact />
        </section>
      </main>
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "var(--neutral-white)",
    minHeight: "100vh",
    position: "relative"
  },

  hero: {
    position: "relative",
    backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "140px 24px 120px",
    overflow: "hidden",
    isolation: "isolate"
  },

  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(30, 58, 138, 0.92) 0%, rgba(59, 130, 246, 0.85) 100%)",
    zIndex: 0
  },

  heroContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1
  },

  heroTextWrapper: {
    textAlign: "center",
    marginBottom: "56px",
    animation: "fadeInUp 0.8s ease-out"
  },

  title: {
    fontFamily: "'Crimson Pro', Georgia, serif",
    fontSize: "clamp(40px, 6vw, 72px)",
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: "20px",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)"
  },

  subtitle: {
    fontSize: "clamp(16px, 2.5vw, 20px)",
    color: "rgba(255, 255, 255, 0.95)",
    maxWidth: "620px",
    margin: "0 auto",
    lineHeight: 1.6,
    fontWeight: 400,
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)"
  },

  searchWrapper: {
    animation: "fadeInUp 0.8s ease-out 0.2s backwards",
    background: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "32px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
    maxWidth: "900px",
    margin: "0 auto"
  },

  resultsSection: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "64px 24px",
    backgroundColor: "var(--neutral-white)",
    scrollMarginTop: "20px" // Espace au-dessus lors du scroll
  },

  resultsContainer: {
    animation: "fadeIn 0.5s ease-out"
  },

  resultsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
    flexWrap: "wrap",
    gap: "16px"
  },

  resultsTitle: {
    fontFamily: "'Crimson Pro', Georgia, serif",
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--primary-navy)",
    marginBottom: "4px"
  },

  resultsSubtitle: {
    fontSize: "14px",
    color: "var(--neutral-700)",
    fontWeight: 500
  },

  resultsBadge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "10px 20px",
    background: "var(--primary-blue)",
    color: "white",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
    border: "2px solid var(--accent-orange)"
  },

  resultsList: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px"
  },

  resultItem: {
    animation: "fadeInUp 0.6s ease-out backwards"
  },

  loadingContainer: {
    textAlign: "center",
    padding: "80px 24px",
    animation: "fadeIn 0.3s ease-out"
  },

  loadingSpinner: {
    width: "48px",
    height: "48px",
    margin: "0 auto 24px",
    border: "4px solid var(--neutral-200)",
    borderTop: "4px solid var(--primary-blue)",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  },

  loadingText: {
    fontSize: "18px",
    color: "var(--neutral-700)",
    fontWeight: 500
  },

  emptyState: {
    textAlign: "center",
    padding: "100px 24px",
    animation: "fadeInUp 0.6s ease-out"
  },

  emptyIcon: {
    color: "var(--neutral-200)",
    marginBottom: "24px",
    animation: "float 6s ease-in-out infinite"
  },

  emptyTitle: {
    fontFamily: "'Crimson Pro', Georgia, serif",
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--primary-navy)",
    marginBottom: "12px"
  },

  emptyText: {
    fontSize: "16px",
    color: "var(--neutral-700)",
    maxWidth: "480px",
    margin: "0 auto",
    lineHeight: 1.6
  },

  section: {
    padding: "0"
  }
};