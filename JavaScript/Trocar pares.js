

function subsPares(array) { //a função recebe um array
    if(!array.length) return -1;
    if(!array) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!!")/* se o elemento dentro do índice do array
            for igual a zero, mostre a mensagem acima */
        } else if (array[i] % 2 === 0){ 
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0; /* caso ele seja par, atribui-se zero */             
        } 
    }
    return array;
}

let arr = []
console.log(subsPares(arr));