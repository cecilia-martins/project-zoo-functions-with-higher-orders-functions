const { prices } = require('../data/zoo_data');

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

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const crianca = countEntrants(entrants).child;
  const adulto = countEntrants(entrants).adult;
  const veio = countEntrants(entrants).senior;
  const priceChild = prices.child;
  const priceAdult = prices.adult;
  const priceSenior = prices.senior;

  const valorTotal = (crianca * priceChild) + (adulto * priceAdult) + (veio * priceSenior);
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
