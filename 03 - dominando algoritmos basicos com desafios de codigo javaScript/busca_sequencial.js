// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

//let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.


console.log(buscaSequencia(-16, elementos));

function buscaSequencia(num, lista) {
    let texto;
    var controle = lista.find(elemento => elemento === num);
    
        if (controle === num) {
            texto = `Achei ${num} na posicao ${lista.indexOf(num)} `
        }else{
            texto = `Numero ${num} nao encontrado!`
        }
         
     return texto;
}

