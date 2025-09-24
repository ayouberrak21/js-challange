let nombres = [3, 12, 7, 20, 3, 8, 15, 2, 9, 18];
let somme =0;
let moy =0;
for(i=0;i<nombres.length;i++){
    somme = somme +nombres[i];
}
moy=somme/nombres.length;
console.log("la moyenne est : "+moy);
console.log("les nombres superieur a la moyene est : ");
for(i=0;i<nombres.length;i++){
    if(nombres[i]>moy){
        console.log(nombres[i]);
    }
}

let table=[];

for(i=0;i<nombres.length;i++){
    if(nombres[i] %3 === 0){
        table.push(nombres[i]);
    }
}
console.log(table);

for(i=0;i<nombres.length;i++){
    if(nombres[i]<10){
        nombres[i]=nombres[i]*2;
    }
}
console.log(nombres);

for(i=0;i<nombres.length;i++){
    for(j=i+1;j<nombres.length;j++){
        if(nombres[j]>nombres[i]){
            let temp =nombres[i];
            nombres[i]=nombres[j];
            nombres[j]=temp;
            }
        }
    } 
console.log(nombres);
