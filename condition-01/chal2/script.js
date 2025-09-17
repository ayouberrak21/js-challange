function res(){
    let c=document.getElementById("input1").value;

    switch (c){
        case 'a':
        case 'e':
        case 'u':
        case 'o':
        case 'i':
            document.getElementById("rest").innerHTML="la caractere est une voyelle";
            break;
        default :
            document.getElementById("rest").innerHTML="la caractere est un non ";
    }
}