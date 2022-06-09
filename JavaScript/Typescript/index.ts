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

function addApendiceALista<T>(array: any[], valor: T) {
        return array.map(item => item + valor);
};

addApendiceALista([1, 2, 3, ], 4); 
 

// ======================================================

// interface IUsuario {
//     id: string;
//     email: string;
// }


// interface IAdmin extends IUsuario {
//     cargo: 'gerente' | 'coordenador' | 'supervisor';
// }

// function redirecione (usuario: IUsuario | IAdmin) {
//     if ('cargo' in usuario) {
//         // redireconar para a área de administração
//     }

//     // redireconar para a área de usuário
// };


// ======================================================

// interface IUsuario {
//     id: string;
//     email: string;
//     cargo?: 'funcionário' | 'gerente' | 'coordenador' | 'supervisor'; //? significa que é um valor opcional
// }



// function redirecione (usuario: IUsuario ) {
//     if(usuario.cargo) {
//          // redireconar(usuario.cargo)
//     }
//         // redireconar para a área de usuário
// }

// =========================================

// interface cachorro {
//     nome: string;
//     idade: number;
//     parquefavorido?: string
// }

// class MeuCachorro implements cachorro {
//     idade;
//     nome;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro('Simba', 14);
