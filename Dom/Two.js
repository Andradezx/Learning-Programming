
function peso(){

var weight = document.getElementById('textpeso').value
var height = document.getElementById('textaltura').value
var calculator = weight / (height*height)
///
if (calculator <= 18.5){
    document.getElementById('result').value = ("| Voce está abaixo do peso ideal")
}else if (calculator >=18.5 && calculator <=24.9) {
    document.getElementById('result').value =("| Parabens voce está em seu peso normal!")
}else if (calculator >=25.0 && calculator <=29.9) {
    document.getElementById('result').value =("|Você está acima do seu peso (Sobrepeso)")
}else if (calculator >= 30.0 && calculator <= 34.9) {
document.getElementById('result').value =("| Obesidade garu I")
}else if (calculator >= 35.0 && calculator <= 39.9) {
    document.getElementById('result').value =("| Obesidade grau II") 
}else if (calculator >=40.0) {
    document.getElementById('result').value =("|Obesidade grau III")

}
}