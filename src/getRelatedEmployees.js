const data = require('../data/zoo_data');

function isManager(id) {
  // 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não
  // retornar true ou false se o id passado é de um gerente ou ñ
  const gerente = data.employees.map((elemento) => elemento.managers); /* .includes(id) */
  const tt = gerente.some((cadaArray) => cadaArray.includes(id));
  // .includes(id)
  /* if (gerente === false) {
    return false;
  } */

  return tt;
}
/* console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
 */
// se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".

function getRelatedEmployees(managerId) {
  // se a pessoa é gerente, quem ela gerencia?;
  if (isManager(managerId) === true) {
    const dosColab = data.employees
      .filter((cadaEmployee) => cadaEmployee.managers.includes(managerId));
    const nomeSobreNome = dosColab.map((cadaEl) => `${cadaEl.firstName} ${cadaEl.lastName}`);
    return nomeSobreNome;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
