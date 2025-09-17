function res(){
    let lon=document.getElementById("input1").value;
    let lar=document.getElementById("input2").value;

    lon = Number(lon);
    lar=Number(lar);

    sur=lon*lar;

    if(lon!="" && lar!=""){
        document.getElementById("rest").innerHTML="la surface de rectangle est "+sur;
    }else {
        alert("entre la longueur et la largeur ");
    }
}