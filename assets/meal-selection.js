// Récupérer les paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);
const date = urlParams.get('date');
const duration = urlParams.get('duration');
const meal = urlParams.get('meal');

// Afficher les informations de réservation
document.getElementById("reservation-date").textContent = date;
document.getElementById("reservation-duration").textContent = duration;
document.getElementById("meal-name").textContent = meal || "Aucun repas sélectionné";

// Définir les prix des repas
const meals = {
    "salad": {
        name: "Salade César",
        price_per_person: 5.00
    },
    "pasta": {
        name: "Pâtes Bolognaise",
        price_per_person: 7.50
    },
    "sushi": {
        name: "Sushi Variés",
        price_per_person: 12.00
    }
};

// Fonction pour calculer le prix total
function calculatePrice() {
    const mealId = document.getElementById("meal-selection").value;
    const numPeople = document.getElementById("people-count").value;

    if (numPeople && mealId) {
        const price = meals[mealId].price_per_person * numPeople;
        document.getElementById("total-price").innerText = `${price.toFixed(2)} €`;
    }
}

// Écouter les événements de modification
document.getElementById("meal-selection").addEventListener("change", calculatePrice);
document.getElementById("people-count").addEventListener("input", calculatePrice);

// Gérer la soumission du formulaire
document.querySelector("button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault();

    const mealId = document.getElementById("meal-selection").value;
    const numPeople = document.getElementById("people-count").value;

    if (mealId && numPeople) {
        alert(`Réservation confirmée pour ${numPeople} personnes. Repas : ${meals[mealId].name} - Prix total : ${document.getElementById("total-price").innerText}`);
        // Logique pour traiter le paiement...
    } else {
        alert("Veuillez sélectionner un repas et le nombre de personnes.");
    }
});
