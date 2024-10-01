var notes = []
var calculator = parseFloat(0) 

for (var i = 0; i  < 5 ; i++){
    notes.push(parseFloat(prompt(`Digite a nota do ${i+1}° Aluno`)))
    calculator = calculator+notes[i]
}
document.write(`A Media dos  Alunos Foi <br> (${calculator/i}) <br>`)