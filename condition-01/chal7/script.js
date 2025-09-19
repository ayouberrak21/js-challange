function res(){
    let note = Number(document.getElementById("input1").value);

if(note>=0 &&note<10){
    document.getElementById("rest").innerHTML="il est recalee ";
}else if(note>=10 &&note<12){
    document.getElementById("rest").innerHTML="il a mention passable ";
}else if(note>=12 && note<14){
    document.getElementById("rest").innerHTML="il a mention assez bien  ";
}else if(note>=14 && note<16){
    document.getElementById("rest").innerHTML="il a mention bien  ";
}else if(note>=16 && note<20){
    document.getElementById("rest").innerHTML="il a mention tres bien  ";
}else {
        document.getElementById("rest").innerHTML="la note est invalid ";
}
}