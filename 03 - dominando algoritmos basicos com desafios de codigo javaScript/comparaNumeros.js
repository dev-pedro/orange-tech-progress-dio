

function comparaNumeros (num1, num2){
  let texto;
  if(num1 === num2){
    texto = "Sao iguais!";
  }else {
    texto = "Nao sao iguais!";
  }
  return texto;
}

console.log(comparaNumeros(34, 34));