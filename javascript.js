      /*Exercicio do jogo aleatorio*/

     
      let numero = Number(prompt('~~Bem vindo~~\nTente acertar  qual é o número aleatório entre 0 e 5\nVocê tem 10 tentativas.\n\nQual é a sua aposta?'));

    let i = 0;
    let = tentativas = 10;

    let aleatorio = function(min,max){
   
   return Math.floor(Math.random() *(max -min +1)) + min;
}

    const valorAleatorio = aleatorio(0,50) 

    while(numero != valorAleatorio && i < tentativas){

        if(numero > valorAleatorio){
            chances = tentativas - 1;
            numero = Number(prompt(`Infelizmente você errou! \n O numero digitado é maior! \n Você ainda posssui $  
                {tentativas} tentativa(s), tente novamente: `));
  
      }

      else if(numero < valorAleatorio){
        numero = Number(prompt(`Infelizmente você errou! \n O numero digitado é menor! \n Você ainda possui $ {tentativas}
        tentativa(s), tente novamente:` ));
      }

      tentativas--;

    }

    if(tentativas ==0){
        alert(`Suas chances esgotaram !`);
    }

    if(numero == valorAleatorio){
        alert(`Parabéns, você acertou!`);
    }