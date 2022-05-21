//FILTER
//Filtra pares
function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}
//Filtra Ímpares
function filtraÍmpares(arr) {
    return arr.filter(callback2)
}


function callback2(item) {
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 40, 2, 4];

console.log(filtraPares(meuArray));
console.log(filtraÍmpares(meuArray));