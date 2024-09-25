// Uma determinada loja precisa calcular o preço de venda de um produto. O cálculo 
// deverá ser efetuado através desse programa crido por você não esquecendo que 
// terá que aplicar o desconto também. Considerar todas as variáveis do tipo real e 
// que elas serão digitadas pelo usuário


function Result(){
     var Product = parseFloat(document.getElementById(`a`).value)
     var Desc = parseFloat(document.getElementById(`b`).value)
    var calc = Product -  ((Product / 100) * Desc)
    document.getElementById("c").innerHTML = "Valor do produto ficará "+calc

}