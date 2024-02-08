const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: ["opt1", "opt2", "opt3"],
  },
];

const inquireMenu = async () => {
  console.clear();
  console.log("=============================".green);
  console.log(`    Seleccione una opcion`.green);
  console.log("=============================\n".green);

  const opt = await inquirer.prompt(questions);

  return opt;
};
module.exports = {
  inquireMenu,
};
