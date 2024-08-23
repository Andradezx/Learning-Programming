

export function calculatoroption() {
   

var question = parseInt(prompt("Qual conta voce deseja fazer \n1-Adição\n2-Subtração\n3-Divisão\n4-Porcentagem"))
var number = parseFloat(prompt("Digite o Primeiro numero"))
var numberTwo = parseFloat(prompt("Digite o Segundo numero"))

switch (question) {
    case 1:
       alert(`O resultado de Adição é ${number+numberTwo}`)
        break;
    case 2: 
       alert(`O Resultado desse Subtração ${number-numberTwo}`)
         break;
    case 3:
       alert(`O resultado dessa Divisão é ${number/numberTwo}`)
         break;
    case 4:
       alert(`O resultado em porcentagem ${number/100 *numberTwo}`)
         break;

    default:
       alert("ALGO DEU ERRADO!!")
        break;
}
}