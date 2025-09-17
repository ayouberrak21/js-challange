function transforme(){
    let temp = document.getElementById("input1").value;
    temp = Number(temp);

    trans = temp + 273.15;
    if(temp!=""){
        document.getElementById("transformer").innerHTML= " k = "+trans;
    }else {
        alert("taper la temperature ");
    }
}