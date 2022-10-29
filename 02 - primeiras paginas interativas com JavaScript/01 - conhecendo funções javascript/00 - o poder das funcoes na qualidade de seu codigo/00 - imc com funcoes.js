function calcularImc (peso, altura){
    return peso / Math.pow(altura, 2);
}

function infoImc (imc){
    let mensagem;
    if(imc < 18.5){
        mensagem = "Abaixo do peso";
    }else if(imc >= 18.8 && imc < 25){
        mensagem = "Peso normal";
    }else if(imc >= 25 && imc < 30){
        mensagem = "Acima do peso";
    }else if(imc >= 30 && imc < 40){
        mensagem = "Obeso";
    }else {
        mensagem = "Obesidade grave";
    }

    return mensagem + ': seu imc é ' + imc.toFixed(2)
}


function main (){
const peso = 73;
const altura = 1.72;
const imc = calcularImc(peso, altura);

console.log(infoImc(imc));

}

main();


