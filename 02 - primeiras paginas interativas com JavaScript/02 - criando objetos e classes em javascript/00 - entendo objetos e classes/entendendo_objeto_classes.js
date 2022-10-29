class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        const year = new Date();
        this.anoDeNascimento = year.getFullYear() - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} eu tenho ${this.idade} anos, minha data de nascimento é ${this.anoDeNascimento}.`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    }else if(p2.idade > p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const pedro = new Pessoa('Pedro', 44);
const alan = new Pessoa('Alan', 29);
pedro.descrever();
alan.descrever();

compararPessoas(pedro, alan);

