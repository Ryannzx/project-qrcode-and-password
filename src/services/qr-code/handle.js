import qr from "qrcode-terminal"
import chalk from "chalk";

async function handle(err, result) {
    if (err){
        console.log("error ");
        return;
    }

    const isSmall = result.type == 1;
    qr.generate(result.link, {small : isSmall},(qrcode) => {
        console.log(chalk.bgBlue("Qr Code gerado com sucesso: \n"));
        console.log(chalk.bgBlue(qrcode));
    })
}

export default handle;