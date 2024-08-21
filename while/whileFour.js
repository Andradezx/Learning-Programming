var  cont = 0 
var day = 0

while(cont < 3){
    var bayby = parseFloat(prompt("Digite quntos dias tem seu bebe"))
    var day = (day+bayby)
    cont+=1
}
document.write(` media ${(day/cont).toFixed(2)}`)