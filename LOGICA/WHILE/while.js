// var cont = 0

// while(cont <= 10){
//     document.write(`${cont}`)
//     cont+=1
// }


// var cont = 1
// var soma = 0

// while(cont <= 5){
//     var number = parseInt(prompt("Digite um numero"))
//     soma = soma+ number
//     cont+=1
// }
// document.write(`${soma}`)


var number = parseInt(prompt("Digite um numero da tabuada que deseja"))
var cont = 0 

while(cont < 10){
    //var number = parseInt(prompt("Digite um numero da tabuada que deseja"))
    cont+=1
    document.write(`${number}x${cont} = ${number*cont} <br>`)
    
}