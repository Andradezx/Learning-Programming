// Solicita ao usuário o valor e as unidades
var valor = parseFloat(prompt("Digite o valor a ser convertido:"))
var unidadeOrigem = prompt("Digite a unidade de origem (metros, pés, polegadas, milhas):").toLowerCase()
var unidadeDestino = prompt("Digite a unidade de destino (metros, pés, polegadas, milhas):").toLowerCase()

let valorEmMetros;

// Converte o valor para metros
switch (unidadeOrigem) {
    case 'metros':
        valorEmMetros = valor
        break;
    case 'pés':
        valorEmMetros = valor * 0.3048; // 1 pé = 0.3048 metros
        break;
    case 'polegadas':
        valorEmMetros = valor * 0.0254; // 1 polegada = 0.0254 metros
        break;
    case 'milhas':
        valorEmMetros = valor * 1609.344; // 1 milha = 1609.344 metros
        break;
    default:
        alert("Unidade de origem inválida.")
        valorEmMetros = null
}


// Converte de metros para a unidade desejada e exibe o resultado
if (valorEmMetros !== null) {
    let resultado;
    switch (unidadeDestino) {
        case 'metros':
            resultado = valorEmMetros
            break;
        case 'pés':
            resultado = valorEmMetros / 0.3048 // 1 metro = 1 / 0.3048 pés
            break;
        case 'polegadas':
            resultado = valorEmMetros / 0.0254 // 1 metro = 1 / 0.0254 polegadas
            break;
        case 'milhas':
            resultado = valorEmMetros / 1609.344 // 1 metro = 1 / 1609.344 milhas
            break;
        default:
            alert("Unidade de destino inválida.")
            resultado = null
    }


    // Exibe o resultado final
    if (resultado !== null) {
        alert(`${valor} ${unidadeOrigem} é igual a ${resultado} ${unidadeDestino}.`)
    }
    }