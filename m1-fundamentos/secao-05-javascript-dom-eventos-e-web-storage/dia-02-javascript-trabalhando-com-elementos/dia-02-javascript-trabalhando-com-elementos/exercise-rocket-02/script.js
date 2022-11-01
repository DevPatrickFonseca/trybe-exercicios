function exercise01_1() {
  const pai = document.getElementById("pai");
  console.log(pai);
}
exercise01_1();

function exercise01_2() {
  const irmaoElementoOndeVoceEsta = document.createElement("section");
  irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
  pai.appendChild(irmaoElementoOndeVoceEsta);
  console.log(irmaoElementoOndeVoceEsta);
}
exercise01_2();

function exercise02_1() {
  const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
  console.log(elementoOndeVoceEsta);
}
exercise02_1();

function exercise02_2() {
  const filhoElementoOndeVoceEsta = document.createElement("section");
  filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
  elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
  console.log(filhoElementoOndeVoceEsta);
}
exercise02_2();

function exercise03_1() {
  const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
  console.log(primeiroFilhoDoFilho);
}
exercise03_1();

function exercise03_2() {
  const filhoPrimeiroFilhoDoFilho = document.createElement("section");
  filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
  primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);
  console.log(filhoPrimeiroFilhoDoFilho);
}
exercise03_2();

function exercise04_1() {
  const terceiroFilho =
    filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
  console.log(terceiroFilho);
}
exercise04_1();
