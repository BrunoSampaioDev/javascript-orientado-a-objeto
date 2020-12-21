export class Conta{

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    /* acessando um propriedade privada e defindo as regras para protejer a mesma */
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    };

    get cliente(){
        return this._cliente;
    };

    /* como o js nao possui sintax para atributos privados a convesao da comunidade e usar _antes do atributo para indicar que o mesmo e um atributo privado */

    get saldo(){
        return this._saldo;
    };


    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor,taxa);
    };

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
         
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
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