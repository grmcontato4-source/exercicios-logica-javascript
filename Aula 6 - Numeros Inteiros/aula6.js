function at1(){
    let x = Number(document.getElementById("x").value);
    let resultado = 1; 

    while(x>=1){
        resultado *= x;   
        x --;

    }
    
    document.getElementById("resultado").innerHTML = resultado;

}

function at2(){
    let d = Number(document.getElementById("d").value);
    let resultado = ""; 

    let i = 1;

    while(i<d){
        if(d % i  === 0) {
            resultado += i + " , ";
        }
        i ++;

    }
    
    document.getElementById("resultado2").innerHTML = resultado;

}

function at3(){
    let s = Number(document.getElementById("s").value);
    let resultado = ""; 
    let soma = 0;
    let i = 1;

    while(i < s){
        if(s % i === 0) {
            resultado += i + " , ";
            soma += i;
        }
        i++;
    }
    
    document.getElementById("resultado3").innerHTML =
        "Divisores: " + resultado + "<br>" +
        "Soma: " + soma;
}


function at4() {
    let p = Number(document.getElementById("p").value);
    let resultado = "";
    let soma = 0;
    let i = 1;

    while (i < p) {
        if (p % i === 0) {
            resultado += i + ", ";
            soma += i;
        }

        i++;
    }

    let msg = "";

    if (soma === p) {
        msg = "<br>o numero e perfeito!";
    } else {
        msg = "<br>o numero nao e perfeito!";
    }

    document.getElementById("resultado4").innerHTML =
        "Divisores: " + resultado + "<br>" +
        "Soma: " + soma +
        msg;
}

