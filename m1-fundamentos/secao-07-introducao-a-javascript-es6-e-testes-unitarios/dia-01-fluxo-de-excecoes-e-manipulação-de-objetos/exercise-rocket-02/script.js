//? Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

//? Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';

//* Modifique o nome da pessoa compradora para Luiz Silva;
//* Modifique o valor total da compra para R$ 50,00.

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

//* 01 - Recuperar valores da constante order

const customerInfo = (order) => {
  const address = 'address'; 
  //\\ Recupera valor 'address'
  const deliveryPerson = order.order.delivery.deliveryPerson; 
  //\\ Acessa e recupera `deliveryPerson` por notação de ponto
  const customerName = order['name']; 
  //\\ Acessa e recupera `name` por notação de chaves
  const customerPhone = order['phoneNumber']; 
  //\\ Acessa e recupera `phoneNumber` por notação de chaves
  const street = order[address].street; 
  //\\ Acessa e recupera `street` por notação de chaves e notação de ponto
  const number = order[address].number; 
  //\\ Acessa e recupera `number` por notação de chaves e notação de ponto
  const apartment = order[address].apartment; 
  //\\ Acessa e recupera `number` por notação de chaves e notação de ponto

//* 02 - Concatenar valores de 01 com template literals

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

//* 03 - Modificar nome do comprador

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

};

orderModifier(order);