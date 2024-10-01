var A = parseInt(prompt(`Digite um valor`))// DIGITAR O NUMERO
var B = parseInt(prompt(`Digite outro valor`)) // DIGITAR OUTRO NUMERO

console.log('A '+A) //printa 
console.log('B '+B) //printa 

var temp = A; // Armazena o valor de A em uma variável temporária
A = B;        // A recebe o valor de B
B = temp;    // B recebe o valor armazenado de A

console.log('A '+A)
console.log('B '+B)
