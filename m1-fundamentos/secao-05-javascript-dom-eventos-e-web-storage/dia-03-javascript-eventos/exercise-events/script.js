const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Parte 01 - Crie um calendário dinamicamente

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector("#days");

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let day = decemberDaysList[i];
    let dayItem = document.createElement("li");
    dayItem.innerHTML = day;

    if (day === 24 || day === 31) {
      dayItem.className = "day holiday";
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = "day friday";
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = "day holiday friday";
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = "day";
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth();

// Parte 02 - Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  let newButtonID = "btn-holiday";

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  buttonContainer.appendChild(newButton);
}
createHolidayButton("Feriados");

// Parte 03 - Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"

function displayHolidays() {
  let getHolidayButton = document.querySelector("#btn-holiday");
  let getHolidays = document.querySelectorAll(".holiday");
  let backgroundColor = "rgb(238,238,238)";
  let setNewColor = "white";

  getHolidayButton.addEventListener("click", () => {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
displayHolidays();
