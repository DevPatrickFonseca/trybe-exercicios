// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userData = {
  ...user,
  ...jobInfos
};

const {name, age, nationality, profession, squad, squadInitials} = userData;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad}`);