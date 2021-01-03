/* CRIANDO UMA CLASSE E EXPOSTANDO PARA UTILIZA-LA EM OUTROS ARQUIVOS*/
export class Cliente {
    /* dentro da classe, definimos os atributos */
    get cpf(){
        return this._cpf;
    };

    /* Metodo construto */
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    };

    autenticar(){
        return true;
    }
};

/* A classe e um molde para definir o que queremos criar,
o objeto/instancia e o que criamos a partir da classe no nosso caso o cliente ricardo e um objeto e a alice outro objeto */