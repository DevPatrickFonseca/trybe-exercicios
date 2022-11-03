// Passo 01 - Cor de fundo da tela;

window.onload = function () {
  // Passo 01 - Cor de fundo da tela;

  let select = document.querySelector("select");
  select.addEventListener("change", function () {
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;
  });
};
