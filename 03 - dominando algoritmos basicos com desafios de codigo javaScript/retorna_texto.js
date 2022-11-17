// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = 3;
console.log(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(num){
    let text;
    if(num % 3 === 0){
        text = "Fizz";
    }else if(num % 5 === 0 & num % 3 === 0){
        text = "FizzBuzz";
    }else if(num % 5 === 0){
        text = "Buzz";
    }else {
        text = num;
    }
    return text;
  }
