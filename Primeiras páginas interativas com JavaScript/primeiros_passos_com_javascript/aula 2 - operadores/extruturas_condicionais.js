const precoGasolina = 5.60;
const precoEthanol = 3.70;
let km_por_litro = 11;
const dist_percorida = 580;

const isEthanol = true;

if (isEthanol === true) {
    km_por_litro = 10;
    const litros_consumidos = dist_percorida / km_por_litro;
    const consumo = litros_consumidos * precoEthanol;
    console.log("Gastos com ethanol R$ " + consumo.toFixed(2));
}else{
    km_por_litro = 15;
    const litros_consumidos = dist_percorida / km_por_litro;
    const consumo = litros_consumidos * precoGasolina;
    console.log("Gastos com gasolina R$ " + consumo.toFixed(2));
}
