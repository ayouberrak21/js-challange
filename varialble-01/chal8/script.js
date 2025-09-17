function res(){
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = document.getElementById("input3").value;

    a=Number(a);
    b=Number(b);
    c=Number(c);

    mul=a*b*c;
    moy=Math.pow(mul,3);

    if(a!="" && b!="" &&c!=""){
        document.getElementById("rest").innerHTML="la moyonne geometrique est : "+moy;
    }else {
        alert("entrer tous les nombre ");
    }
}