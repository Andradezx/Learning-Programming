
var cont = 2400
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const years = date.getFullYear();
const hours = date.getHours();
const minuts = date.getMinutes();

while(cont <= 2415){
    var source =  prompt("Digite seu nome")
    cont++
    alert(`A sua matricula é\n${cont}\n Data: ${day}/${month+1}/${years}  Horário: (${hours}:${minuts}) \n`)


}