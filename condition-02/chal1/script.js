function res(){
let revenu = Number(document.getElementById("input1").value);
let credit = Number(document.getElementById("input2").value);
let duree = Number(document.getElementById("input3").value);

let mes =""
if(revenu>=30000 && credit>=700 && duree<=10){
    mes="eligible ";
}else if(revenu>=30000 && credit>=650 && duree<=15){
    mes ="eligible avec conditions";
}else{
    mes="non eligible";
}
document.getElementById("rest").innerHTML=mes;

}