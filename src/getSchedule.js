const { hours, species } = require('../data/zoo_data');

// function exibicoes(day) { // função pra receber
//   const days = Object.keys(hours);
//   const verifica = species.filter((cadaAnimal) => cadaAnimal.availability.includes());
//   // const nomesAnimais = verifica.

//   return verifica;
// }
// console.log(exibicoes());
//
function semParamValido() {
  const days = Object.keys(hours); // array de dias

  const tt = days.reduce((accumulator, diasEl) => { //
    const abertura = hours[diasEl].open; //
    const fechamento = hours[diasEl].close; //
    const verifica = species.filter((cadaAnimal) => cadaAnimal.availability.includes(diasEl));
    const tt2 = verifica.map((cadaAnimal) => cadaAnimal.name);
    accumulator[diasEl] = {
      officeHour: `Open from ${abertura}am until ${fechamento}pm`,
      exhibition: tt2,
    };

    return accumulator;
  }, {});
  tt.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return tt;
}
//
function onlyDay(day) {
  const objetoComObj = semParamValido();
  const diaSeparado = { [day]: objetoComObj[day] };
  return diaSeparado;
}

function nomeAnimal(nomeDoAnimal) {
  const animalCerto = species.find((cadaAnimal) => cadaAnimal.name === nomeDoAnimal);
  const todoAnimal = animalCerto.availability;
  return todoAnimal;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return semParamValido();
  }
  const days = Object.keys(hours);

  if (days.includes(scheduleTarget)) {
    return onlyDay(scheduleTarget);
  }
  const animalCerto = species.find((cadaAnimal) => cadaAnimal.name === scheduleTarget);
  if (animalCerto) {
    return nomeAnimal(scheduleTarget);
  }
  return semParamValido();
}
console.log(getSchedule());

module.exports = getSchedule;
