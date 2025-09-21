function res(){
    let totalJoursConje = Number(document.getElementById("input1").value);
    let joursCongeUtilise = Number(document.getElementById("input2").value);
    let statutEmpl = Number(document.getElementById("input3").value);
    let joursrestant =0;

    if(statutEmpl===0){
        joursrestant=(totalJoursConje/2)-joursCongeUtilise;
    }else if(statutEmpl===1){
        joursrestant=totalJoursConje-joursCongeUtilise;       
    }else {
        alert("le choix incorect");
    }

    if(joursCongeUtilise>totalJoursConje){
        alert("tu a depasee les jours accordes");
    }

    document.getElementById("rest").innerHTML=`les jours que vous reste de conest est : ${joursrestant}`;

}