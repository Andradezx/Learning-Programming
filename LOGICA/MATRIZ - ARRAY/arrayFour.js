var voltas = []
var amz = parseFloat(0)
var soma = parseFloat(0)
var reverse = voltas.slice().reverse();

for (let i = 0 ; i < 6; i++){
    voltas.push(parseInt(prompt(`Digite do Piloto N°${i+1} velocidade`)))
    alert(`Piloto N°${i+1}- Estava A: ${voltas[i]} Km Por Hora`)
    soma = soma+ voltas[i]
}

document.write(`As velocidade dos pilotos foram ${reverse}<br>`)
document.write(`A Media das Velocidades foi ${soma/6}`)
console.table(voltas)
console.table(reverse)
