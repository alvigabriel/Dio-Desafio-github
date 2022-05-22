//TRATANDO ERROS
//

function validaArray(arr, num) {
    try { //try verifica se há erros...
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros"); //Parâmetros não enviados

        if(typeof arr !== 'object') //array não é objeto, mostrar o erro no console
            throw new TypeError('O array precisa ser do tipo object');

        if(typeof num !== 'number') //array não é number 
            throw new TypeError('O num precisa ser do tipo number');

        if(arr.length !== num) //tamanho inválido
            throw new RangeError('Tamanho Inválido');

        return arr;
    }

    catch(e) { //catch manipula o erro
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message) ; //mostrar o erro e a mensagem do erro          
        }
        else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message) ;           
        }
        else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message) ;           
        }
        else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

console.log(validaArray([], 'a'));