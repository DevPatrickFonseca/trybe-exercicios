let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
}

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

for (let chave in info) {
  if (info[chave] === "Sim" && info2[chave] === "Sim" && chave === "recorrente") {
    console.log("Ambos recorrentes");
  } else {
  console.log(info[chave] + " e " + info2[chave]);
  }
}