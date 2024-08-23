import { calculatoroption } from './calculator.js';
import { market } from './market.js';
import { tips } from './truetableFive.js';
import { weight } from './truetableFour.js';
import { tabuada } from './while.js';


var globaloption = parseInt(prompt("1- Cambio de Moedas\n2- Calculadora de IMC\n3- Mercado\n4- Calculadora\n5- Tabuada\n6- Sistema de saque "))

switch (globaloption) {
    case 1: //moedas
        tips();
    break;
    case 2: ///IMC
        weight();
    break;
    case 3:
        market();
        break;
    case 4://calculadora
        calculatoroption();
        break;
    case 5:
        tabuada()
        break;
    default:
        break;
}
