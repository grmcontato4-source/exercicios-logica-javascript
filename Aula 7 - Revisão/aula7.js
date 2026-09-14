function at1(){
    let x = Number(document.getElementById("x").value);
    let resultado = ""; 
    let i = 1;
    
    while(i<=x){
        resultado += i + "<br>";
          
        i ++;

    }
    
    document.getElementById("resultado").innerHTML = resultado;

}

function at2(){
    let x = Number(document.getElementById("x2").value);
    let resultado2 = ""; 
    let i = 1;
    
    while(i <= x){
        if(i % 2 != 0) {
            resultado2 += i + "<br>";
        }
          
        i++;
    }
    
    document.getElementById("resultado2").innerHTML = resultado2;
}

function at3(){
    let x = Number(document.getElementById("x3").value);
    let resultado3 = 0; 
    let i = 1;
    
    while(i <= x){
        if(i % 2 == 0) {
            resultado3 += i;
        }
          
        i++;
    }
    
    document.getElementById("resultado3").innerHTML = resultado3;
}

function at4() {
    let x = Number(document.getElementById("x4").value);
    let resultado4 = "";

    let i = 1;  

    while (i <= x) {
        if (i % 3 === 0)
        resultado4 += i + "<br>";
        i++;
    }

    document.getElementById("resultado4").innerHTML = resultado4;
}

function at5() {
    let x = Number(document.getElementById("x5").value);
    let resultado5 = 0;

    let i = 1;  

    while (i <= x) {
        if (i % 2 != 0){
        resultado5++;
    }
        i++;
    }

    document.getElementById("resultado5").innerHTML = resultado5;
}