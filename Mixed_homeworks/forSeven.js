//var nameProduct = prompt("Digite o nome do produto")
//var priceProduct = parseFloat(prompt("Digite o valor"))
//var mensage = parseInt(prompt("Deseja contionar\n1-Sim\n2-Não"))


//if  (mensage == 1) { 
var pricemax  = parseFloat(0)
 for (var contador = 1; contador <=Infinity; contador++ ) {
    var nameProduct = prompt("Digite o nome do produto")
    var priceProduct = parseFloat(prompt("Digite o valor"))
    
    if (priceProduct > pricemax){
        var pricemax = priceProduct

    }
    var mensage = parseInt(prompt("Deseja contionar\n1-Sim\n2-Não"))

 if (mensage == 2 ) {
     document.write(`${pricemax}`)
    break


    
  }
 }
