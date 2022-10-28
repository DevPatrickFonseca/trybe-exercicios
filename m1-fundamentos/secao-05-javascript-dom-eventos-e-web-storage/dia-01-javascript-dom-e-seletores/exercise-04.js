function changeText() {
  let paragraph = document.getElementsByTagName("p")[1];
  paragraph.innerHTML = "Serei um programador profissional de qualidade e sucesso!"
};
changeText();

function changeColorSquareGreen() {
  let yellowSquare = document.getElementsByClassName("main-content")[0];
  yellowSquare.style.background = "rgb(76,164,109)";
}
changeColorSquareGreen();

function changeColorSquareWhite() {
  let redSquare = document.getElementsByClassName("center-content")[0];
  redSquare.style.background = "rgb(255,255,255)";
}
changeColorSquareWhite();

function correctTitle() {
  let titleH1 = document.getElementsByTagName("h1")[0];
  titleH1.innerHTML = "Seção 05 - JavaScript DOM e seletores"
}
correctTitle();

function changeUpperCaseParagraph() {
  let paragraphP = document.getElementsByTagName("p")[0];
  paragraphP.innerHTML = paragraphP.innerHTML.toUpperCase();
}
changeUpperCaseParagraph();