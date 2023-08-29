const arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
    const cantidadElementos = arr.length;
    let positivos = [],
        negativos = [],
        ceros = [];
        
        for(let i = 0; i<arr.length; i++){
            if(arr[i] > 0) {
                positivos.push(arr[i]);
            }
            if(arr[i] < 0){
                negativos.push(arr[i]);
            }
            if(arr[i] === 0){
                ceros.push(arr[i]);
            }
        }

        console.log((positivos.length / cantidadElementos).toFixed(6));
        console.log((negativos.length / cantidadElementos).toFixed(6));
        console.log((ceros.length / cantidadElementos).toFixed(6));

}
plusMinus(arr);