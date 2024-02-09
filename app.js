require("colors");
const { inquireMenu, pausa, leerInput } = require("./helpers/inquirer.js");
const { Tarea } = require("./models/tarea.js");
const Tareas = require("./models/tareas.js");

// const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    //imprimir el menu
    opt = await inquireMenu();

    switch (opt) {
      case "1":
        // todo: crear opcion
        const desc = await leerInput("Description: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        // todo: crear opcion
        console.log(tareas.listadoArr);
        break;
    }

    if (opt !== "0") await pausa();
  } while (opt != 0);

  //   pausa();
};

main();
