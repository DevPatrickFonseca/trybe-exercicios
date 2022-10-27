function longestWord(phrase) {
  let wordWord = phrase.split(" ");
  let bigWord;
  
  for (let index in wordWord) {
    if (index == 0 || wordWord[index].length > bigWord.length) { bigWord = wordWord[index];
    }
  }
  let result = `A maior palavra é a palavra > ${bigWord}`;
  return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));