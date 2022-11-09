const formSubmit = document.querySelector("#input-submit");
const sendData


// Interrompe o comportamento padrão do botão submit
formSubmit.addEventListener("click", (event) => {
  event.preventDefault();
});

// Limpar campos

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
};

// --------

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}

window.onload = function() {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};

// ------- falta concluir