function transforme(){
    let dist = document.getElementById("input1").value;
    dist = Number(dist);

    yard = dist *1093.61;
    if(dist!=""){
        document.getElementById("transformer").innerHTML= " Yards = "+yard;
    }else {
        alert("taper la distance ");
    }
}