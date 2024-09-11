var numbers = []

for (let i = 0 ; i < 10;i++){
numbers.push(parseInt(prompt('Digite um numero')))

}
var myreverseNumbers = numbers.slice().reverse();

console.log(numbers)
console.log(myreverseNumbers)