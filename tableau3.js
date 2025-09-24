let nombres = [4, 7, 2, 9, 10, 3, 6];

console.log("les nombres pair sont : ");
for(i=0;i<nombres.length;i++){
    if(nombres[i]%2 ===0){
        console.log(nombres[i]);
    }
}

let carres =[];
for(i=0;i<nombres.length;i++){
    carres.push(nombres[i]*nombres[i]);
}
console.log(carres);

min=nombres[0];
for(i=0;i<nombres.length;i++){
    if(min>nombres[i]){
        min=nombres[i];
    }
}
console.log("le plus petit nombre est : "+min);

for(i=0;i<nombres.length;i++){
    for(j=i+1;j<nombres.length;j++){
        if(nombres[j]<nombres[i]){
            let temp =nombres[i];
            nombres[i]=nombres[j];
            nombres[j]=temp;
        }
    }
}
console.log(nombres);

nombres.pop();
console.log(nombres);