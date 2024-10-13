import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.bgWhiteBright( "Escolha: 1 - QR Code ou 2 - Senha"),
        pattern: /^[1-2]+$/,
        message: chalk.bgWhiteBright.red.bold("Escolha um numero dentre as opcoes 1 e 2"),
        required: true,
    },
];

export default mainPrompt;