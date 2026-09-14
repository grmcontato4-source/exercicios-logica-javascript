function soma(){
    let i = 1;
    let soma = 0
    while(i<=10){
        soma = soma +i;
        i = i + 1;
    }

    document.getElementById("Resultado").innerHTML= soma;

}

function tabuada(){
    let i = 1;
    let resultado = ""; 

    while(i<=10){
        resultado += "5 x" + i + "=" + (5*i) + "<br>"    
        i++;

    }
    
    document.getElementById("Resultado2").innerHTML = resultado;

}

function cinco(){
    let i = 5;
    let resultado = ""; 

    while(i<=50){
        resultado += i + "<br>";   
        i += 5;

    }
    
    document.getElementById("Resultado3").innerHTML = resultado;

}

function Dobro(){
    let i = 1;
    let resultado = ""; 

    while(i<=128){
        resultado += i + "<br>";   
        i *= 2;

    }
    
    document.getElementById("Resultado4").innerHTML = resultado;

}

function quinze(){
    let i = 15;
    let resultado = ""; 

    while(i<=30){
        resultado += i + "<br>";   
        i += 1;

    }
    
    document.getElementById("Resultado5").innerHTML = resultado;

}

function cem(){
    let i = 1;
    let resultado = 0; 

    while(i<=100){
        resultado ++;   
        i ++;

    }
    
    document.getElementById("Resultado6").innerHTML = resultado;

}

function vinte(){
    let i = 2;
    let resultado = ""; 

    while(i<=20){
        resultado += i + "<br>";   
        i += 2;

    }
    
    document.getElementById("Resultado7").innerHTML = resultado;

}

function Multiplos(){
    let i = 3;
    let resultado = ""; 

    while(i<=30){
        resultado += i + "<br>";   
        i += 3;

    }
    
    document.getElementById("Resultado8").innerHTML = resultado;

}

function div(){
    let i = 10;
    let resultado = ""; 

    while(i<=100){
        resultado += i + "<br>";   
        i += 10;

    }
    
    document.getElementById("Resultado9").innerHTML = resultado;

}

function fat(){
    let i = 5;
    let resultado = 1; 

    while(i>=1){
        resultado *= i;   
        i --;

    }
    
    document.getElementById("Resultado10").innerHTML = resultado;

}

function end(){
    let i = 20;
    let resultado = ""; 

    while(i>=0){
        resultado += i + "<br>";   
        i--;

    }
    
resultado += "FIM";

    document.getElementById("Resultado11").innerHTML = resultado;

}















