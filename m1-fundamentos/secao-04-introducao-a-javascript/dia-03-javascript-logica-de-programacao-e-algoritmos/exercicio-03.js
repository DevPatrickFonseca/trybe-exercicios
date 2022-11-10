let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array;
let menorPalavra = array;

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maiorPalavra.length) {
    maiorPalavra = array[i];
  };
}

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < menorPalavra.length) {
    menorPalavra = array[i];
  };
}

console.log("A maior palavra encontrada é >> " + maiorPalavra);
console.log("A menor palavra encontrada é >> " + menorPalavra);