var salary = parseInt(prompt("Digite o seu salario burto"))
var financing = parseInt(prompt("Digite o valor da Prestação"))
var calculator = (salary / 100) *30



if (financing <= calculator){
    alert("Financiamento liberado")
    alert("Valor das parcelas de "+financing )
}else{
 alert("Financiamento Negado")
 alert("O valor de "+financing+" é maior do que o permitido do seu salario de:  "+ salary)
}