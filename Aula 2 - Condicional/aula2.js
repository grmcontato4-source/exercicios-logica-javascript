function verificar(){
    let numero = Number(document.getElementById("numero").value);

    if(numero%2 ==0){
        document.getElementById("Resultado").innerHTML = "O numero e PAR"
    }else{
     document.getElementById("Resultado").innerHTML = "O numero e Impar"   
    }
}

function verificar2(){
    let numero2 = Number(document.getElementById("numero2").value);

    if(numero2>=6){
        document.getElementById("resul").innerHTML = "Aprovado"
    }else{
     document.getElementById("resul").innerHTML = "reprovado"   
    }
}

function verificar3(){
    let numero2 = Number(document.getElementById("numero3").value);

    if(numero2>=0){
        document.getElementById("resul2").innerHTML = "Positivo"
    }else{
     document.getElementById("resul2").innerHTML = "Negativo"   
    }
}

function verificar4(){
    let numero2 = Number(document.getElementById("numero4").value);

    if(numero2>=18){
        document.getElementById("resul3").innerHTML = "Pode Dirigir"
    }else{
     document.getElementById("resul3").innerHTML = "Nao Pode Dirigir"   
    }
}

function verificar5(){
    let numero2 = Number(document.getElementById("numero5").value);

    if(numero2==1234){
        document.getElementById("resul4").innerHTML = "Acesso Permitido"
    }else{
     document.getElementById("resul4").innerHTML = "Acesso Negado"   
    }

    
}
function verificar6(){
    let numero2 = Number(document.getElementById("numero6").value);

    if(numero2 >= 7){
        document.getElementById("resul5").innerHTML = "Aprovado";
    } else if(numero2 >= 5 && numero2 < 7){
        document.getElementById("resul5").innerHTML = "Recuperação";
    } else {
        document.getElementById("resul5").innerHTML = "Reprovado";
    }
}
function verificar7(){
    let numero2 = Number(document.getElementById("numero7").value);

    if(numero2 >= 30){
        document.getElementById("resul6").innerHTML = "Esta muito quente";
    } else if(numero2 >= 20 && numero2 < 30){
        document.getElementById("resul6").innerHTML = "Temperatura Agradavel";
    } else {
        document.getElementById("resul6").innerHTML = "Esta Frio";
    }
}function verificar8(){
    let numero2 = Number(document.getElementById("numero8").value);

    if(numero2 >= 30){
        document.getElementById("resul7").innerHTML = "Esta muito quente";
    } else if(numero2 >= 20 && numero2 < 30){
        document.getElementById("resul7").innerHTML = "Temperatura Agradavel";
    } else {
        document.getElementById("resul7").innerHTML = "Esta Frio";
    }
}
function verificar8(){
    let valor = Number(document.getElementById("valor8").value);

    if(valor >= 100){
        let desconto = valor * 0.10;
        let valorFinal = valor - desconto;

        document.getElementById("resul8").innerHTML =
            "Valor da compra: R$ " + valor +
            "<br>Desconto: R$ " + desconto +
            "<br>Valor final: R$ " + valorFinal;
    } else {
        document.getElementById("resul8").innerHTML =
            "Valor da compra: R$ " + valor +
            "<br>Desconto: R$ 0" +
            "<br>Valor final: R$ " + valor;
    }
}
function verificar9(){
    let usuario = document.getElementById("usuario9").value;
    let senha = document.getElementById("senha9").value;

    if(usuario == "admin" && senha == "1234"){
        document.getElementById("resul9").innerHTML =
            "Login realizado com sucesso!";
    } else if(usuario == "admin" && senha != "1234"){
        document.getElementById("resul9").innerHTML =
            "Senha incorreta!";
    } else {
        document.getElementById("resul9").innerHTML =
            "Usuário não encontrado!";
    }
}
