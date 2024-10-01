var A = []
var B = []
var aluno 
var nota 

for (let i = 0; i < 5; i++){
A.push(prompt(`Digite o nome do ${i+1}° Aluno`))
 aluno = aluno+A[i]
}


for (let j = 0; j < 5; j++){
    B.push(parseInt(prompt(`Digite a nota Do ${A[j]}`)))
    nota = nota+B[j]
    
}


for (let i= 0; i < 5; i++) {
    document.write(`${A[i]} ${B[i]},<br>`)
}



console.table(A)
console.table(B)