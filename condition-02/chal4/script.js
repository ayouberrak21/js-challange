function res(){
    let score=Number(document.getElementById("input1").value);
    let ancien=Number(document.getElementById("input2").value);
    let recomponses=Number(document.getElementById("input3").value);

    let mes="";

    if(score>=90 && ancien>=5){
        mes="exellente";
    }else if(score>=75 && ancien>=3){
        mes="bonne";
    }else if(score>=50 && ancien<3){
        mes="satisfaisante";
    }else {
        mes="insuffisante";
    }

    let message="";

    if(recomponses===1){
        message= mes +" avec 10% de recompanses ";
    }else if(recomponses===2){
        message= mes +" avec 20% de recompanses ";
    }else if(recomponses===0){
        message= mes;
    }else {
        alert("le choix de recomaponses est invalid");
    }

    document.getElementById("rest").innerHTML=message;
}