// Calcular a média final de um aluno considerando eu o mesmo irá realizar duas 
// provas (P1 e P2), sendo que a P1 deverá ter peso 4 e a P2 peso 6. Os dados serão 
// fornecidos pelo usuário

var P1 = parseInt(prompt(`Digite o a nota da prova P1`))
var P2 = parseInt(prompt(`Digite a nota da prova P2`))

var calc = (P1 * 0.4)
var calc2 = (P2 * 0.6)

alert(`A nota da prova P1 FOI ${calc} e da P2 FOI ${calc2}`)

