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

const input = document.getElementById('input') as HTMLInputElement; 


input.addEventListener('input', (event) => {

    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});