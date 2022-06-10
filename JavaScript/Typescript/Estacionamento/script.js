"use strict";
(function () {
    var _a;
    const $ = (query) => /*2*/ document.querySelector(query);
    function patio() {
        function ler() { }
        function adicionar(veiculo) {
            var _a;
            const row = document.createElement("tr");
            row.innerHTML = `
                    <td>${veiculo.nome}</td>
                    <td>${veiculo.placa}</td>
                    <td>${veiculo.entrada}</td>
                    <td>
                        <button class="delete" data="placa"${veiculo.placa}>X</button>
                    </td>
                  `;
            (_a = $("#patio")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        function remover() { }
        function salvar() { }
        function render() { }
        return { ler, adicionar, remover, salvar, render };
    }
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        console.log({ nome, placa });
        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date() });
    });
})();
// 1 =função anonima  
/*2 = a const $pega elementos com query, que pode vir de um html ou
um valor nulo*/
/* Seleciona pela regra de css. Usando # e . para acessar os itens da lista */ 
