//* Calculadora

//! ---

// function sum() {
//   const value1 = document.getElementById('value1').value;
//   const value2 = document.getElementById('value2').value;
//   const result = Number(value1) + Number(value2);
//   document.getElementById('result').innerHTML = `Resultado: ${result}`;
//   document.getElementById('value1').value = '';
//   document.getElementById('value2').value = '';
// }
// window.onload = () => {
//   const button = document.getElementById('button');
//   button.addEventListener('click', sum);
// }

//! ---

//?  A aplicação pede à pessoa usuária que informe dois números para realizar uma soma. Esses números são inseridos através dos inputs;

//? Ao clicar o botão, a função sum é chamada, capturando o valor escrito nos inputs e realizando a operação. Antes, é necessária a conversão do valor usando o Number(), pois ele chega à função em forma de string. Há também outras formas de se converter uma string em um número, como o parseInt() e o parseFloat();

//? Ao final, a função sum imprime o valor em um parágrafo e limpa os inputs para que a pessoa usuária possa inserir novos valores.

//* 🚀 - Crie erros personalizados.

// Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?

// Utilize o throw new Error e o bloco try/catch.

// Evite funções que tenham muitas responsabilidades distintas.

// Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro.

// Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan().

// Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

// Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.

//* Função que recebe 02 valores (parametros)

const verifyIsNumber = (value1, value2) => {
  //\\ Verifica se foi inserido algum valor
  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma');
    // Erro casso não seja preenchido 
  }

  if (isNaN(value1) || isNaN(value2)) { 
    //\\ Verifica se são números
    throw new Error('Informe dois números para realizar a soma'); 
    // Erro casso não seja numeros
  }
}
//* Try..catch

const sum = () => {
  try { 
    const value1 = document.getElementById('value1').value; // Valor do input 1
    const value2 = document.getElementById('value2').value; // Valor do input 2
    
    verifyIsNumber(value1, value2); 
    //\\ Executa verifyIsNumber

    const result = Number(value1) + Number(value2); 
    //\\ Soma os valores

    document.getElementById('result').innerHTML = `Resultado: ${result}`; 
    //\\ Exibe mensagem do resultado na pagina

  } catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
    //\\ Exibe mensagem de erro do resultado na pagina

  } finally {
    document.getElementById('value1').value = ''; // Reseta valor1
    document.getElementById('value2').value = ''; // Reseta valor2
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}