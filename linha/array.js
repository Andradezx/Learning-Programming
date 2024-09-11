
   var nome = ['Vitor','Pedro','Jão','Marcelo','Calabreso']
   document.write(nome, '<br>')


document.write(nome[1], '<br>') // imprimir valor da posição 1 
document.write(nome.length, '<br>' ) // tamannho do array 
document.write(nome[5], '<br>')

nome[1] = 'Pedro trouxa' // reatribuir valores
document.write(nome , '<br>')


nome.push('Matheus') // adiciona elemneto no final do array 
document.write(nome, '<br>')


nome.unshift('Renato')// adiciona elemento no inicio do array
document.write(nome, '<br>')

nome.pop()//remove o ultimo elemnto do array
document.write(nome, '<br>')


var boletim = [[8,7,9,3],[4,5,8,6,]]
document.write(boletim,'<br>')
console.table(boletim)

document.write(boletim[1][2],'<br>')



