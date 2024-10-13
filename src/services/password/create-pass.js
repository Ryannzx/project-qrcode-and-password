import chalk from "chalk";
import handle2 from "./handle-pass.js";

async function createPass() {
    const password = await handle2();
    console.log(chalk.bgBlue("Sua senha é: " + password));
};

export default createPass;