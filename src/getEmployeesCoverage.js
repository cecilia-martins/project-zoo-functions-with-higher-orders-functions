const { species, employees } = require('../data/zoo_data');

// {
//   "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
//   "fullName": "Sharonda Spry", // nome completo: firstName + lastName
//   "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
//   "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
// }
function semParam() {
  const tt = employees.map((cadaEmpregado) => {
    const especies = species.filter((cadaAnimal) => cadaEmpregado.responsibleFor
      .includes(cadaAnimal.id));
    const nomeDoAnimal = especies.map((cadaAnimal) => cadaAnimal.name);
    const localizaco = especies.map((cadaAnimal) => cadaAnimal.location);
    const objeto = {
      id: cadaEmpregado.id,
      fullName: `${cadaEmpregado.firstName} ${cadaEmpregado.lastName}`,
      species: nomeDoAnimal,
      locations: localizaco,
    };
    return objeto;
  });

  return tt;
}

function procuraPorNomeESobrenome(objetoParam) {
  const empreguetes = semParam();
  const separando = empreguetes.find((cadaEmpreguete) => cadaEmpreguete
    .fullName.includes(objetoParam.name) || cadaEmpreguete.id.includes(objetoParam.id));
  return separando;
}

function getEmployeesCoverage(parametroSemGraca) {
  if (parametroSemGraca === undefined) {
    return semParam();
  }
  const ttt = employees.some((cadaEmp) => cadaEmp.id === parametroSemGraca.id
  || cadaEmp.lastName === parametroSemGraca.name || cadaEmp.firstName === parametroSemGraca.name);
  if (ttt) {
    return procuraPorNomeESobrenome(parametroSemGraca);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
