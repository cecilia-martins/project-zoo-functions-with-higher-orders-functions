const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // buscar animal pela id?
  // console.log(ids);
  // //////////cada elemento do array///indo comparar//entrando no especies//pegando cada um // comparando
  const idsParam = ids.map((itemArray) => data.species.find((elemento) => elemento.id === itemArray));
  /* const infoAnimals = data.species.filter((elemento) => elemento.id === ids); */
  return idsParam;
  // SE? não receber um parametro, retorne um array vazio vazio //FILTER FAZ ISSO
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
