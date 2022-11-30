//* Nova pessoa contratada

// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. 
// Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. 

// * Para isso:

// ? crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// ? utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const newEmployees = (registerEmployee) => { // Dados das pessoas contratadas
  const employees = {
    id1: registerEmployee('Pedro Guerra'),
    id2: registerEmployee('Luiza Drumond'),
    id3: registerEmployee('Carla Paiva'),
  };
  return employees;
};

const registerEmployee = (fullName) => { 
  //\\ 01 - Função recebe nome
  const email = fullName.toLowerCase().split(' ').join('_'); 
  //\\ 02 - Converte o nome para minúsculo e substitui espaços por _ (underline)
  return {fullName, email: `${email}@trybe.com` };
  //\\ 03 - Retorna email em template literals
};

console.log(newEmployees(registerEmployee));
