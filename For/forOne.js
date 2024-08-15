var soma = 0 
for (var contador = 1; contador <=5; contador++) {
   var number = parseInt(prompt("Digite um numero"))
   var soma = number+soma
}
document.write(`${soma}`)