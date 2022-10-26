// Função liga desliga carro - Function

let status ="";

function ligarDesligar(status){
  if (status === "ligado") {
    return status = "ligado";
  } else {
    return status = "desligado";
  }
};

console.log(`O motor está ${ligarDesligar("ligado")}`);
console.log(`O motor está ${ligarDesligar("desligado")}`);