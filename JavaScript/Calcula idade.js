function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} tera ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}
const pessoa2 = {
    nome: 'Carla',
    idade: 26,
}
const animal = {
    nome: 'Simba',
    idade: 2,
    raca: 'puddle',
};

console.log(calculaIdade.call(pessoa2, 30));