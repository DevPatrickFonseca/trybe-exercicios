function exercise01() {
  const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
  console.log(elementoOndeVoceEsta);
}
exercise01();

function exercise02() {
  let pai = elementoOndeVoceEsta.parentElement;
  pai.style.color = "red";
}
exercise02();

function exercise03() {
  let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
  primeiroFilhoDoFilho.innerText = "primeiroFilhoDoFilho";
}
exercise03();

function exercise04() {
  const primeiroFilho = pai.firstElementChild;
  console.log(primeiroFilho);
}
exercise04();

function exercise05() {
  const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
  console.log(primeiroFilho2);
}
exercise05();

function exercise06() {
  const textElement = elementoOndeVoceEsta.nextSibling;
  console.log(textElement);
}
exercise06();

function exercise07() {
  const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
  console.log(terceiroFilho);
}
exercise07();

function exercise08() {
  const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
  console.log(terceiroFilho2);
}
exercise08();
