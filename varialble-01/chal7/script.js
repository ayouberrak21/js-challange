function res(){
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = document.getElementById("input3").value;

    a=Number(a);
    b=Number(b);
    c=Number(c);

    moy=(a*2)+(b*3)+(c*5);
    if(a!="" &&  b!= "" && c!=""){
        document.getElementById("rest").innerHTML=" la moyenne pondérée est : "+moy;
    }else {
        alert("taper tous les nombre ");
    }
}