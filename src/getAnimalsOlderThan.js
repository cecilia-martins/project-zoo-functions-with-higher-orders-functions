const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // pegar animais
  const tt = data.species.find((cadaEl) => cadaEl.name === animal);
  // dever retornar um boleano
  const tt2 = tt.residents.every((cadaRe) => cadaRe.age >= age);
  return tt2;
}

// console.log(getAnimalsOlderThan('lion', 5));
module.exports = getAnimalsOlderThan;
