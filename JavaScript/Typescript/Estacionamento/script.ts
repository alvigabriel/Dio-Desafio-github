interface veiculo {
    nome: string;
    placa: string;
    entrada: Date | string;
}

(function () {   /*1*/
   const $ = (query: string): HTMLInputElement | null => /*2*/
          document.querySelector(query);

          function calcTempo(mil: number){
              const min = Math.floor(mil / 60000);
              const sec =  Math.floor((mil % 60000) / 1000);

              return `${min}m e ${sec}s`;
          };

          function patio() {
              function ler(): veiculo[] {
                  return localStorage.patio ? JSON.parse(localStorage.patio) : [];
              }

              function salvar(veiculo: veiculo[]){
                  localStorage.setItem("patio", JSON.stringify(veiculo));
              }

              function adicionar(veiculo: veiculo, salva?: boolean){
                  const row =document.createElement("tr");

                  row.innerHTML = `
                    <td>${veiculo.nome}</td>
                    <td>${veiculo.placa}</td>
                    <td>${veiculo.entrada}</td>
                    <td>
                        <button class="delete" data="placa"${veiculo.placa}>X</button>
                    </td>
                  `;

                  row.querySelector(".delete")?.addEventListener("click", function(){
                      remover(this.dataset.placa)
                  });

                  $("#patio")?.appendChild(row);

                  if(salva) salvar([...ler(), veiculo])
              }

              function remover(placa: string){
                  const {entrada, nome} = ler().find(
                  (veiculo) => veiculo.placa === placa
                  );

                  const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());

                  if(!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)) return;

                salvar(ler().filter(veiculo => veiculo.placa !==placa));  
                render();
              }

              

              function render(){
                $("#patio")!.innerHTML = "";
                const patio = ler();

                if (patio.length) {
                  patio.forEach(veiculo =>adicionar(veiculo));
                }
              }

              return{ler, adicionar, remover, salvar, render};
          }
          patio().render();

    $("#cadastrar")?.addEventListener("click", () => {
       const nome = $("#nome")?.value; 
       const placa = $("#placa")?.value; 
        console.log({nome, placa})
       if (!nome || !placa) {
           alert("Os campos nome e placa são obrigatórios");
           return;
       }
       patio().adicionar({nome, placa, entrada: new Date().toISOString()}, true);
    });
})(); 
// 1 =função anonima  
/*2 = a const $pega elementos com query, que pode vir de um html ou 
um valor nulo*/
/* Seleciona pela regra de css. Usando # e . para acessar os itens da lista */


//OBS: PAROU NA AULA 3, 11MIN