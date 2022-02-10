const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
  // Sem parâmetros, retorna um objeto vazio
  // Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // Quando provido o último nome do funcionário, retorna o objeto do funcionário
  if (employeeName === undefined) {
    return {};
  }
  const empreguete = data.employees.find((cadaEl) => cadaEl.firstName === employeeName || cadaEl.lastName === employeeName);


  return empreguete;
}
console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
