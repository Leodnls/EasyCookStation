// Prix par personne pour chaque repas
const mealPrices = {
    pasta: 1.55,  // Pâtes à la sauce tomate
    salad: 1.60,  // Salade de riz et légumes
    omelette: 1.70,  // Omelette aux légumes
    tartine: 2.30,  // Tartines de fromage et avocat
    wrap: 3.85  // Wrap au poulet et légumes
};

// Fonction pour afficher ou cacher les options de repas en fonction de la sélection
document.getElementById("mealCheckbox").addEventListener("change", function() {
    const mealOptions = document.getElementById("meal-options");
    if (this.checked) {
        mealOptions.style.display = "block";
    } else {
        mealOptions.style.display = "none";
        document.getElementById("meal").value = ''; // Reset meal selection
        document.getElementById("peopleCount").value = ''; // Reset people count
        document.getElementById("total-price").innerText = "Prix total : 0.00 €";
    }
});

// Fonction pour calculer et afficher le prix total
function updatePrice() {
    const meal = document.getElementById("meal").value;
    const peopleCount = parseInt(document.getElementById("peopleCount").value, 10);

    if (meal && peopleCount) {
        const pricePerPerson = mealPrices[meal];
        const totalPrice = pricePerPerson * peopleCount;
        document.getElementById("total-price").innerText = `Prix total : ${totalPrice.toFixed(2)} €`;
    } else {
        document.getElementById("total-price").innerText = "Prix total : 0.00 €";
    }
}

// Écouter le changement de sélection du repas ou du nombre de personnes
document.getElementById("meal").addEventListener("change", updatePrice);
document.getElementById("peopleCount").addEventListener("input", updatePrice);

// Validation du formulaire de réservation et redirection vers la section paiement
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const duration = document.getElementById("duration").value;
    const meal = document.getElementById("meal").value;
    const peopleCount = parseInt(document.getElementById("peopleCount").value, 10);

    if (date && duration && (mealCheckbox.checked && meal && peopleCount)) {
        const summaryText = `Réservation confirmée pour le ${new Date(date).toLocaleString()} (${duration} heures).`;
        document.getElementById("summary").innerText = summaryText + ` Repas : ${meal} pour ${peopleCount} personnes.`;
        
        document.getElementById("payment-section").style.display = "block";
    } else {
        alert("Veuillez remplir tous les champs requis.");
    }
});
