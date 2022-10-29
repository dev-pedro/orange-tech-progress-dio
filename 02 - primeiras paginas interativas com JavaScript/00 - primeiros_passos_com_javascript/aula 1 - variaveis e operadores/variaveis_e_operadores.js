/*
let variavel = 10;//let variável mutável
const pi = 3.14;//const variável imutável
console.log("Hello world!");//console.log imprime no terminal valores que estão dentro dos parentes
*/

const preco_combustivel = 5.20;
const km_por_litro = 5;
const dist_percorida = 580;
const litros_consumidos = dist_percorida / km_por_litro;

const valor_gasto = litros_consumidos * preco_combustivel;

console.log("R$ " + valor_gasto.toFixed(2));



