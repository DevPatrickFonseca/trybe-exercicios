const grade = 80;
if (grade >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (grade < 80 && grade >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (grade < 60) {
  console.log("Você foi reprovada(o)");
}