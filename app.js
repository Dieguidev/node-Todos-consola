require("colors");
const { inquireMenu } = require("./helpers/inquirer");

// const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear();

const main = async () => {
  console.log("Hola mundo");

  let opt = "";

  do {
    opt = await inquireMenu();
    console.log({ opt });
    // if (opt !== "0") await pausa();
  } while (opt != 0);

  //   pausa();
};

main();
