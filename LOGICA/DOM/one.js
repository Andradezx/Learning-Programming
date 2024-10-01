var text = document.querySelector(`h1`)
text.innerHTML = 'Salve meus calabreso'

var par = document.querySelector(`p`)
par.innerHTML = 'Um Otimo final de semana'



function  button() {
alert(`SUMA DAQUI MISERAVEL!!`)
    
}

function result() {
    var number = parseInt(prompt("Digite um numero"))
    var number2 = parseInt(prompt("Digite Mais um numero"))

    alert(`${number+number2}`)
    
}

function showname(){
    var nome  = document.getElementById('name').value 
    var sobre = document.getElementById('firstname').value

    document.getElementById('complete').value = (`${nome} ${sobre}`)
}
