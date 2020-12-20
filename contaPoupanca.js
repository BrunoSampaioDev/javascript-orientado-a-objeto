export class ContaPoupanca {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    };

    /* Criando uma function (metodo) dentro da classe para depositar valores nas contas*/
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return valor;
        }

    };

    /* Criando uma function (metodo) dentro da classe para transferir valores das contas*/
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };
}