const data = require('../data/zoo_data');
// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const objetoVazio = {};
  const idades = entrants.map((cadaEl) => cadaEl.age);
  const qntMenores = idades.filter((cadaIdade) => cadaIdade < 18);
  objetoVazio.child = qntMenores.length;

  const adultos = idades.filter((cadaIdade) => cadaIdade >= 18 && cadaIdade < 50);
  objetoVazio.adult = adultos.length;

  const vei = idades.filter((cadaIdade) => cadaIdade >= 50);
  objetoVazio.senior = vei.length;

  return objetoVazio;
}
console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

function calculateEntry(entrants) {
  
  const umValorReal = {} // retorna um objeto com a contagem;

  countEntrants(entrants); // usar essa função para implementar a função calculateEntry

  // quantidade de visitantes
  entrants.length?
  // e faixa etaria? 
  // const idades = entrants.map((cadaEl) => cadaEl.age); // as idades

  countEntrants(entrants); //

  return umValorReal // deverá retornar o valor total a ser cobrado em um obj???
  
                     
}
// console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
