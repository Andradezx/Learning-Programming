var vehicle = parseInt(prompt("Digite o valor do veiculo"))
var gas = prompt("Digite qual combustivel e utilizado")
var model =  prompt("Digite o tipo do veiculo")

if ((model =="Carro" && gas =="Gasolina" || gas == "flex")) {
    alert("O valor do seu IPVA Será de "+(vehicle*4)/100+"\n o IPVA foi de 4%")
}else if ((model =="Carro" && gas =="Etanol" || gas =="Eletrico" || gas =="Gas"))  {
    alert("O valor do seu IPVA Será de "+(vehicle*3)/100+"\n o IPVA foi de 3%")
}else if ((model =="Moto" || model=="Caminhonete" || model=="Onibus" || model=="Micro-onibus")){
    alert("O valor do seu IPVA Será de "+(vehicle*2)/100+"\n o IPVA foi de 2%")
}else if (model=="Caminhão"){
    alert("O valor do seu IPVA Será de "+(vehicle*1.5)/100+"\n o IPVA foi de 3%")
}