class ContaBancaria { //classe contendo os parâmetros
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia; //se refere ao objeto da classe
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    //getter e setter, para manipular os parâmetros
    get saldo() {
        return this._saldo; // get e set exige o underline
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor){ //sacar recebe um valor true ou false
        if (valor > this._saldo) {
            return "Saldo Insuficiente";
        }
        
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }  

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero,);
        this.tipo = 'poupança';
    }  
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }  

    sacar(valor) {
        if (valor > 500) {
            return "Contas Universitárias só são permitidas o saque de até 500 reais"
        }

        this._saldo = this._saldo - valor;
    }
}