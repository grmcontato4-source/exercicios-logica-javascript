function Somar(){
    let num1 = parseFloat(document.getElementById("numeros01").value);
    let num2 = parseFloat(document.getElementById("numeros02").value);
    

    let soma = num1 + num2;

    document.getElementById("resultado").innerText = "Resultado: " + soma 
}
function Multiplicaçao(){
    let num1 = parseFloat(document.getElementById("numeros01").value);
    let num2 = parseFloat(document.getElementById("numeros02").value);
    

    let Multiplicaçao = num1 * num2;
    document.getElementById("resultado").innerText = "Resultado: " + Multiplicaçao 
}
function Subtrair(){
    let num1 = parseFloat(document.getElementById("numeros01").value);
    let num2 = parseFloat(document.getElementById("numeros02").value);
    

    let Subtrair = num1 - num2;
    document.getElementById("resultado").innerText = "Resultado: " + Subtrair
}
function Divisão(){
    let num1 = parseFloat(document.getElementById("numeros01").value);
    let num2 = parseFloat(document.getElementById("numeros02").value);
    

    let Divisão = num1 / num2;
    document.getElementById("resultado").innerText = "Resultado: " + Divisão
}