const alunos = [ //a constante é um array com propriedades de nome, nota e turma
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B' 
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Bruna',
        nota: 3,
        turma: '2C'
    }
];

function alunosAprovados(arr, media) { /*a função recebe parâmetros de array e média*/
    let aprovados = [] //é criada uma variável com uma array vazia chamada aprovados

    for(let i = 0; i < arr.length; i++) { //estrutura de loop

       const {nota, nome} = arr[i]; /*as propriedades nome e nome da constante são
       igualadas ao objeto array chamado "Alunos" (object destructuring) */

        if(nota >= media) { /* se a nota dor maior ou igual à média, então exiba o nome
        da constante alunos */
            aprovados.push(nome);
        }
    }

    return aprovados //retorne os aprovados
}

console.log(alunosAprovados(alunos, 5));