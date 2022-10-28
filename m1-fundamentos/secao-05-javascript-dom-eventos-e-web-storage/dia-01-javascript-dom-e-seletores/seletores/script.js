// Cabeçalho
const header = document.getElementById("header-container");
header.style.backgroundColor = "#00b069";

// Tarefas Urgentes
const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#FF9F84';

const h3emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < h3emergencyTasks.length; i += 1) {
  h3emergencyTasks[i].style.backgroundColor = '#a500f3';
  };

// Tarefas Não Urgentes
const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = '#F9DB5E';

const h3NoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < h3NoEmergencyTasks.length; i += 1) {
  h3NoEmergencyTasks[i].style.backgroundColor = '#232525';
  };

// Rodapé
const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#003533";