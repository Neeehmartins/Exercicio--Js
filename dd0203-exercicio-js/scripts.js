console.log ('=== Exercicio da escada ===');



// O usuário vai definir qual é o tamanho de uma escada que ele gostaria. 
// Você tem que desenhar a escada no console de acordo com esse tamanho.

let lances = Number(prompt('Quantos lances de escada você gostaria de fazer?'));
let material = "#";

// let material = prompt('Qual material que você quer utilizar na escada?');
let degrau = material;
let i = 0;

while (i < lances) {
      console.log(degrau);
      degrau += material;

     i++;

}


