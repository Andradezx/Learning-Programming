var juice = prompt("Qual o suco voce prefere")

switch (juice) {
    case "Morango":
        document.write("Esse suco contem 70 calorias")
        break;
    case "Laranja":
       document.write("Esse suco contem 65 calorias")
      break;
    case "Amora":
    document.write("Esse suco contem 150 calorias")
    break;
    default:
        document.write("Escreva novamente o sabor do suco")
        break;
}