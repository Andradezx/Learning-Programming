// Solicita os coeficientes ao usuário
const a = parseFloat(prompt("Digite o coeficiente a:"))
const b = parseFloat(prompt("Digite o coeficiente b:"))
const c = parseFloat(prompt("Digite o coeficiente c:"))

// Cálculo do delta
const delta = b * b - 4 * a * c

// Verificação das raízes
if (delta < 0) {
    console.log("A equação não possui raízes reais.")
} else if (delta === 0) {
    const raiz = -b / (2 * a)
    console.log(`A equação possui uma raiz real: x = ${raiz}`)
} else {
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log(`As raízes da equação são: x1 = ${raiz1} e x2 = ${raiz2}`)
}
