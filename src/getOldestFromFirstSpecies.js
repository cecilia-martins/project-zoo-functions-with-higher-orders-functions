const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const oFuncionario = employees.find((cadaEmpregado) => cadaEmpregado.id === id);
  const primeiroIdAnimalResponsavel = oFuncionario.responsibleFor[0];
  const primeiroAnimal = species
    .find((cadaAnimal) => cadaAnimal.id === primeiroIdAnimalResponsavel);
  const animalCerto = primeiroAnimal.residents
    .reduce((accumulator, cadaResidente) => {
      if (cadaResidente.age > accumulator.age) {
        return cadaResidente;
      }
      return accumulator;
    });
  const retorno = Object.values(animalCerto);

  return retorno;
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;
