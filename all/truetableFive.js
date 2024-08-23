
export function tips() {
    

////VARIAVEIS
var moneyOne = parseFloat(prompt("Qual É a sua moeda\n 1- Dolar\n 2- Euro\n 3- Real "))
var quantity = parseFloat(prompt("Digite o valor")).toFixed(2)
var moneyTwo = parseFloat(prompt("Qual moeda deseja converter\n 1- Dolar\n 2- Euro\n 3- Real "))

//=========================================================================
///ESSA PARTE E DE DOLAR PRA EURO E REAIS
if (moneyOne ==1 && moneyTwo =="2" ) {
     alert("Voce terá  €" + (quantity/1.09).toFixed(2)+" em Euros " )
}else if (moneyOne==1 && moneyTwo == "3") {
     document.getElementById("task2").textContent=("Voce terá  R$" + (quantity*5.51).toFixed(2)+" em Reais " )
}else if (moneyOne==1 && moneyTwo==1 ) {
     document.getElementById("task2").textContent=("Voce terá  $" + (quantity)+" em Dolar " )

//=======================================================================
//ESSA PARTE É DE EURO PARA DOLAR E REAIS
}else if (moneyOne==2 && moneyTwo==1){
     document.getElementById("task2").textContent=("Voce terá  $" + (quantity/0.92).toFixed(2)+" em Dolar " )
}else if (moneyOne==2 && moneyTwo==3){
     document.getElementById("task2").textContent=("Voce terá  R$" + (quantity*6.02).toFixed(2)+" em Reais " )
}else if (moneyOne==2 && moneyTwo==2) {
     document.getElementById("task2").textContent=("Voce terá   €"+ (quantity)+" em Euro " )

//============================================================================
//ESSA PARTE É DE REAIS PARA DOLAR E EURO
}else if (moneyOne==3 && moneyTwo==1) {
     document.getElementById("task2").textContent=("Voce terá  $" + ((quantity/5.51).toFixed(2))+" em Dolar " )
}else if (moneyOne==3 && moneyTwo==2) {
     document.getElementById("task2").textContent=("Voce terá  €" + (quantity*0.17).toFixed(2)+" em Euro " )
}else if (moneyOne==3 && moneyTwo==3) {
     document.getElementById("task2").textContent=("Voce terá  R$" + (quantity)+" em Reais " )
}else{
 alert("Algo deu errado")
 console.log.console.error(error);
 
}
}
//==============================================================================





    

   



