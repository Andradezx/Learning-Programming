var cont = 1
var velocity = parseInt(0)
var velocity2 = -Infinity
var low = 0 
var max= 0
var pilo1= 0 
var min = 0
var pilo2 = 0

while(cont <= 5){
var piloto = parseInt(prompt(`Digite a velocidade do Piloto N°${cont}`))     
 cont+=1


    if (piloto > velocity){

    var max = piloto
    var pilo1 = cont
    
    }

    if (piloto < velocity2){
        var min = piloto
        var pilo2 = cont
    }

}
alert(`O piloto N°${pilo1} Foi o mais veloz ${max} `)
alert(`O piloto N°${pilo2} Foi o mais lento ${min} `)

