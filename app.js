require("colors");
const { inquireMenu, pausa } = require("./helpers/inquirer.js");
const { Tarea } = require("./models/tarea.js");
const Tareas = require("./models/tareas.js");

// const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async () => {
  console.log("Hola mundo");

  let opt = "";

  do {
    opt = await inquireMenu();
    console.log({ opt });

    if (opt !== "0") await pausa();
  } while (opt != 0);

  //   pausa();
};

main();
