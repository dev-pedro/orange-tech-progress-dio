// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

//var A = parseInt(gets());
//var N = parseInt(gets());
let n = 15;

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:
let total = 0;
function somatorio(n){
    for(let i = 0; i <= n; i++){
        total =+ total+i;
      }
      return total;
}

console.log(somatorio(n));