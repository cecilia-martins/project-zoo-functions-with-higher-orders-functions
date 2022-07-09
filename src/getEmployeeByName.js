const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  // Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
  // Sem parâmetros, retorna um objeto vazio
  // Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // Quando provido o último nome do funcionário, retorna o objeto do funcionário
  if (name === undefined) {
    return {};
  }
  const emp = data.employees.find((El) => El.firstName === name || El.lastName === name);

  return emp;
}

module.exports = getEmployeeByName;
