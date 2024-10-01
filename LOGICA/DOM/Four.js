function products(){

var bread = parseFloat(document.getElementById(`a`).value)
var cheese = parseFloat(document.getElementById(`b`).value)
var miniloaf = parseFloat(document.getElementById(`c`).value)
var bredform = parseFloat(document.getElementById(`d`).value)
var milk = parseFloat(document.getElementById(`e`).value)
var sugarbred = parseFloat(document.getElementById(`f`).value)
var sigh = parseFloat(document.getElementById(`g`).value)
///PÃO E QUIJO
var pricebread = 5
var pricecheese = 2
var priceminiloaf = 3
var totalprice1 = (bread*pricebread)+(pricecheese*cheese)+(miniloaf*priceminiloaf) 


if (bread >= 10 && cheese >=1){
    document.getElementById(`result`).value = (`${(totalprice1-(((totalprice1)/100)*10)).toFixed(2)}`)

}else{
    document.getElementById(`result`).value = (`${totalprice1}`)
}



}