interface veiculo {
    nome: string;
    placa: string;
    entrada: Date;
}

(function () {   /*1*/
   const $ = (query: string): HTMLInputElement | null => /*2*/
          document.querySelector(query);

          function patio() {
              function ler(){}

              function adicionar(veiculo: veiculo){
                  const row =document.createElement("tr");

                  row.innerHTML = `
                    <td>${veiculo.nome}</td>
                    <td>${veiculo.placa}</td>
                    <td>${veiculo.entrada}</td>
                    <td>
                        <button class="delete" data="placa"${veiculo.placa}>X</button>
                    </td>
                  `;

                  $("#patio")?.appendChild(row);
              }

              function remover(){}

              function salvar(){}

              function render(){}

              return{ler, adicionar, remover, salvar, render}
          }

    $("#cadastrar")?.addEventListener("click", () => {
       const nome = $("#nome")?.value; 
       const placa = $("#placa")?.value; 
        console.log({nome, placa})
       if (!nome || !placa) {
           alert("Os campos nome e placa são obrigatórios");
           return;
       }
       patio().adicionar({nome, placa, entrada: new Date()})
    });
})(); 
// 1 =função anonima  
/*2 = a const $pega elementos com query, que pode vir de um html ou 
um valor nulo*/
/* Seleciona pela regra de css. Usando # e . para acessar os itens da lista */