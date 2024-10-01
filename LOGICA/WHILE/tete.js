// var digite = prompt("Digite a sua senha")
// var armazenar = digite

// //var senha = ""
// do{
 

//     if (armazenar !=="a" || armazenar !=="A" || armazenar !=="e" || armazenar !=="E"  || armazenar !=="i" ||  armazenar !=="I" || armazenar !=="o" || armazenar !=="O" || armazenar !=="U" || armazenar !=="U"){
//     alert("DIGITE UMA SENHA VALIDA")    
//     }


// }while(armazenar !=="a" || armazenar !=="A" || armazenar !=="e" || armazenar !=="E"  || armazenar !=="i" ||  armazenar !=="I" || armazenar !=="o" || armazenar !=="O" || armazenar !=="U" || armazenar !=="U"      )



var i = 1
var dg = ""
while(i < 6){

var digite = prompt("Digite a sua senha")
var dg = dg+digite

// if (digite !=="a" || digite !=="A" || digite !=="e" || digite !=="E"  || digite !=="i"  || digite !=="o" || digite !=="O" || digite !=="U" || digite !=="U"){
//     alert("DIGITE UMA SENHA VALIDA") 
// }else{

 if (digite =="a" || digite =="A" ){
    var cript1 = "z"
}else if (digite =="e" || digite =="E"){
var cript2 = "3"
}else if (digite =="i"){
    var cript3 = "I"
}else if (digite =="o" || digite =="O"){
var cript4 = 0
}else if ( digite =="u" || digite =="U"){
    var cript5 = "$"
}

i+=1
//alert(` ${cript1} ${cript2} ${cript3} ${cript4} ${cript5} `)
  

}
alert(` ${cript1} ${cript2} ${cript3} ${cript4} ${cript5} `)
alert(`${dg}`)
