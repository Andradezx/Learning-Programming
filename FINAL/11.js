// 11. Criar um algoritmo que, dado um número de conta corrente com três dígitos, 
// retorne o seu dígito verificador, o qual é calculado da seguinte maneira:
// Exemplo: número da conta: 235
// • Somar o número da conta com o seu inverso: 235+ 532 = 767
// • multiplicar cada dígito pela sua ordem posicional e somar estes 
// resultados: 7 6 7
// • o último dígito desse resultado é o dígito verificador da conta (40 → O).


do{

    var numeroconta = prompt(`digite a sua senha`)

    if(numeroconta.length > 3){

        alert(`Nao podemos cadastrar mais que 3 digitos`)

    } else if(numeroconta.length < 3){

        alert(`Nao podemos cadastrar neos que 3 digitos`)

    }


}while(numeroconta.length > 3 || numeroconta.length < 3)

 if (numeroconta.length == 3 ){
    var amz = numeroconta
    var invert = amz.split('').reverse().join('')
    
    var soma = parseInt(invert) + parseInt(amz)

   var convertstring = soma.toString()

   var resultado = 0 

    for(let i = 0 ;i < convertstring.length ; i++) {
        var soma2 = convertstring[i]*(i+1)
        resultado = soma2+resultado
        console.log(soma2)
        console.log(resultado)
    }

    var resultado2 = resultado.toString()

    if (resultado2.length == 2 ){
        resultado2 = resultado2[1]
        console.log(resultado2) 

    }



}




