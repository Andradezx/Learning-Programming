var temp = parseInt(prompt("Digite a temperatura: "))
var conversor = (temp * 1.8 + 32).toFixed(2)

document.write(`A Conversão para F É : ${conversor}`)