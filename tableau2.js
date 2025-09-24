let nombres = [5, 12, 7, 20, 3, 8, 15, 2];

console.log("les nombres superieurs a 10 sont : ");
for(i=0;i<nombres.length;i++){
    if(nombres[i]>10){
        console.log(nombres[i]);
    }
}

let impaires=[];
for(i=0;i<nombres.length;i++){
    if(nombres[i] %2 !=0){
        impaires.push(nombres[i]);
    }
}
console.log(impaires);

let somme =0;
let moy =0;
for(i=0;i<nombres.length;i++){
    somme = somme + nombres[i];
}
moy = somme/nombres.length;
console.log("la moyenne de tableau est : "+moy);

for(i=0;i<nombres.length;i++){
    if(nombres[i] %2 === 0){
        nombres[i]=0;
    }
}
console.log(nombres)