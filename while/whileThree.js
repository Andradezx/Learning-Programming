var cont = 0

var max = parseFloat(0)
var min = parseFloat(Infinity)
var soma = parseFloat(0)

while(cont < 10){
   var sac = parseFloat(prompt("Digite o quanto deseja sacar "))
   var soma = (sac+soma)
   cont+=1

 if (sac > max){
    var max = sac 
 }
  if (sac < min) {
    var min = sac 

 }   
 

 }

document.write(`Maior valor sacado ${max} <br> Meno valor sacado ${min} <br> O total sacado no dia é ${soma}<br> A media sacada no dia foi ${soma/cont}`)





