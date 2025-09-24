let nombres = [2, 5, 8, 10, 3, 7];

// 1. 
for(nombre of nombres){
    console.log(nombre);
}

// 2. 
max=0;
for(i=0;i<nombres.length;i++){
    if(max<nombres[i]){
        max=nombres[i];
    }
}
console.log("le maximon de tableau est : "+max);

//3.
somme =0;
for(i=0;i<nombres.length;i++){
    somme=somme + nombres[i];
}
console.log("la somme est : "+somme) 

// 4.
nombres.push(12);

// 5.
console.log(nombres)
