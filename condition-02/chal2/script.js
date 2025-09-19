function res(){
    let age =Number(document.getElementById("input1").value);
    let type =Number(document.getElementById("input2").value);
    let nbrAcc =Number(document.getElementById("input3").value);
    let prime =10000;

    if(age<=25){
        prime=prime*1.5;
    }else if(age>25 && age<65){
        prime =prime;
    }else {
        prime=prime*1.2;
    }

    if(type===1){
        prime=prime*2;
    }else if(type===2){
        prime=prime*1.2;
    }else if(type===3){
        prime=prime*1.1;
    }else {
        alert("le type de voiture invalid");
    }

    if(nbrAcc>1){
        prime=prime +(prime*0.3);
    }

    document.getElementById("rest").innerHTML="le prime finale est :"+prime
}