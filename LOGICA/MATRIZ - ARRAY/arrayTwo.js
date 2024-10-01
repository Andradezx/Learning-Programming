var numbers =  []
var soma = parseFloat(0)

for(let i = 0; i < 5; i++){
numbers.push(parseFloat(prompt('Digite um numero')))
soma = soma+ numbers[i]

}
console.log(numbers)
console.log(soma)