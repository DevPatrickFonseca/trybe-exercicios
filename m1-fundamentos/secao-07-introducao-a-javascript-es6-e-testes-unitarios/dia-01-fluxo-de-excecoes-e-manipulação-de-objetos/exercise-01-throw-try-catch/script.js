// Case - 01

const sum1 = (value1, value2) => {
  return value1 + value2;
};

console.log(sum1(2, 3));

// Case - 02

const sum2 = (value1, value2) => {
  return value1 + value2;
};

console.log(sum2(2, '3')); // result: 23

// Case - 03 (Solution Case 01 and Case 02)

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); 
    // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
  }
};

const sum = (value1, value2) => {
  // o `try` vai executar a função verifyNumber e retornar a soma caso os parâmetros sejam números
  try { 
    verifyIsNumber(value1, value2);
    return value1 + value2;
  // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada através da propriedade `.message` nativa do objeto Error.
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));
