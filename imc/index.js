function calculeIMC(){
    const nome = document.getElementById('nome').value;
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const resultadoIMC = peso / (altura * altura);
    document.getElementById("resultadoIMC").innerHTML = `${nome}: ${resultadoIMC.toFixed(2)}`;
    let resposta;
    let cor;

    if(resultadoIMC <= 15.99){
        resposta = `Magreza Grave <br/>`;
        cor = 'perigo';
    }
    else if(resultadoIMC >= 16 && resultadoIMC <= 16.99){
        resposta = `Magreza Moderada </br>`;
        cor = 'alerta'
    }
    else if(resultadoIMC >= 17 && resultadoIMC <= 24.9){
        resposta = `Saudável </br>`;
        cor = 'deboa'
    }
    else if(resultadoIMC >= 25 && resultadoIMC <= 29.9){
        resposta = `Sobrepeso </br>`;
        cor = 'atencao'
    }
    else if(resultadoIMC >= 23 && resultadoIMC <= 34.9){
        resposta = `Obesidade Grau 1 <br/>`;
        cor = 'cuidado'
    }
    else if(resultadoIMC >= 35 && resultadoIMC <= 39.9){
        resposta = `Obesidade Grau 2`;
        cor = 'alerta'
    }
    else if(resultadoIMC >= 40){
        resposta = `Obesidade Grau 3`;
        cor = 'perigo';
    }
    document.getElementById("resultadoCategoria").innerHTML = `Categoria = ${resposta}`
    document.getElementById("resultadoCategoria").className = cor;
}
