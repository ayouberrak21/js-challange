function afficherSection(id) {
    let sections = document.querySelectorAll("#container > div");
    sections.forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "block";
}
window.onload = function() {
    afficherSection("section1");
};let livres = [];

    function ajouterLivre() {
        let titre = document.getElementById("titre").value;
        let auteur = document.getElementById("auteur").value;
        let prix = Number(document.getElementById("prix").value);
        let quantite = Number(document.getElementById("quantite").value);

        if(titre !== "" && auteur !== "" && prix !== "" && quantite !== "") {
            let nouveaulivre = { titre, auteur, prix, quantite };
            livres.push(nouveaulivre);
            document.getElementById("messageAjout").innerHTML = "Livre ajouté avec succès";
        } else {
            document.getElementById("messageAjout").innerHTML = "Tous les champs sont obligatoires";
        }
    }

    function afficherLivres() {
        if(livres.length === 0){
            document.getElementById("livreAfficher").innerHTML = " Il n'y a aucun livre";
            return;
        }

        let html = "<table border='1' cellpadding='5'>";
        html += "<tr><th>Titre</th><th>Auteur</th><th>Prix</th><th>Quantité</th></tr>";

        for(let i = 0; i < livres.length; i++){
            html += "<tr><td>" + livres[i].titre + 
                    "</td><td>" + livres[i].auteur + 
                    "</td><td>" + livres[i].prix + 
                    "</td><td>" + livres[i].quantite + "</td></tr>";
        }

        html += "</table>";
        document.getElementById("livreAfficher").innerHTML = html;
    }

    function rechercherLivre() {
    let titreM = document.getElementById("rechercheTitre").value.toLowerCase();
        let html = "";
        let trouve = false;

        for(let i = 0; i < livres.length; i++){
            if(titreM === livres[i].titre.toLowerCase()){
                html = "<table border='1' cellpadding='5'>";
                html += "<tr><th>Titre</th><th>Auteur</th><th>Prix</th><th>Quantité</th></tr>";
                html += "<tr><td>" + livres[i].titre +
                        "</td><td>" + livres[i].auteur +
                        "</td><td>" + livres[i].prix +
                        "</td><td>" + livres[i].quantite + "</td></tr>";
                html += "</table>";
                trouve = true;
                break;
            }
        }

        if(!trouve){
            html = " Aucun livre trouvé avec ce titre.";
        }

        document.getElementById("resultatRecherche").innerHTML = html;
    }

function mettreAJourQuantite(){
    let titreM = document.getElementById("titreModif").value.toLowerCase();
    let nouvelleQuantite = Number(document.getElementById("nouvelleQuantite").value);
    let trouve = false;
    for(let i = 0; i < livres.length; i++){
        if(titreM === livres[i].titre.toLowerCase()){
            livres[i].quantite = nouvelleQuantite;
            document.getElementById("messageModifier").innerHTML = " Quantité mise à jour avec succès";
            trouve = true;
            break;
        }
    }

    if(!trouve){
        document.getElementById("messageModifier").innerHTML = " Aucun livre trouvé avec ce titre.";
    }
}

function supprimerLivre(){
    let titreM = document.getElementById("titreSupprimer").value.toLowerCase();
    let trouve = false;
    for(let i = 0; i < livres.length; i++){
        if(titreM === livres[i].titre.toLowerCase()){
            livres.splice(i, 1);
            document.getElementById("messageSupprimer").innerHTML = " Livre supprimé avec succès";
            trouve = true;
            break;
        }
    }
    if(!trouve){
        document.getElementById("messageSupprimer").innerHTML = " Aucun livre trouvé avec ce titre.";
    }
}
function nombreTotalLivres(){
    let total = livres.reduce((acc, livre) => acc + livre.quantite, 0);
    document.getElementById("totalLivres").innerHTML = "Le nombre total de livres en stock est : " + total;

}