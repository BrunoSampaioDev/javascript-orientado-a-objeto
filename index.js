/* IMPORTANDO CLASSES DE OUTROS ARQUIVOS */
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

/* Nao esqueca de gerar o package.jason */

/* CRIANDO UM NOVO CLIENTE UTILIZANDO NOSSA CLASSE CLIENTE */
const cliente1 = new Cliente('Ricardo',2342422334);

/* Reaproveitando as classes para crar um novo cliente */
const cliente2 = new Cliente('Alice',32323456534);


/* ADICIONANDO NOVA CONTA CORRENTE */
const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1210);

const ContaCorrenteAlice = new ContaCorrente(0,cliente2, 105);

const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1210);


/* Depositando valores na conta do Ricardo */
contaCorrenteRicardo.depositar(550);
ContaCorrenteAlice.depositar(100)

/* Sacando valor da conta do ricardo */
contaCorrenteRicardo.sacar(50);


/* Transferindo valores de uma conta para outra */
contaCorrenteRicardo.transferir(200, ContaCorrenteAlice);
ContaCorrenteAlice.transferir(50, contaPoupancaRicardo);

console.log(contaCorrenteRicardo);
console.log(ContaCorrenteAlice);


contaPoupancaRicardo.sacar(10);
console.log(contaPoupancaRicardo);
