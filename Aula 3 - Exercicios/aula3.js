function verificar(){
    let numero = Number(document.getElementById("intervalo").value);

    if(numero>=10 && numero <=50){
        document.getElementById("result").innerHTML = "Dentro do intervalo"
    }else{
     document.getElementById("result").innerHTML = "Fora do intervalo"   
    }
}
function verificar2(){
    let numero = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);

    if(numero>=0 && numero2 >=0){
        document.getElementById("result2").innerHTML = "Ambos sao postivos"
    }else if(numero<0 && numero2 >=0){
        document.getElementById("result2").innerHTML = "Primeiro numero e negativo e o Segundo Positivo"   
     }else if(numero>=0 && numero2 <0){
        document.getElementById("result2").innerHTML = "Primeiro e Positivo e o Segundo numero e negativo"   
    }else{
        document.getElementById("result2").innerHTML = "Os dois sao negativos"   
}
}
function verificar3(){
    let numero = Number(document.getElementById("num").value);

    if(numero<50){
        document.getElementById("result3").innerHTML = "Valor Baixo";
    } else if(numero >= 50 && numero <=100){
        document.getElementById("result3").innerHTML = "Valor Medio";
    } else {
        document.getElementById("result3").innerHTML = "Valor Alto";
    }
}
function verificar4(){
    let numero = Number(document.getElementById("num4").value);

    if(numero<=5){
        document.getElementById("result4").innerHTML = "Situação Regular";
    } else if(numero >= 6 && numero <=10){
        document.getElementById("result4").innerHTML = "Atenção";
    } else {
        document.getElementById("result4").innerHTML = "Reprovado por Falta";
    }
}
function verificar5(){
    let numero1 = Number(document.getElementById("var1").value);
    let numero2 = Number(document.getElementById("var2").value);
    let numero3 = Number(document.getElementById("var3").value);

    if(numero1 > 0 && numero2 > 0 && numero3 > 0){

        if(numero1 + numero2 > numero3 && numero1 + numero3 > numero2 && numero2 + numero3 > numero1){

            if(numero1 === numero2 && numero2 === numero3){
                document.getElementById("result5").innerHTML = "Triângulo Equilátero";

            } else if(numero1 === numero2 || numero1 === numero3 || numero2 === numero3){
                document.getElementById("result5").innerHTML = "Triângulo Isósceles";

            } else {
                document.getElementById("result5").innerHTML = "Triângulo Escaleno";
            }

        } else {
            document.getElementById("result5").innerHTML = "Não é possível formar um triângulo";
        }

    } else {
        document.getElementById("result5").innerHTML = "Os lados devem ser maiores que zero";
    }
}

function verificar6(){
    let numero1 = Number(document.getElementById("var").value);

    if(numero1 < 12){
        document.getElementById("resultado6").innerHTML = "Ganha 50% de desconto";

            } else if(numero1 >=12 && numero1 <= 17){
                document.getElementById("resultado6").innerHTML = "Ganha 30% de desconto";

            } else if(numero1 >=18 && numero1 <= 59){
                document.getElementById("resultado6").innerHTML = "Sem Desconto";
            } else {
            document.getElementById("resultado6").innerHTML = "Ganha 40% de desconto";
        }
    }

function verificar7(){
    let ano = Number(document.getElementById("ano").value);

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        document.getElementById("resultado7").innerHTML = "E um ano bissexto! tem 366 dias";
    } else {
        document.getElementById("resultado7").innerHTML = "Nao e um ano bissexto. tem 365 dias";
    }
}

function verificar8(){
    let media = Number(document.getElementById("media").value);
    let frequencia = Number(document.getElementById("frq").value);

    if(media>=7 && frequencia >=75){
        document.getElementById("resultado8").innerHTML = "Aprovado"
    }else if(frequencia<75 ){
        document.getElementById("resultado8").innerHTML = "Reprovado por falta"   
    }else{
        document.getElementById("resultado8").innerHTML = "Reprovado por falta"   
}
}

function verificar9(){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0) {
        document.getElementById("resultado9").innerHTML = "Valores inválidos";
        return;
    }

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        document.getElementById("resultado9").innerHTML = "Abaixo do peso";
    } else if (imc < 25) {
        document.getElementById("resultado9").innerHTML = "peso normal";
    } else if (imc < 30) {
        document.getElementById("resultado9").innerHTML = "sobrepeso";
    } else {
        document.getElementById("resultado9").innerHTML = "obesidade";
    }
}

function verificar10(){
    let saldo = Number(document.getElementById("saldo").value);
    let valor = Number(document.getElementById("saq").value);

    if (valor > saldo) {
        document.getElementById("resultado10").innerHTML = "saldo insuficiente";
    } else if (valor <= 0) {
        document.getElementById("resultado10").innerHTML = "valor inválido";
    } else {
        document.getElementById("resultado10").innerHTML = "saque realizado";
    }
}

function verificar11(){
    let numero = Number(document.getElementById("number").value);

    if (numero === 0 ) {
        document.getElementById("resultado11").innerHTML = "O numero e zero";
    } else if (numero % 2 === 0 && numero > 0) {
        document.getElementById("resultado11").innerHTML = "Numero Par, Positivo";
    } else if (numero % 2 !== 0 && numero > 0) {
        document.getElementById("resultado11").innerHTML = "Numero Impar, Positivo";
    } else if (numero % 2 === 0 && numero < 0) {
        document.getElementById("resultado11").innerHTML = "Numero Par, Negativo";
    } else {
        document.getElementById("resultado11").innerHTML = "Numero Impar, Negativo";
    }
}

function verificar12(){
    let sal = Number(document.getElementById("sal").value);

    if (sal <= 2000) {
        document.getElementById("resultado12").innerHTML = "Isento";
    } 
    else if (sal >= 2001 && sal <= 3500) {
        let imposto = sal * 0.08;
        let salarioFinal = sal - imposto;

        document.getElementById("resultado12").innerHTML =
            "Imposto: " + imposto + " | Salario final: " + salarioFinal;
    }
    else if (sal >= 3501 && sal <= 5000) {
        let imposto = sal * 0.15;
        let salarioFinal = sal - imposto;

        document.getElementById("resultado12").innerHTML =
            "Imposto: " + imposto + " | Salario final: " + salarioFinal;
    }
    else {
        let imposto = sal * 0.22;
        let salarioFinal = sal - imposto;

        document.getElementById("resultado12").innerHTML =
            "Imposto: " + imposto + " | Salario final: " + salarioFinal;
    }
}

