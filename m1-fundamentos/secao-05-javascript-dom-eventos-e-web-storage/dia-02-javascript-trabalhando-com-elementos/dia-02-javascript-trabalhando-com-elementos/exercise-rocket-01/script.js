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
