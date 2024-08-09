var age = parseInt(prompt("Digite a idade "))
var test = prompt("Voce foi aprovado na avaliação")
//                    E   OU
//tabela da verdade (&&)(||)

if ((age >=18 && (test =="sim" || test =="Sim" || test =="SIM"))   ){
    document.write(`Voce está aprovado no curso de T.I`)
}else{
    document.write(`Voce nao está apto a cursar`)
}

console.log("sai daqui pedro")