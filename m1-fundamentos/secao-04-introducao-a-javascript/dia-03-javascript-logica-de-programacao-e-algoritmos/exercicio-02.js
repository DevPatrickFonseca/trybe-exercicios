let palavra = "banana";
let outraPalavra = "";

for (let i = 0; i < palavra.length; i += 1) {
  outraPalavra += palavra[palavra.length - 1 - i];
}

console.log(outraPalavra);