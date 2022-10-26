// Função liga desliga carro - arrow functions

let status ="";

const ligarDesligar = (status) => (
  status === "desligado" ? status = "ligado" : status = "desligado"
);

console.log(`O motor está ${ligarDesligar("desligado")}`);
console.log(`O motor está ${ligarDesligar("ligado")}`);