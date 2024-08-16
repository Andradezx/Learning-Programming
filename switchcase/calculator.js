var question = parseInt(prompt("Qual conta voce deseja fazer \n1-Adição\n2-Subtração\n3-Divisão\n4-Porcentagem"))
var number = parseFloat(prompt("Digite o Primeiro numero"))
var numberTwo = parseFloat(prompt("Digite o Segundo numero"))

switch (question) {
    case 1:
        document.write(`O resultado de Adição é ${number+numberTwo}`)
        break;
    case 2: 
        document.write(`O Resultado desse Subtração ${number-numberTwo}`)
         break;
    case 3:
        document.write(`O resultado dessa Divisão é ${number/numberTwo}`)
         break;
    case 4:
        document.write(`O resultado em porcentagem ${number/100 *numberTwo}`)
         break;

    default:
        document.write("ALGO DEU ERRADO!!")
        break;
}