
var weight =  parseInt(prompt("| Digite o seu peso ? "))
var height = parseFloat(prompt("| Qual a sua altura ? ")).toFixed(2)
var calculator = weight / (height*height)

///
if (calculator <= 18.5){
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