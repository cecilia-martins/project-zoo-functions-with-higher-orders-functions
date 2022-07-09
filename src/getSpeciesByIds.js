const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // buscar animal pela id
  const idsParam = ids.map((cadaAnimal) =>
    data.species.find((elemento) => elemento.id === cadaAnimal));

  return idsParam;
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
