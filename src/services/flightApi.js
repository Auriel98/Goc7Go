import data from "../mockApi/flights.json";

export const searchFlights = (filters) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🔍 Filtres reçus:", filters);
      console.log("📦 Données brutes:", data);
      
      const flights = Array.isArray(data) ? data : data.flights || [];
      console.log("✈️ Nombre total de vols:", flights.length);

      const results = flights.filter(f => {
        if (!f) return false;

        // Filtrage par aéroport de départ
        if (filters.from && f.outbound?.from?.code !== filters.from) {
          console.log(`❌ Vol ${f.id} filtré: départ ${f.outbound?.from?.code} !== ${filters.from}`);
          return false;
        }
        
        // Filtrage par aéroport d'arrivée
        if (filters.to && f.outbound?.to?.code !== filters.to) {
          console.log(`❌ Vol ${f.id} filtré: arrivée ${f.outbound?.to?.code} !== ${filters.to}`);
          return false;
        }
        
        // Filtrage par date de départ
        if (filters.departureDate && f.outbound?.date !== filters.departureDate) {
          console.log(`❌ Vol ${f.id} filtré: date départ ${f.outbound?.date} !== ${filters.departureDate}`);
          return false;
        }
        
        // Filtrage par date de retour (FLEXIBLE - accepte les dates >= à la date demandée)
        if (filters.returnDate && f.return?.date) {
          // Convertir les dates en objets Date pour comparaison
          const requestedReturnDate = new Date(filters.returnDate);
          const flightReturnDate = new Date(f.return.date);
          
          // Accepter les vols qui retournent à la date demandée ou dans les 7 jours suivants
          const daysDiff = Math.floor((flightReturnDate - requestedReturnDate) / (1000 * 60 * 60 * 24));
          
          if (daysDiff < 0 || daysDiff > 7) {
            console.log(`❌ Vol ${f.id} filtré: date retour ${f.return.date} trop éloignée de ${filters.returnDate} (${daysDiff} jours)`);
            return false;
          }
        }
        
        // Filtrage par prix maximum
        if (filters.maxPrice && f.price?.total > Number(filters.maxPrice)) {
          console.log(`❌ Vol ${f.id} filtré: prix ${f.price?.total} > ${filters.maxPrice}`);
          return false;
        }
        
        // Filtrage par nombre d'escales
        if (filters.stops !== "" && f.outbound?.stops !== Number(filters.stops)) {
          console.log(`❌ Vol ${f.id} filtré: escales ${f.outbound?.stops} !== ${filters.stops}`);
          return false;
        }
        
        // Filtrage par classe de cabine
        if (filters.cabinClass && f.cabinClass?.toLowerCase() !== filters.cabinClass.toLowerCase()) {
          console.log(`❌ Vol ${f.id} filtré: classe ${f.cabinClass} !== ${filters.cabinClass}`);
          return false;
        }
        
        // Filtrage par remboursabilité
        if (filters.refundable !== "" && f.refundable !== (filters.refundable === "true")) {
          console.log(`❌ Vol ${f.id} filtré: remboursable ${f.refundable} !== ${filters.refundable}`);
          return false;
        }

        // Filtrage par compagnie aérienne (optionnel)
        if (filters.airline && f.airline?.name !== filters.airline) {
          console.log(`❌ Vol ${f.id} filtré: compagnie ${f.airline?.name} !== ${filters.airline}`);
          return false;
        }

        console.log(`✅ Vol ${f.id} accepté!`);
        return true;
      });

      console.log("📊 Résultats finaux:", results.length, "vols trouvés");
      console.log("📋 Détails des vols:", results);
      resolve(results);
    }, 700);
  });
};