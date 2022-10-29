/*
1 - Crie uma classe para representar carros
Os carros possuem uma modelo, uma cor e um gasto médio de combustivel por kilômetro rodado.
Crie um método que dado a quantidade de quilo=ômetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    modelo;
    cor;
    KmPorLitro;
    kmRodado;
    preco_combustivel;


    constructor(modelo, cor, KmPorLitro, kmRodado, preco_combustivel){
        this.modelo = modelo;
        this.cor = cor;
        this.KmPorLitro = KmPorLitro;
        this.kmRodado = kmRodado;
        this.preco_combustivel = preco_combustivel;
    }

    consumoMedio(){
        const consumo = (this.kmRodado / this.KmPorLitro) * this.preco_combustivel;
        console.log(`O ${this.modelo} ${this.cor} está fazendo um consumo de R$${consumo.toFixed(2)} \n pelos Km ${this.kmRodado} rodados.`);
        
    }
}

const celta = new Carro('Celta','Prata', 11, 510, 5.40);
console.log(celta);
celta.consumoMedio();

