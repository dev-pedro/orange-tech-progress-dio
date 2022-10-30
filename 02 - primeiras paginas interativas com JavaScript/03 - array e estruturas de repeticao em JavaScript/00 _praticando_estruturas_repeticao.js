// Crie um programa que dado um numero imprima sua tabuada;

const numero = 3;
for (let i = 0; i <= 10; i++) {
    console.log(numero * i);  
}


const tabuada = [];
for (let i = 0; i <= 10; i++) {
    tabuada.push(i * numero);
}
console.log(tabuada);