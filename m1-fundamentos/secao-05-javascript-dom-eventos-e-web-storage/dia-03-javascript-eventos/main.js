const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1 - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClass(event) {
  const elementTech = document.querySelector(".tech");
  elementTech.classList.remove("tech");
  event.target.classList.add("tech");
  input.value = "";
}

firstLi.addEventListener("click", addClass);
secondLi.addEventListener("click", addClass);
thirdLi.addEventListener("click", addClass);

// 2 - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener("input", (event) => {
  const elementTech = document.querySelector(".tech");
  elementTech.innerText = event.target.value;
});

// 3 - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

myWebpage.addEventListener("dblclick", () => {
  window.location.replace("https://github.com/PFonsecaFV");
});

// 4 - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener("mouseover", (event) => {
  event.target.style.color = "blue";
});

myWebpage.addEventListener("mouseout", (event) => {
  event.target.style.color = "unset";
});
