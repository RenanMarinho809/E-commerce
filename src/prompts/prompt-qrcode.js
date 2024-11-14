import chalk from "chalk";

const promptQrCode = [{
    name: "link",
    description : chalk.yellow("Digite o link para gerar o QRCode ")
},
{
    name: "type",
    description : chalk.yellow("Escolha entro tipo de QRCode (1 - NORMAL OU ( 2 - TERMINAL"),
    pattern : /^[1-2]+$/,
    message : chalk.red.italic("Escolha apenas entre 1 e 2"),
    required : true,
}
];

export default promptQrCode;