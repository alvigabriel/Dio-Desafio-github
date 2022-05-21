//REDUCE
//Somar todos os números do Array

function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    })
}

const arr = [1, 2];

console.log('Soma: ', somaNumeros(arr));

//Lista de preços, saldos

console.log('Lista')

const lista = [
    {
        name: 'sabão em pó',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    }
];

const saldoDisponível = 100

function calculaSaldo(saldoDisponível, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponível);
}

console.log(calculaSaldo(saldoDisponível, lista));