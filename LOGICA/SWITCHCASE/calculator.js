

export function calculatoroption() {  

var question = parseInt(prompt("Qual conta voce deseja fazer \n1-Adição\n2-Subtração\n3-Divisão\n4-Porcentagem"))
var number = parseFloat(prompt("Digite o Primeiro numero"))
var numberTwo = parseFloat(prompt("Digite o Segundo numero"))

switch (question) {
    case 1:
        document.getElementById("task1").textContent=(`O resultado de Adição é ${number+numberTwo}`)
        break;
    case 2: 
         document.getElementById("task2").textContent=(`O Resultado desse Subtração ${number-numberTwo}`)
         break;
    case 3:
        document.getElementById("task3").textContent=(`O resultado dessa Divisão é ${number/numberTwo}`)
         break;
    case 4:
        document.getElementById("task4").textContent=(`O resultado em porcentagem ${number/100 *numberTwo}`)
         break;

    default:
        document.getElementById("task5").textContent=("ALGO DEU ERRADO!!")
        break;
}
}