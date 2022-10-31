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
