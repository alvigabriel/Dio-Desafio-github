//função que verifica palíndromo - solução 2

function verificaP2(string){
    if (!string) return "Adicionar palavra";

        //se a string existir, pedir um "for"

        for(let i = 0; 1< string.length /2; i++)  {

        }  /* começa a string no índice no 0(i = 0), enquanto o 0 
            for menor que o comprimento da string(1 <string.length;) incrementar(i++). Até atingir o tamanho 
            do length. A string é verificada dividida por dois pois não é necessário
            ler ela de vez, e sim metade  */

            if(string[i] !== string[string.length - 1 - i]){
                return false; /* se o elemento que está dentro do índice não for igual
                ao último(string.length -1) */
            }
    return true;      

}

console.log(verificaP2("abba"));

