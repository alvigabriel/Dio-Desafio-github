const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]; //constante array

function valoresUnicos(arr){ //iniciada função com propriedade array
    const mySet = new Set(arr); /*criada uma função e igualada a um Set
     com propriedade array*/

    return [...mySet]; /* retorna o set e usa-se o spread pra 
    colocar o set num array*/
}

console.log(valoresUnicos(meuArray));