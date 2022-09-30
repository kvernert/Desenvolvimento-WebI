let visor = document.getElementById("visor");

let btnNumeros = document.getElementsByClassName("botao-numero");
let btnOperador = document.getElementsByClassName("botao-operador");
let btnApagar = document.getElementById("botaoApagaUm");

let valor1 = null;
let operador = null;

for (let botao of btnNumeros) {
  botao.addEventListener("click", cliqueNumero);
}

function cliqueNumero(event) {
    if (visor.innerHTML === "+")
        visor.innerHTML = event.target.innerHTML;
    else
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}
for (let botao of btnOperador) {
  botao.addEventListener("click", cliqueOperdaor);
}

function realiza_operacao(operador, valor1, valor2){
    if (operador === "+"){
        return valor1+valor2;
    }
    else if(operador === "-"){
        return valor1 - valor2;
    } 
    else if(operador === "÷"){
        return valor1 / valor2;   
    }
    else if (operador === "×"){
        return valor1 * valor2
    }
function cliqueOperdaor(event) {

    if (valor1 === null){
        valor1 = Number(visor.innerHTML);
        operador = event.target.innerHTML;
        visor.innerHTML = event.target.innerHTML;
    }else{
        let valor2 = Number(visor.innerHTML);
        visor.innerHTML = realiza_operacao(operador, valor1, valor2);
        valor1 = Number(visor.innerHTML);


    }
  
}
let btnAC = document.getElementById("botaoAC");
btnAC.addEventListener("click", limpaVisor);

function limpaVisor(event) {
  visor.innerHTML = "";
}
let btnApaga = document.getElementById("botaoApagaUm");
btnApaga.addEventListener("click", limparUm);

function limparUm(event) {
  visor.innerHTML = visor.innerHTML.slice(0, visor.innerHTML.length - 1);
}
