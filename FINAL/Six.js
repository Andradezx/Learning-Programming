
var namep = prompt(`Digite seu nome`)
var year = parseInt(prompt(`Digite a sua data de nascimento`))

var ano = 2024

calc = ano - year

if (calc >= 18){
    alert(`PARABENS VOCE É DE MAIOR ${namep} ${calc}`)
}else if(calc < 18) {
    alert(`Voce é Menor de idade ${namep} ${calc}`)


}

