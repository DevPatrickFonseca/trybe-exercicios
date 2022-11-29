// * Sorteador de loteria

// Desenvolva uma HOF que retorne o resultado de um sorteio. 
// Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 

// ? O retorno da sua HOF deve ser uma string 
// ? (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const checkNumber = (myNumber, drawnNumber) => { 
  //\\ 01 - Checa se meu número é igual ao sorteado
  const checked = myNumber === drawnNumber;
  return checked;
};

const lotteryDraw = (myNumber, drawnNumber) => {
  const randomNumber = Math.floor((Math.random()*5)+1);
  //\\ 02 - Gera número aleatório
  return drawnNumber(myNumber, randomNumber) ? 'Parabéns, você ganhou!' : 'Tente novamente!';
  //\\ 03 - Retorna se meu número foi sorteado e retorna mensagem
};

console.log(lotteryDraw(4, checkNumber));