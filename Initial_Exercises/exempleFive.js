var salary = parseInt(prompt("Digite o seu salario"))
var energy = parseInt(prompt("Digite quanto de de energia que voce gasta de energia"))

var quilowatt = 201 
var calculator = (quilowatt / 100).toFixed(2)
var calculatorTwo = (energy*calculator).toFixed(2)
var promotion = ((calculatorTwo /100) * 10).toFixed(2)
var price = (calculatorTwo - promotion)


document.write(`valor em reais de cada quilowatt ${calculator}<br>`)
document.write(`valor em reais a ser pago R$ ${calculatorTwo}<br>`)
document.write(`novo valor a ser pago por essa residencia com um desconto de 10%  ${promotion}<br>`)
document.write(`Valor com o desconto R$ ${price}`)