require("colors");
const { inquireMenu, pausa } = require("./helpers/inquirer.js");

// const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear();

const main = async () => {
  console.log("Hola mundo");

  let opt = "";

  do {
    opt = await inquireMenu();
    console.log({ opt });

    await pausa();

    // if (opt !== "0") await pausa();
  } while (opt != 0);

  //   pausa();
};

main();
