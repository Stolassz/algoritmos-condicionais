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
function valoresIguais() {
    let a = parseInt(prompt("Digite um número inteiro A:"));
    let b = parseInt(prompt("Digite um número inteiro B:"));
    if (a === b) {
        let c = a + b;
        alert("A soma de A + B é: " + c);
    } else {
        let c = a * b;
        alert("A multiplicação de A * B é: " + c);
    }
}

// 5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo,imprimindo o resultado. 
function valorPositivoNegativo() {
    let numero = Number(prompt("Digite um número:"));
    if (numero > 0) {
        let dobro = numero * 2;
        alert("O dobro do número " + numero + " é: " + dobro);
    } else if (numero < 0) {
        let triplo = numero * 3;
        alert("O triplo do número " + numero + " é: " + triplo);
    } else {
        alert("O número digitado é zero.");
    }
}

// 6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.
function valorBooleano() {
    let valor1 = Boolean(prompt("Digite o primeiro valor booleano (true/false):") === "true");
    let valor2 = Boolean(prompt("Digite o segundo valor booleano (true/false):") === "true");

    if (valor1 && valor2) {
        alert("Ambos os valores são VERDADEIROS.");
    } else if (!valor1 && !valor2) {
        alert("Ambos os valores são FALSOS.");
    } else {
        alert("Os valores são diferentes: um é VERDADEIRO e o outro é FALSO.");
    }
}

// 7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação. 
function lerVariaveis() {
    let numero = Number(prompt("Digite um número:"));
    if (numero % 2 === 0) {
        let resultado = numero + 5;
        alert("O número é par. O resultado da soma de " + numero + " + 5 é: " + resultado);
    } else {
        let resultado = numero + 8;
        alert("O número é ímpar. O resultado da soma de " + numero + " + 8 é: " + resultado);
    }
}

// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente. 
// Resolução com array
// function ordenarDecrescente() {
//     let a = parseInt(prompt("Digite o primeiro número inteiro:"));
//     let b = parseInt(prompt("Digite o segundo número inteiro:"));
//     let c = parseInt(prompt("Digite o terceiro número inteiro:"));
//     let numeros = [a, b, c];
//     numeros.sort(function(a, b,) {
//         return b - a;
//     });
//     alert("Os números em ordem decrescente são: " + numeros.join(", "));
// }

// Resolução utilizando condicional
function ordenarDecrescente() {
    let a = parseInt(prompt("Digite o valor de A:"));
    let b = parseInt(prompt("Digite o valor de B:"));
    let c = parseInt(prompt("Digite o valor de C:"));
    
    if (a > b && a > c) { 
        if (b > c) {
            alert(`${a}, ${b}, ${c}`)
        } else {
            alert(`${a}, ${c}, ${b}`)
        }
    } else if (b > a && b > c) {
        if (c > a) {
            alert(`${b}, ${c}, ${a}`)
        } else {
            alert(`${b}, ${a}, ${c}`)
        }
    } else {
        if (b > a) {
            alert(`${c}, ${b}, ${a}`)
        } else {
            alert(`${c}, ${a}, ${b}`)
        }
    }
}

// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7. 
function pesoIdeal() {
    let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
    let sexo = String(prompt("Digite seu sexo (M/F):")).toUpperCase();
    let pesoIdeal;

    // if (sexo === "M") {
    //     pesoIdeal = (72.7 * altura) - 58;
    // } else if (sexo === "F") {
    //     pesoIdeal = (62.1 * altura) - 44.7;
    // }

    switch(sexo) {
        case "M":
            pesoIdeal = (72.7 * altura) - 58;
            break;
        case "F":
            pesoIdeal = (62.1 * altura) - 44.7;
            break;
        default:
            alert("Informações inválidas");
            return;   
    }
    alert("Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
}

// 10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura ).  Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo:
// IMC em adultos Condição
// Abaixo de 18,5 Abaixo do peso
// Entre 18,5 e 25 Peso normal
// Entre 25 e 30 Acima do peso
// Acima de 30 obeso
function descobrirImc() {
    let peso = parseFloat(prompt("Digite seu peso em kg (ex: 70.5):"));
    let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
    const imc = peso / (altura * altura);  // ou (altura ** 2)

    // if (imc < 18.5) {
    //     alert("Seu IMC é: " + imc.toFixed(2) + " - Abaixo do peso");
    // } else if (imc >= 18.5 && imc < 25) {
    //     alert("Seu IMC é: " + imc.toFixed(2) + " - Peso normal");
    // } else if (imc >= 25 && imc < 30) {
    //     alert("Seu IMC é: " + imc.toFixed(2) + " - Acima do peso");
    // } else {
    //     alert("Seu IMC é: " + imc.toFixed(2) + " - Obeso");
    // }

    let condicao;

    switch(true) {
        case imc < 18.5:    
            condicao = "Abaixo do Peso";
            break;
        case imc >= 18.5 && imc < 25:
            condicao = "Peso ideal";
            break;
        case imc >= 25 && imc < 30:
            condicao = "Acima do peso";
            break;
        case imc >= 30:
            condicao = "Obesidade"
            break;
        default:
            alert("Dados inválidos.")
        return;
    }
    alert(`
        IMC: ${imc.toFixed(2)}
        Condição: ${condicao}
        `)
}

// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 
// Código Condição de pagamento
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10% 
function verDesconto() {
    let precoEtiqueta = parseFloat(prompt("Digite o preço normal de etiqueta do produto (ex: 100.00):"));
    let codigoPagamento = parseInt(prompt("Digite o código da condição de pagamento (1-4):"));
    let valorFinal;

    switch (codigoPagamento) {
        case 1:
            valorFinal = precoEtiqueta * 0.9; // 10% de desconto
            break;
        case 2:
            valorFinal = precoEtiqueta * 0.85; // 15% de desconto
            break;
        case 3:
            valorFinal = precoEtiqueta; // preço normal
            break;
        case 4:
            valorFinal = precoEtiqueta * 1.1; // 10% de juros
            break;
        default:
            alert("Código de pagamento inválido.");
            return;
    }

    alert("O valor a ser pago é: R$ " + valorFinal.toFixed(2));
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
    let numeroIdentificacao = prompt("Digite o número de identificação do aluno:");
    let nota1 = parseFloat(prompt("Digite a primeira nota (ex: 8.5):"));
    let nota2 = parseFloat(prompt("Digite a segunda nota (ex: 7.5):"));
    let nota3 = parseFloat(prompt("Digite a terceira nota (ex: 9.0):"));
    let me = parseFloat(prompt("Digite a média dos exercícios (ex: 8.0):"));

    let ma = (nota1 + nota2 * 2 + nota3 * 3 + me) / 7;
    let conceito;

    if (ma >= 90) {
        conceito = "A";
    } else if (ma >= 75) {
        conceito = "B";
    } else if (ma >= 60) {
        conceito = "C";
    } else if (ma >= 40) {
        conceito = "D";
    } else {
        conceito = "E";
    }

    let mensagem = conceito === "A" || conceito === "B" || conceito === "C" ? "Aprovado" : "Reprovado";

    alert(`Número de identificação: ${numeroIdentificacao}\nNotas: ${nota1}, ${nota2}, ${nota3}\nMédia dos exercícios: ${me.toFixed(2)}\nMédia de aproveitamento: ${ma.toFixed(2)}\nConceito: ${conceito}\nMensagem: ${mensagem}`);
}
