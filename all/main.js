for (var cont = 0; cont = -Infinity; cont++){

var globaloption = parseInt(prompt("1- Cambio de Moedas\n2- Calculadora de IMC\n3- Mercado\n4- Calculadora\n5- Tabuada\n6- Sistema de saque\n7- Conversor de °C Para F°\n8- Cadastrar Produtos\n9- Calculador de media\n10- Cadastro de funcionario "))



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
            alert(`O resultado de Adição é ${number+numberTwo}`)
            break;
        case 2: 
            alert(`O Resultado desse Subtração ${number-numberTwo}`)
            break;
        case 3:
            alert(`O resultado dessa Divisão é ${number/numberTwo}`)
            break;
        case 4:
            alert(`O resultado em porcentagem ${number/100 *numberTwo}`)
            break;

        default:
            alert("ALGO DEU ERRADO!!")
            break;
}

    }

    if (globaloption == 5) {
    var number = parseInt(prompt("Digite um numero da tabuada que deseja"))
    var cont = 0 

    while(cont < 10){
        cont+=1
        alert(`\n${number}x${cont} = ${number*cont}\n`)
        
    }
}

  if (globaloption == 6) {
    var rept = 0
        var max = parseFloat(0)
        var min = parseFloat(Infinity)
        var soma = parseFloat(0)

        while(rept < 10){
        var sac = parseFloat(prompt("Digite o quanto deseja sacar "))
        var soma = (sac+soma)
        rept+=1

        if (sac > max){
            var max = sac 
        }
        if (sac < min) {
            var min = sac 

        }   
        

        }

        alert(`Maior valor sacado ${max} \n Meno valor sacado ${min} \n O total sacado no dia é ${soma}\n A media sacada no dia foi ${soma/cont}`)



    }
    if (globaloption == 7 ){

     var rept5 = 0

    while(rept5 <= 100){
       alert(`${rept5}°C   ${(rept5*1.8)+31.}°F \n`)
        rept5+=10

}

    }

 if (globaloption == 8){
   
    var pricemax  = parseFloat(0)
    for (var rept4 = 1; rept4 <=Infinity; rept4++ ) {
    var nameProduct = prompt("Digite o nome do produto")
    var priceProduct = parseFloat(prompt("Digite o valor"))
    
    if (priceProduct > pricemax){
        var pricemax = priceProduct
        var nameProducthigh = nameProduct

    }
    var mensage = parseInt(prompt("Deseja contionar\n1-Sim\n2-Não"))

    if (mensage == 2 ) {
        alert(`O produto mais caro foi: \n  ${nameProducthigh} R$ ${pricemax}`)
    break
   
 }
}


 }

 if (globaloption == 9) {
    var rept6 = 1
    var calc2 = parseFloat(0)
    
    while(rept6 <= 4 ){
    var students = parseFloat(prompt("Digite a nota do "+rept6+"° Bimestre do "))
       var calc2 = (calc2+students)
       var calculator = (calc2) /4
        rept6+=1

    }
   // var calculator = (calc2) /4
        if (calculator >= 6){
        alert(`Sua media foi de  ${calculator}\n Voce passou!!`)
        
    }else if (calculator < 6) {
        alert(`Sua media foi de ${calculator}\n Voce Reprovou!!`)

     } else {
      alert("error")
     }


    }

    if (globaloption == 10) {

        var cont = 2400
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const years = date.getFullYear();
        const hours = date.getHours();
        const minuts = date.getMinutes();
        
        while(cont <= 2415){
            var source =  prompt("Digite seu nome")
            cont++
            alert(`A sua matricula é\n${cont}\n Data: ${day}/${month+1}/${years}  Horário: (${hours}:${minuts}) \n`)
        
        
        }

    }
 }


  

    

        
    

    
