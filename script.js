//1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.
function somaMaior() {
    let a = Number(prompt("Digite um número:"));
    let b = Number(prompt("Digite outro número:"));
    let c = Number(prompt("Digite mais um número:"));
    let soma = a + b
    if (soma < c) {
        alert("A soma de A + B é: " + soma);
    } else {
        alert("Fim!");
    }
}

// 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). 
function tempoCasamento() {
    let nome = String(prompt("Digite seu nome:")).toUpperCase();
    let sexo = String(prompt("Digite seu sexo (M/F):")).toUpperCase();
    let estadoCivil = String(prompt("Digite seu estado civil (SOLTEIRO/A, CASADO/A, DIVORCIADO/A, VIÚVO/A):")).toUpperCase();
    if (sexo === "F" && estadoCivil === "CASADA") {
        let tempoCasamento = Number(prompt("Digite o tempo de casamento (anos):"));
        alert(`
            =====================
            Nome: ${nome},
            Sexo: ${sexo},
            Estado Civil: ${estadoCivil},
            Tempo de Casamento: ${tempoCasamento} anos.
            =====================
        `);
    }
}

// 3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar. 
function imparPar() {
    let numero = Number(prompt("Digite um número:"));
    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }
}



// 4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.




// 5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo,imprimindo o resultado. 
function valorPositivoNegativo() {

}



// 6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.
function valorBooleano() {

}



// 7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação. 
function lerVariaveis() {

}



// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente. 
function ordenarDecrescente() {

}



// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7. 
function pesoIdeal() {

}



// 10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura ).  Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo:
// IMC em adultos Condição
// Abaixo de 18,5 Abaixo do peso
// Entre 18,5 e 25 Peso normal
// Entre 25 e 30 Acima do peso
// Acima de 30 obeso
function descobrirImc() {

}



// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 
// Código Condição de pagamento
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10% 
function verDesconto() {

}



// 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de aproveitamento, usando a fórmula:
// MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
// Média de aproveitamento Conceito
// >= 90 A
// >= 75 e < 90 B
// >= 60 e < 75 C
// >= 40 e < 60 D
// < 40 E 
function verificarMedia() {

}
