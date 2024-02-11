const { guardarDB, leerDB } = require("./helpers/guardarArchivo.js");
const {
  inquireMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer.js");
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
        const desc = await leerInput("Description: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        // console.log(tareas.listadoArr);
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas();
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id === "0") break; // Si el usuario selecciona 0, salir del bucle. Si no, continuar con la tarea seleccionada.
        const ok = await confirmar("¿Esta seguro?");
        if (ok) {
          tareas.borrarTarea(id);
          console.log("Tarea borrada");
        }
        break;
    }

    guardarDB(tareas.listadoArr);

    if (opt !== "0") await pausa();
  } while (opt != 0);

  //   pausa();
};

main();
