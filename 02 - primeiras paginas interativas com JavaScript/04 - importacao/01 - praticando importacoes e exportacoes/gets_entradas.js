
const entradas = [4, 100, 150, 90, 200, 98, 150, 350, 499];

const lista = [];
function gets(){
    for (let i = 0; i < entradas.length; i++) {
        lista.push(entradas[i]);
    }
    return lista;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};