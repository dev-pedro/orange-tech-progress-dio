

const {gets, print} = require('./gets_entradas');

let maiorValor = 0;
const lista_numeros = gets();

for (let i = 0; i < lista_numeros.length; i++) {
    if (lista_numeros[i] > maiorValor) {
        maiorValor = lista_numeros[i];
    }
}


console.log(maiorValor);