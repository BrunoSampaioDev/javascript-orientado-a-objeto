import { Cliente } from "./Cliente.js";

/* Classe conta corrente  */
export class ContaCorrente {
    static numeroDeContas = 0; /* Atributo estatico para contar oa quantidade e contas*/
    agencia;
    _cliente;

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

    /* Metodo construtor desta classe */
    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente; /* aqui estamos usando nosso acesso do get */
        this._saldo = 0; 
        ContaCorrente.numeroDeContas += 1;/* chamando o atributo estatico que vai servir de contador para nossas contas */
    };


    /* Criando uma function (metodo) dentro da classe para sacar valores das contas*/
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
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };
};