import { calculatoroption } from './calculator.js';
import { tips } from './truetableFive.js';
import { weight } from './truetableFour.js';


var globaloption = parseInt(prompt("1- Cambio de Moedas\n2- Calculadora de IMC\n3- Mercado\n4- Calculadora\n5- Tabuada\n6- Sistema de saque "))

switch (globaloption) {
    case 1:
        tips();
    break;
    case 2:
        weight();
    break;
    case 4:
        calculatoroption();
        break;

    default:
        break;
}
