for (var cont = 0; cont = -Infinity; cont++){

var globaloption = parseInt(prompt("1-Cambio de Moedas\n2-Calculadora de IMC\n3-Mercado\n4-Calculadora "))



if (globaloption == 1){ ///CASA DE CAMBIO
    ////VARIAVEIS
    var moneyOne = parseFloat(prompt("Qual É a sua moeda\n 1- Dolar\n 2- Euro\n 3- Real "))
    var quantity = parseFloat(prompt("Digite o valor")).toFixed(2)
    var moneyTwo = parseFloat(prompt("Qual moeda deseja converter\n 1- Dolar\n 2- Euro\n 3- Real "))

    //=========================================================================
    ///ESSA PARTE E DE DOLAR PRA EURO E REAIS
    if (moneyOne ==1 && moneyTwo =="2" ) {
        alert("Voce terá  €" + quantity/1.09+" em Euros " )
    }else if (moneyOne==1 && moneyTwo == "3") {
        alert("Voce terá  R$" + (quantity*5.51).toFixed(2)+" em Reais " )
    }else if (moneyOne==1 && moneyTwo==1 ) {
        alert("Voce terá  $" + (quantity)+" em Dolar " )

    //=======================================================================
    //ESSA PARTE É DE EURO PARA DOLAR E REAIS
    }else if (moneyOne==2 && moneyTwo==1){
        alert("Voce terá  $" + (quantity/0.92).toFixed(2)+" em Dolar " )
    }else if (moneyOne==2 && moneyTwo==3){
        alert("Voce terá  R$" + (quantity*6.02).toFixed(2)+" em Reais " )
    }else if (moneyOne==2 && moneyTwo==2) {
        alert("Voce terá   €"+ (quantity)+" em Euro " )

    //============================================================================
    //ESSA PARTE É DE REAIS PARA DOLAR E EURO
    }else if (moneyOne==3 && moneyTwo==1) {
        alert("Voce terá  $" + ((quantity/5.51).toFixed(2))+" em Dolar " )
    }else if (moneyOne==3 && moneyTwo==2) {
        alert("Voce terá  €" + (quantity*0.17).toFixed(2)+" em Euro " )
    }else if (moneyOne==3 && moneyTwo==3) {
        alert("Voce terá  R$" + (quantity)+" em Reais " )
    }
}
 

  if (globaloption == 2 ){
    
    var weight =  parseInt(prompt("| Digite o seu peso ? "))
    var height = parseFloat(prompt("| Qual a sua altura ? ")).toFixed(2)
    var calculator = weight / (height*height)

    ///
    if  (calculator <= 18.5){
        alert("| Voce está abaixo do peso ideal")
    }else if (calculator >=18.5 && calculator <=24.9) {
        alert("| Parabens voce está em seu peso normal!")
    }else if (calculator >=25.0 && calculator <=29.9) {
        alert("|VocÊ está acima do seu peso (Sobrepeso)")
    }else if (calculator >= 30.0 && calculator <= 34.9) {
    alert("| Obesidade garu I")
    }else if (calculator >= 35.0 && calculator <= 39.9){
        alert("| Obesidade grau II") 
    }else if (calculator >=40.0) {
        alert("|Obesidade grau III")

    }
} 

if (globaloption == 3){

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
    document.write(`Valor total: R$${priceint} `)

    }
    
    if (globaloption == 4){
        
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

    }

    }

 