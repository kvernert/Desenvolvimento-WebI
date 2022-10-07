let visor = document.getElementById("visor");

let btnNumeros = document.getElementsByClassName("botao-numero");
let btnOperador = document.getElementsByClassName("botao-operador");
let btnApagar = document.getElementById("botaoApagaUm");

let valorSalvo = null;
let operadorSalvo = null;

for (let botao of btnNumeros) {
    botao.addEventListener("click", cliqueNumero);
}

function cliqueNumero(event) {
    if (isNaN(visor.innerHTML) === false)
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    else visor.innerHTML = event.target.innerHTML;
}
for (let botao of btnOperador) {
    botao.addEventListener("click", cliqueOperdaor);
}
function cliqueOperdaor(event) {
    if (isNaN(visor.innerHTML) === false) {
        if (valorSalvo === null) {
            valorSalvo = Number(visor.innerHTML);
        } else {
            valorSalvo = executaOperacao(
                valorSalvo,
                operadorSalvo,
                Number(visor.innerHTML)
            );
        }
    }

    operadorSalvo = event.target.innerHTML;
    visor.innerHTML = operadorSalvo;
}
let btnAC = document.getElementById("botaoAC");
btnAC.addEventListener("click", limpaVisor);

function limpaVisor(event) {
    visor.innerHTML = "";
    valorSalvo = null;
    operadorSalvo = null;
}
let btnApaga = document.getElementById("botaoApagaUm");
btnApaga.addEventListener("click", limparUm);

function limparUm(event) {
    visor.innerHTML = visor.innerHTML.slice(0, visor.innerHTML.length - 1);
}
let botaoIgual = document.getElementById("botaoIgual");
botaoIgual.addEventListener("click", calculaResultado);

function calculaResultado(event) {
    if (
        valorSalvo != null &&
        operadorSalvo != null &&
        isNaN(visor.innerHTML) === false
    ) {
        visor.innerHTML = executaOperacao(valorSalvo, operadorSalvo, Number(visor.innerHTML));
        valorSalvo = null;
        operadorSalvo = null;
    }
}
function executaOperacao(valor1, operador, valor2) {
    if (operador === "×") {
        return valor1 * valor2;
    } else if (operador === "÷") {
        return valor1 / valor2;
    } else if (operador === "-") {
        return valor1 - valor2;
    } else if (operador === "+") {
        return valor1 + valor2;
    }
}
let body = document.getElementsByTagName("body")[0];
body.addEventListener("keydown", pressionouTecla);
function pressionouTecla(event) {
    if (event.key === "×") {
        document.getElementById("botaoMultiplicacao").click();
    } else if (event.key === "÷") {
        document.getElementById("botaoDivisao").click();
    } else if (event.key === "-") {
        document.getElementById("botaoMenos").click();
    } else if (event.key === "+") {
        document.getElementById("botaoMais").click();
    }
}
