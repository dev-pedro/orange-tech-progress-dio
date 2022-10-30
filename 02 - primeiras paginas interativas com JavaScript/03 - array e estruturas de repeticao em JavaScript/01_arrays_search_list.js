// Crie um programa que seja capaz de percorrer uma lista de numeros e imprimir apenas numeros pares;

const numero = 13;//numero para criar a tabuada
const tabuada = [];

for (let i = 0; i <= 10; i++) {// laço de repetição para preencher a lista da tabuada
    tabuada.push(i * numero);
}
console.log(tabuada);// exibe a tabuada

let listaPar = [];//lista vazia
for (let i = 0; i <= tabuada.length; i++) {// laço de repetição para preencher a lista com numeros pares
    if (tabuada[i] % 2 === 0) {
        listaPar.push(tabuada[i]);
    }
}
console.log(listaPar)