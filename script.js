let quadrados = document.querySelectorAll(".linha div");
let contador = 0;
let botao = document.querySelector("button");
let resposta = document.querySelector("p");
let final = document.querySelector("h2");

function gerarRespostas(){
   if (this.innerHTML == ""){
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

}

for(let quadrado of quadrados){
    quadrado.onclick = gerarRespostas;
}

function verificarFinal(){
    if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML === quadrados[2].innerHTML){
        final.innerHTML = "VOCE GANHOU!";
    }
        else if(quadrados[3].innerHTML !== "" && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[5].innerHTML){
            final.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[6].innerHTML !== "" && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML === quadrados[8].innerHTML){
            final.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3].innerHTML === quadrados[6].innerHTML){
            final.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[1].innerHTML !== "" && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[7].innerHTML){
            final.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5].innerHTML === quadrados[8].innerHTML){
            final.innerHTML = "VOCE GANHOU!";
        }
        else if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[8].innerHTML){
            final.innerHTML = "VOCE GANHOU!";
        }

        else if(quadrados[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[6].innerHTML){
            final.innerHTML = "VOCE GANHOU!";
        }
        else if(contador >= 9){
            final.innerHTML = "DEU VELHA";
    }
}

function resetarJogo(){
    for(let quadrado of quadrados){
        quadrado.innerHTML = "";
        final.innerHTML = "";
        quadrado.onclick = gerarRespostas;        
    }
    resposta.innerHTML = "<p class 'reset'> Jogo resetado! </p>";
}

botao.ondblclick = resetarJogo;