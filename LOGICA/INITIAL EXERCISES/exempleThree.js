var noteOne =  parseInt(prompt("Digite sua nota do Primeiro bimestre!"))
var noteTwo = parseInt(prompt("Digite a sua nota do Segundo bimestre"))
var noteTre = parseInt(prompt("Digite a sua terceira nota do  Terceiro bimestre ! "))
var noteFor = parseInt(prompt("Digite a sua nota do Quarto bimestre! "))

var calc = (noteOne+noteTwo+noteTre+noteFor) /4

document.write(`O resultado é: ${calc}`)