function res(){
    let nbr=document.getElementById("input1").value;
    nbr=Number(nbr);

    if(nbr%2===0){
        document.getElementById("rest").innerHTML="le nombre est paire";
    }else{
        document.getElementById("rest").innerHTML="le nombre est impaire";
    }
}
