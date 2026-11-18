let valor = +prompt("insira o valor da conta")
let pessoas = +prompt("insira o número de pessoas")
let adicional = prompt("Aceita pagar os 10% de serviço? (s/n):").trim().toLowerCase();

const total = adicional === "s" ? valor * 1.1 : valor
const cada = total / pessoas

console.log(`Valor total do serviço: R$ ${total.toFixed(2)}`)
console.log(`Valor pago por pessoa: R$ ${cada.toFixed(2)}`)
