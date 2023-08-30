
const numeros = [false, true, 0, 1, 3, 0, 6, 9,0,0,0, 15 ,48, 99, 150];


for(let i = 0; i<numeros.length-1; i++){

    for(let j = 0; j<numeros.length-1; j++){
        if(numeros[j] === 0){
            let aux = numeros[j]
            numeros[j] = numeros[j+1]
            numeros[j+1] = aux; 
        }
    }
}
console.log(numeros);