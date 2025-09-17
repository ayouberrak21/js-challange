function afficher(){
    let non = document.getElementById("input1").value;
    let prenon = document.getElementById("input2").value;
    let age = document.getElementById("input3").value;
    let sexe = document.getElementById("input4").value;
    let email = document.getElementById("input5").value;


    if(non !="" && prenon!="" && age!="" && sexe!="" && email!=""){
        document.getElementById("afficherr").innerHTML = "mon non est  " + non + "mon prenon est " + prenon + ", j ai "+age+"<br>Je suis un/e "+sexe +"<br>Mon adresse email est "+email;
    }else {
        alert("taper tous les information ");
    }

}

