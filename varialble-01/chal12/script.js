function res() {
    let nbr = document.getElementById("input1").value;

    let inverse = nbr.split('').reverse().join('');
    if (nbr != "") {
        document.getElementById("rest").innerHTML = "le nombre inverse est : " + inverse;
    }else {
            alert(" entrer un nombre !");
}
}
