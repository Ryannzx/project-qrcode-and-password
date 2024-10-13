import chalk from "chalk";


const promptQRCode = [
    {
        name: "link",
        description: chalk.bgWhiteBright("Digite oque voce quer transformar em QR Code:"),
    },
    {
        name:"type",
        description: chalk.bgWhiteBright("Escolha o tipo a ser gerado: 1 - No terminal / 2 - Exportar em imagem"),
        pattern: /^[1-2]+$/,
        message: chalk.bgWhiteBright("Escolha um numero dentre as opcoes 1 e 2"),
        required: true,
    },
];

export default promptQRCode;
