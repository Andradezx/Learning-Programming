// A potência (P) consumida por determinado aparelho eletroeletrônico é definida 
// pela tensão (V) multiplicada pela corrente (A). Elabore um programa que, a partir 
// da tensão e corrente fornecidas pelo usuário, calcule e apresente a potência.

var ap = prompt(`Digite o nome do Aparelho`)
var tensao = parseFloat(prompt(`Digite qual a Tensão do aparelho`))
var corrente = parseFloat(prompt(`Digite qual a Corrente`))

var potencia = (tensao*corrente)

alert(`${potencia}`)