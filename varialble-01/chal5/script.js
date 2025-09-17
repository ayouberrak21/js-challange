function aficher(){
    let temp=document.getElementById("input1").value; 
    temp = Number(temp);
    if (temp !=""){
        if(temp<0){
            document.getElementById("res").innerHTML=" l'état de l'eau est solide ";
        }else if (temp>= 0 && temp<100){
            document.getElementById("res").innerHTML=" l'état de l'eau est liquide ";       
        }else {
            document.getElementById("res").innerHTML=" l'état de l'eau est gaz ";
        }
    }else {
        alert("taper la tempereture ");
    }
}