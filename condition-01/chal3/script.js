function res(){
    let nbr1=document.getElementById("input1").value;
    let nbr2=document.getElementById("input2").value;

    nbr1=Number(nbr1);
    nbr2=Number(nbr2);

    if(nbr1===nbr2){
        sum=Math.pow((nbr1+nbr2),3);
        document.getElementById("rest").innerHTML="le triple de la somme est :"+sum;
    }else {
        som=nbr1+nbr2;
        document.getElementById("rest").innerHTML="la somme est :"+som;
    }
}