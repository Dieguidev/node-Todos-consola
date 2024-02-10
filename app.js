const { guardarDB, leerDB } = require("./helpers/guardarArchivo.js");
const { inquireMenu, pausa, leerInput } = require("./helpers/inquirer.js");
const { Tarea } = require("./models/tarea.js");
const Tareas = require("./models/tareas.js");

// const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB); // Carga las tareas desde el archivo JSON si existe. Si no existe, devuelve un array vacío.
    // console.log(tareasDB);
    // console.log("Cargadas tareas desde el archivo JSON");
  }

  // if (opt !== "0") await pausa();

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
        // console.log(tareas.listadoArr);
        tareas.listadoCompleto();
        break;
    }

    guardarDB(tareas.listadoArr);

    if (opt !== "0") await pausa();
  } while (opt != 0);

  //   pausa();
};

main();
