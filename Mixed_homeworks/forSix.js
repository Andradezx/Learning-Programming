var number = parseInt(prompt("Me diga o numero do inicio do range que deseja "))
var numberTwo = parseInt(prompt("Me diga o numero do final do range que deseja "))

for ( var progress = number; progress<= numberTwo ; progress++) {
    document.write(`${progress}<br>`)

}