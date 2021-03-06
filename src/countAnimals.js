const data = require('../data/zoo_data');

function animalEValor() {
  // Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
  const objetoCriado = {};
  const qnt = data.species.map((cadaSpecie) => {
    objetoCriado[cadaSpecie.name] = cadaSpecie.residents.length;
    return objetoCriado;
  });
  return qnt[0];
}

function qntAnimals(objetoParam) {
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
  const nomeAnimal = data.species.find((cadaAnimal) => cadaAnimal.name === objetoParam.specie);
  const qntAnimais = nomeAnimal.residents.length;
  return qntAnimais;
}

function qntPorSexo(objetoParam) {
  const oAnimal = data.species.find((cadaAnimal) => cadaAnimal.name === objetoParam.specie);
  const sexAnimal = oAnimal.residents.filter((cadaEl) => cadaEl.sex === objetoParam.sex);
  return sexAnimal.length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return animalEValor();
  }
  if (animal.sex !== undefined) {
    return qntPorSexo(animal);
  }
  return qntAnimals(animal);
}

module.exports = countAnimals;
