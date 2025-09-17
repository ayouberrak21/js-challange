function transforme(){
    let km=document.getElementById("input1").value;
    km = Number(km);

    res=km*0.27778;
    if(km !=""){
        document.getElementById("result").innerHTML=" m/s = "+res
    }else {
        alert("taper la vitesse ");
    }
}