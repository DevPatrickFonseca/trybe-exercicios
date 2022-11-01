function parte01() {
  const pai = document.getElementById("pai");
  console.log(pai);
}
parte01(); // Retorna pai

function parte02() {
  const pai = document.getElementById("pai");
  const todosOsFilhos = pai.childNodes;
  console.log(todosOsFilhos);
}
parte02(); // Retorna filhos

function parte03() {
  const pai = document.getElementById("pai");
  const todosOsFilhos = pai.childNodes;

  for (let i = todosOsFilhos.length - 1; i >= 0; i -= 1) {
    const filhoAtual = todosOsFilhos[i];

    if (filhoAtual.id !== "elementoOndeVoceEsta") {
      filhoAtual.remove();
    }
  }
  console.log(todosOsFilhos);
}
parte03(); // Percorre todosOsFilhos e amazena filho atual

function parte04() {
  const pai = document.getElementById("pai");

  const todosOsFilhos = pai.childNodes;

  for (let i = todosOsFilhos.length - 1; i >= 0; i -= 1) {
    const filhoAtual = todosOsFilhos[i];

    if (filhoAtual.id !== "elementoOndeVoceEsta") {
      filhoAtual.remove();
    }
  }
  const segundoEUltimoFilhoDoFilho = document.getElementById(
    "segundoEUltimoFilhoDoFilho"
  );
  segundoEUltimoFilhoDoFilho.remove();
  console.log(segundoEUltimoFilhoDoFilho);
}
parte04(); // Se id do filhoAtual for diferente de elementoOndeVoceEsta, remove o filhoAtual
// Recupera o elemento com o id segundoEUltimoFilhoDoFilho e o remove
