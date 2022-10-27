function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

function pagamento(formaPagamento, valor){
    if(formaPagamento === 1){
        console.log(aplicarDesconto(valor, 10));
    }else if (formaPagamento === 2) {
        console.log(aplicarDesconto(valor, 15));
    }else if (formaPagamento === 3) {
        console.log(valor);
    }else {
        console.log(aplicarJuros(valor, 10));
    }
}


function main(){
    const precoEtiqueta = 100;
    const formaPagamento = 2;

    pagamento(formaPagamento, precoEtiqueta)
}

main();