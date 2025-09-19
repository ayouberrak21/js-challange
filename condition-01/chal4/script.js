function res(){
    let nbr=Number(document.getElementById("input1").value);
    let choix=Number(document.getElementById("choix").value);
    let resultat=0;
    switch(choix){
        case 1 :
            resultat = nbr*12;
            document.getElementById("rest").innerHTML= nbr + " en mois est "+resultat +" mois";
            break;
        case 2 :
            resultat = nbr*12*30;
            document.getElementById("rest").innerHTML= nbr + " en jours est "+resultat +" jours";
            break;
        case 3 :
            resultat = nbr*12*30*24;
            document.getElementById("rest").innerHTML= nbr + " en heures est "+resultat +" heures";
            break;
        case 4 :
            resultat = nbr*12*30*24*60;
            document.getElementById("rest").innerHTML= nbr + " en minutes est "+resultat +" minutes";
            break;
        case 5 :
            resultat = nbr*12*30*24*60*60;
            document.getElementById("rest").innerHTML= nbr + " en secondes est "+resultat +" secondes";
            break;
        default:
            document.getElementById("rest").innerHTML =" taper un nombre";
    }

}