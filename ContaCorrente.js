
import { Conta } from "./Conta.js";

/* Classe conta corrente  */
export class ContaCorrente extends Conta{

    static numeroDeContas = 0; /* Atributo estatico para contar oa quantidade e contas*/
   
    constructor(saldoInicial,cliente, agencia){
        super(saldoInicial,cliente,agencia);
        
        ContaCorrente.numeroDeContas += 1;
        
    };

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor,taxa);
    };

};