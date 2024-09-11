var noteOne = parseInt(prompt("Digite a nota do 1 bimestre"))
var noteTwo = parseInt(prompt("Digite a nota do 2 bimestre"))
var noteThree = parseInt(prompt("Digite a nota do 3 bimestre"))
var noteFour = parseInt(prompt("Digite a nota do 4 bimestre"))
var calculator = (noteOne+noteTwo+noteThree+noteFour) /4

if (calculator >=6){
    alert("Sua media foi de " + calculator)
    alert("Voce passou!!")
}else{
    document.write(`Voce nao passou media foi ${calculator}`)


}