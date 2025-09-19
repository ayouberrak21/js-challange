 function res() {
      let date = document.getElementById("input1").value.trim();

      let date1 = date.split("/");

      if (date1.length !== 3) {
        document.getElementById("rest").innerText = "date invalide ";
        return;
      }
      let jour = date1[0];         
      let mois = parseInt(date[1]); 
      let annee = date1[2]; 
      let moisNom = ["","janvier", "fevrier", "mars", "avril", "mai", "juin","juillet", "aout", "septembre", "octobre", "novembre", "decembre" ];

      if (mois<1 || mois>12) {
        document.getElementById("rest").innerText = "mois invalide";
        return;
      }

      let dateF = jour + "-" + moisNom[mois] + "-" + annee;

      document.getElementById("rest").innerText = dateF;
    }