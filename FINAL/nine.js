// Solicita os coeficientes ao usuário
var a = parseFloat(prompt("Digite o coeficiente a:"))
var b = parseFloat(prompt("Digite o coeficiente b:"))
var c = parseFloat(prompt("Digite o coeficiente c:"))

// Cálculo do delta
var delta = b * b - 4 * a * c

// Verificação das raízes
if (delta < 0) {
    console.log("A equação não possui raízes reais.")
} else if (delta === 0) {
    var raiz = -b / (2 * a)
    console.log(`A equação possui uma raiz real: x = ${raiz}`)
} else {
    var raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    var raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log(`As raízes da equação são: x1 = ${raiz1} e x2 = ${raiz2}`)
}
