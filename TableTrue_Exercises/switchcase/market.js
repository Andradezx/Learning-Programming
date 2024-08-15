var question = parseInt(prompt("Abaixo está o cardapio\n100- Cachorro quente R$9,80\n101- Bauru Simples R$5,60\n102- Bauru com ovo R$7,20\n103- Hamburguer R$12,30\n104- Cheeseburguer R$16,90\nDigite o codigo do produto para escolhe-lo"))
var unitd = parseInt(prompt("Digite agora a quantidade "))

switch (question) {
    case 100:
        document.write(`O Total a pagar será de ${unitd*9.80}`)
        break;
    case 101:
        document.write(`O Total a pagar será de ${unitd*5.60} `)
        break;
    case 102:
        document.write(`O Total a pagar será de ${unitd*7.20}`)
        break;
    case 103:
        document.write(`O Total a pagar será de ${unitd*12.30}`)
        break;
    case 104:
        document.write(`O Total a pagar será de ${unitd*16.90}`)
        break;
    default:
        document.write("Ocorreu algo errado!!")
        break;
}