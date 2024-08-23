
var i = 1 
var calc = 0 
var cont = 0 
while(i <Infinity){
    var number = parseInt(prompt("Digite um numero"))
    var calc = calc+number
    var cont= i+cont

    


    if (calc == 100){
    alert(` Para Chegar no valor ${calc}\n Foram necessarios ${cont} Numeros `)
    break;

    }
}