let palavra = "Tryber";
let invertida = "";

for (let i = 0; i < palavra.length; i += 1) {
  invertida += palavra[palavra.length - 1 - i];
}

console.log(invertida);