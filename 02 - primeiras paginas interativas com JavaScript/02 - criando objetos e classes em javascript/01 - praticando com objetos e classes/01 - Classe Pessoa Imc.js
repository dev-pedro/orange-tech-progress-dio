/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso, e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
Instancie uma pessoa chamada Pedro que tenha 70kg de peso e 1,75 de altura e peça ao Pedro para
dizer o valor do seu IMC.
*/

class Pessoa{
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcularIMC();
    }

    calcularIMC(){
        const imc = this.peso / (this.altura * this.altura);
        console.log(`${this.nome} o seu IMC é ${imc.toFixed(2)}.`);
        return imc;
    }

    infoImc (){
        let mensagem;
        if(this.imc < 18.5){
            mensagem = "Abaixo do peso";
        }else if(this.imc >= 18.8 && this.imc < 25){
            mensagem = "Peso normal";
        }else if(this.imc >= 25 && this.imc < 30){
            mensagem = "Acima do peso";
        }else if(this.imc >= 30 && this.imc < 40){
            mensagem = "Obeso";
        }else {
            mensagem = "Obesidade grave";
        }
    
        console.log(`${this.nome} o seu IMC é ${this.imc.toFixed(2)}, você está: ${mensagem}`);
        return mensagem + ': seu imc é ' + this.imc.toFixed(2)
    }
        
}

const pedro = new Pessoa('Pedro', 72, 1.72);
console.log(pedro);
pedro.calcularIMC();
pedro.infoImc();