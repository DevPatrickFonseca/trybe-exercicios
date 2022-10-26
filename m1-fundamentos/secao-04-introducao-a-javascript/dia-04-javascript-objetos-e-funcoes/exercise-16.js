const angA = 30;
const angB = 40;
const angC = 20;

function triangle(angA,angB,angC) {
  if ((angA < 0 || angB < 0 || angC < 0)) {
    return "Erro";
  } else if (angA + angB + angC === 180) {
    return true;
  } else {
    return false;
  }
}

console.log(triangle(angA,angB,angC));