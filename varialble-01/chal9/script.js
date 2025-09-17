function res(){

    let x1=document.getElementById("inputx1").value;
    let y1=document.getElementById("inputy1").value;
    let z1=document.getElementById("inputz1").value;

    let x2=document.getElementById("inputx2").value;
    let y2=document.getElementById("inputy2").value;
    let z2=document.getElementById("inputz2").value;

    x1=Number(x1);
    y1=Number(y1);
    z1=Number(z1);

    x2=Number(x2);
    y2=Number(y2);
    z2=Number(z2);

    
    x12=Math.pow((x2-x1),2);
    y12=Math.pow((y2-y1),2);
    z12=Math.pow((z2-z1),2);

    dist = Math.sqrt(x12+y12+z12);
    
    if( x1!="" && x2!="" && y1!="" && y2!="" && z1!="" && z2!=""){
        document.getElementById("rest").innerHTML= " la distance entre les deux points : "+ dist;
    } else {
        alert("tous le champs sont obligatoires ");
    }
}