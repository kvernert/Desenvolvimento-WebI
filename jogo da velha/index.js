
const numero = Number(prompt("Informe a quantidade de partidas que deseja jogar: "));
let jogador = "X";

let vitoriaX = 0;
let vitoriaO = 0;

let partida_continua = true;

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");

let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");

let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");

document.getElementById('resultado');


function jogada(casa) {
    if (casa.innerHTML === "" && partida_continua){
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();
    }
        
}
function alterna_jogador() {
    if (jogador === "X"){
        jogador = "O";
    }else{
        jogador = "X";
    }
}
function verifica_ganhador() {
     if(casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa01.innerHTML  === casa03.innerHTML){
        alert(`Vencedor: ${casa01.innerHTML}`);
        placar(casa01.innerHTML);
    } else if (casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML) {
        alert (`Vencedor: ${casa04.innerHTML}`);
        placar(casa04.innerHTML);
    } else if (casa07.innerHTML != "" && casa07.innerHTML === casa08.innerHTML && casa07.innerHTML === casa09.innerHTML) {
        alert (`Vencedor: ${casa07.innerHTML}`);
        placar(casa07.innerHTML);
    } else if (casa01.innerHTML != "" && casa01.innerHTML === casa04.innerHTML && casa01.innerHTML === casa07.innerHTML) {
        alert (`Vencedor: ${casa01.innerHTML}`);
        placar(casa01.innerHTML);
    } else if (casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa02.innerHTML === casa08.innerHTML) {
        alert (`Vencedor: ${casa02.innerHTML}`);
        placar(casa02.innerHTML);
    } else if (casa03.innerHTML != "" && casa03.innerHTML === casa06.innerHTML && casa03.innerHTML === casa09.innerHTML) {
        alert (`Vencedor: ${casa03.innerHTML}`);
        placar(casa03.innerHTML);
    } else if (casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa01.innerHTML === casa09.innerHTML) {
        alert (`Vencedor: ${casa01.innerHTML}`);
        placar(casa01.innerHTML);
    } else if (casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa07.innerHTML) {
        alert (`Vencedor: ${casa03.innerHTML}`);
        placar(casa03.innerHTML);
    } else if (casa01.innerHTML != "" && casa02.innerHTML != "" && casa03.innerHTML != "" && casa04.innerHTML != "" && casa05.innerHTML != "" && casa06.innerHTML != "" && casa07.innerHTML != "" && casa08.innerHTML != "" && casa09.innerHTML != "")
        alert (`Deu velha!`);
    }
function placar(vencedor) {
    partida_continua = false;
    if (vencedor === "X"){
        vitoriaX = vitoriaX + 1;

    }else{
        vitoriaO = vitoriaO + 1;
    }
    document.getElementById("placar").innerHTML = `<h1>Vitórias</h1> <p>X: ${vitoriaX}</p> <br> 
    <p>O: ${vitoriaO}</p>`

    if (vitoriaX+vitoriaO === numero){
        alert("Temos um campeão!");
        if(vitoriaO > vitoriaX){
            document.getElementById("placar").style.animation = "final 3s 1";
            
        }
        else {
            document.getElementById("placar").style.animation = "final 3s 1";
        }
    }


}
function reinicia(){
        jogador = prompt("Informe X ou O").toUpperCase();
    partida_continua = true;
    casa01.innerHTML = "";
    casa02.innerHTML = "";
    casa03.innerHTML = "";
    casa04.innerHTML = "";
    casa05.innerHTML = "";
    casa06.innerHTML = "";
    casa07.innerHTML = "";
    casa08.innerHTML = "";
    casa09.innerHTML = "";

}

