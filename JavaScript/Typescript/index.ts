// // interface IAnimal {
// //     nome: string;
// //     tipo: 'terrestre' | 'aquático';
// //     executarRugido(alturaEmDecibeis: number): void;
// // }

// type IAnimal = {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     domestico: boolean;
// }

// interface IFelinos extends IAnimal  {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico = IFelinos | ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: "medio",
//     tipo: "terrestre",
    
// }
    


// // const felino: IFelinos = {
// //     nome: 'Leão',
// //     tipo: "terrestre",
// //     visaoNoturna: true,
// //     executarRugido: (alturaEmDecibeis) =>(`${alturaEmDecibeis}db`)
// // }



// const input = document.getElementById('input') as HTMLInputElement; 


// input.addEventListener('input', (event) => {

//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });


/*Generic types */

// function addApendiceALista<T>(array: T[], valor: T) {
//         return array.map(item => item + valor);
// };

// addApendiceALista([1, 2, 3, ], 4); 

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if('cargo in usuario') {
        // redirecionar para a area de administração
    }

    // redirecionar para a area de usuario
}