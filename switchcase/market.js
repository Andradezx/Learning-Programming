//var question = parseInt(prompt("Abaixo está o cardapio\n100- Cachorro quente R$9,80\n101- Bauru Simples R$5,60\n102- Bauru com ovo R$7,20\n103- Hamburguer R$12,30\n104- Cheeseburguer R$16,90\n0-Sair\nDigite o codigo do produto para escolhe-lo"))
//var unitd = parseInt(prompt("Digite agora a quantidade "))
//if (globaloption == 3){
var exit =0
//var question = parseInt(prompt("Abaixo está o cardapio\n100- Cachorro quente R$9,80\n101- Bauru Simples R$5,60\n102- Bauru com ovo R$7,20\n103- Hamburguer R$12,30\n104- Cheeseburguer R$16,90\n0-Sair\nDigite o codigo do produto para escolhe-lo"))
while (exit ==0){
var question = parseInt(prompt("Abaixo está o cardapio\n100- Cachorro quente R$9,80\n101- Bauru Simples R$5,60\n102- Bauru com ovo R$7,20\n103- Hamburguer R$12,30\n104- Cheeseburguer R$16,90\n0-Sair\nDigite o codigo do produto para escolhe-lo"))
switch (question) {
    case 100:
        var unitd = parseInt(prompt("Digite agora a quantidade "))
        var price = parseFloat(unitd*9.80).toFixed(2)
        alert(`O Total a pagar será de R$${price}\n`)
        break;
    case 101:
        var unitd = parseInt(prompt("Digite agora a quantidade "))
        var price = parseFloat(unitd*5.60).toFixed(2)
        alert(`O Total a pagar será de R$${price}\n`)
        break;
    case 102:
        var unitd = parseInt(prompt("Digite agora a quantidade "))
        var price = parseFloat(unitd*7.20).toFixed(2)
        alert(`O Total a pagar será de R$${price}\n`)
        break;
    case 103:
        var unitd = parseInt(prompt("Digite agora a quantidade "))
        var price = parseFloat(unitd*12.30).toFixed(2)
        alert(`O Total a pagar dos Hamburgueres R$${price}\n`)
        break;
    case 104:
        var unitd = parseInt(prompt("Digite agora a quantidade "))
        var price = parseFloat(unitd*16.90).toFixed(2)
        alert(`O Total a pagar será de R$${price}\n`)
        break;
    case 0:
        var exit = 1
        break;
    default:
        break;

}

var priceint = parseFloat(price+priceint).toFixed(2)
var price = 0
}
alert(`Valor total: R$${priceint} `)
//}
