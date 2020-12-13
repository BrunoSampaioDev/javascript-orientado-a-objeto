/* CRIANDO UMA CLASSE E EXPOSTANDO PARA UTILIZA-LA EM OUTROS ARQUIVOS*/
export class Cliente {
    /* dentro da classe, definimos os atributos */
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    };

    /* Metodo construto */
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    };
};

/* A classe e um molde para definir o que queremos criar,
o objeto/instancia e o que criamos a partir da classe no nosso caso o cliente ricardo e um objeto e a alice outro objeto */