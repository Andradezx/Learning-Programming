// A Lei de Ohm define que a resistência (R) de um condutor é obtida pela divisão da 
// tensão aplicada (V) dividida pela intensidade de corrente elétrica (A). Desta forma, 
// a partir de uma tensão e corrente, digitadas pelo usuário, calcule e mostre o valor 
// da resistência

var ten = parseInt(prompt(`Digite a tensão`))
var con = parseInt(prompt(`Digite a corrente`))

calc = ten / con

alert(`O valor da ressitência e ${calc}`)