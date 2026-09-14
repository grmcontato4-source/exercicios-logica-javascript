    function atv1() {
        let numero = 1;
        while (numero <= 10){
            document.getElementById("numero").innerHTML += numero + "<br>";
            numero ++;
        }

    }
    function atv2 (){
        let numero2 = 1;
        while(numero2 <= 20){
            if(numero2 % 2 == 0){
            }else{
                    document.getElementById("numero2").innerHTML += numero2 + "<br>";

                    
                }
            numero2++;
            }
        }

    function atv3(){
        let quantidade = 0;
        let numero3 = 1;
        while(numero3 <= 30){
            if(numero3 % 5 == 0){
                quantidade++;
                document.getElementById("numero3").innerHTML += numero3 + "<br>";
            }
            numero3++;

            
        }
        console.log(quantidade);
    }

    function atv4(){
        let quantidade = 0;
        let numero4 = 1;
        let x = document.getElementById("x").value;
        while(numero4 <= x  ){
            if(numero4 % 4 == 0){
                quantidade++;
                document.getElementById("numero4").innerHTML += numero4 + "<br>";
            }
            numero4++;

            
        }
        console.log(quantidade);
    }

    function atv5(){
        let quantidade = 0;
        let numero5 = 1;
        let mul = document.getElementById("mul").value;
        while(numero5 <= mul  ){
            if(numero5 % 2 == 0){
                quantidade++;
                document.getElementById("numero5").innerHTML += numero5 + "<br>";
            }
            numero5++;

            
        }
        console.log(quantidade);
    }

    function atv6() {
        let quantidade = 0;
        let numero6 = 1;
        let med = Number(document.getElementById("med").value);
        let soma = 0;

        document.getElementById("numero6").innerHTML = "";

        while (numero6 <= med) {
            soma += numero6;
            quantidade++;

            let resultado = soma / quantidade;

            document.getElementById("numero6").innerHTML += resultado + "<br>";

            numero6++;
        }
    }

function atv7() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("numero7").innerHTML = "";

    while (num1 <= num2) {

        if (num1 > 30 && num1 < 60) {
            document.getElementById("numero7").innerHTML += num1 + "<br>";
        }

        num1++;
    }
}

function atv8() {
    let soma = 0;
    let numero8 = 1;
    let num = Number(document.getElementById("num").value);

    while (numero8 <= num) {
        if (numero8 % 2 != 0) {
            soma += numero8;
        }

        numero8++;
    }

    document.getElementById("numero8").innerHTML = soma;
}

function atv9() {
    let quantidade = 0;
    let numero9 = 1;
    let cinco = Number(document.getElementById("cinco").value);

    while (numero9 <= cinco) {
        if (numero9 % 5 == 0) {
            quantidade++;
        }

        numero9++;
    }

    document.getElementById("numero9").innerHTML = quantidade;
}





