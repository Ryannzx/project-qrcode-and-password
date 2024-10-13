import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPass from "./services/password/create-pass.js"

async function main() {
    prompt.get(mainPrompt, async(err, choose) => {
        if (err) {
            console.error("Erro ao obter a seleção:", err);
            return;
        }
        if(choose.select == 1) await createQRCode();
        else if(choose.select == 2) await createPass();
    });
    
    prompt.start();
}

main(); 


