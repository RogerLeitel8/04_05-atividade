let quadrados = document.querySelectorAll(".linha div");
let contador = 0;
let botao = document.querySelector("button");
let resposta = document.querySelector("p");
let vencer = document.querySelector("h2");

function gerarRespostas(){
    if (contador %2 == 0){
        this.innerHTML="<p class='resp'>X</p>";
        contador++;
        verificarFinal();
    }
    else {
        this.innerHTML="<p class='resp'>O</p>";
        contador++;
        verificarFinal();  
    }

}

for(let quadrado of quadrados){
    quadrado.onclick = gerarRespostas;
}

function verificarFinal(){
    if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML === quadrados[2].innerHTML){
        vencer.innerHTML = "VOCE GANHOU!";
    }
        else if(quadrados[3].innerHTML !== "" && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[5].innerHTML){
            vencer.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[6].innerHTML !== "" && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML === quadrados[8].innerHTML){
            vencer.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3].innerHTML === quadrados[6].innerHTML){
            vencer.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[1].innerHTML !== "" && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[7].innerHTML){
            vencer.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5].innerHTML === quadrados[8].innerHTML){
            vencer.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[8].innerHTML){
            vencer.innerHTML = "VOCE GANHOU!";
        }

        else if(quadrados[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[6].innerHTML){
            vencer.innerHTML = "VOCE GANHOU!";
        }
    else{
        
    }
}

function resetarJogo(){
    for(let quadrado of quadrados){
        quadrado.innerHTML = "";
        vencer.innerHTML = "";
        quadrado.onclick = gerarRespostas;        
    }
    resposta.innerHTML = "<p class 'reset'> Jogo resetado! </p>";
}

botao.ondblclick = resetarJogo;