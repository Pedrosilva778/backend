// 5. NOTA FINAL
function calcularGrade(p1, p2, f) {
    return (p1 * 0.3) + (p2 * 0.4) + (f * 0.3);
}

var finalGrade = calcularGrade(15, 15, 15);
console.log("A nota final é: " + finalGrade);

function aprovadoOuReprovado(tpratico, tteorico) {
    var nota = (tpratico + tteorico) / 2;

    if (nota >= 10) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}




// 6. NOME DO MÊS
function nomeMes() {
    var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
                 "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    console.log(meses);
}



// 7. CALCULADORA SIMPLES
function calcular(a, b, op) {
    if (op == "+") {
        console.log(a + b);
    } else if (op == "-") {
        console.log(a - b);
    } else if (op == "*") {
        console.log(a * b);
    } else if (op == "/") {
        console.log(a / b);
    } else if (op == "^") {
        console.log(a ** b);
    }
}




// 8. MÚLTIPLOS DE 5 MENORES QUE 20
function multiplos5() {
    for (var i = 5; i < 20; i += 5) {
        console.log(i);
    }
}



// 9. SOMA DOS PRIMEIROS 100 INTEIROS
function soma100() {
    var soma = 0;
    for (var i = 1; i <= 100; i++) {
        soma += i;
    }
    console.log(soma);
}



// 10. FATORIAL
function fatorial(n) {
    var fat = 1;
    for (var i = 1; i <= n; i++) {
        fat *= i;
    }
    return fat;
}



// 11. MÁXIMO, MÍNIMO E MÉDIA
function maximo(nums) {
    return Math.max(...nums);
}

function minimo(nums) {
    return Math.min(...nums);
}

function media(nums) {
    var soma = 0;
    for (var i = 0; i < nums.length; i++) {
        soma += nums[i];
    }
    return soma / nums.length;
}