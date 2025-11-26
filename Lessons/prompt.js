
// prompt.question("Diga a sua idade ", answer => {
//   const age = Number.parseInt(answer);
//     if (Number.isNaN(answer)) {
//         console.log("Este número não é válido!");
//     }else{
//         console.log(`A sua idade é ${age}`)
//         console.log(`A sua idade daqui a 4 anos é ${age + 4}`)
//         console.log(`A sua idade daqui a 10 anos é ${age + 10}`)
//         console.log(`A sua idade daqui a 20 anos é ${age + 20}`)
//     }
//     prompt.close();
// })


// let bank = 3000;

// console.log(`Valor total no banco: ${bank}`);
// prompt.question("Quanto quer transferir? ", answer => {
//   const transfer = Number.parseFloat(answer);
//     if (Number.isNaN(transfer)) {
//         console.log("Valor inválido para transferência!");
//     }else if(transfer > bank){
//         console.log("Saldo insuficiente para transferência!");
//     }else if (transfer <= 0){
//         console.log("O valor da transferência deve ser maior que zero!");
//     }else{
//         bank -= transfer;
//         console.log(`Transferência de ${transfer} realizada com sucesso!`);
//         console.log(`Saldo restante: ${bank}`);
//     }
//     prompt.close();
// })


// console.log("Bem vindo ao programa");
// console.log("[1] 📅 Data atual");
// console.log("[2] 🕒 Horário atual");
// console.log("[3] 🐄 Ver animais");
// console.log("[4] 🍕 Ver comidas");d
// console.log("[5] 💻 Ver Linguagens");
// console.log("[0] ❌ Sair");


// prompt.question("Digite a opção que deseja: ", answerA => {
//   switch(answerA) {
//     case "1":
//       const currentDate = new Date();
//       console.log(`Data atual: ${currentDate.toLocaleDateString()}`);
//       break;
//     case "2":
//       const currentTime = new Date();
//       console.log(`Horário atual: ${currentTime.toLocaleTimeString()}`);
//       break;
//     case "3":
//       console.log("Animais: Cão, Gato, Elefante");
//       break;
//     case "4":
//       console.log("Comidas: Pizza, Sushi, Hambúrguer");
//       break;
//     case "5":
//       console.log("Linguagens: JavaScript, Python, Java");
//       break;
//     case "0":
//       console.log("A sair do programa...");
//       break;
//     default:
//       console.log("Opção inválida!");
//   }
//   prompt.close();
// })


const rl = require("node:readline");

const prompt =  rl.createInterface({
  input: process.stdin,output: process.stdout,
});

prompt.question("Qual o número que dejesa fazer a tabuada: ", answer => {
  const number = Number.parseInt(answer);
    if (Number.isNaN(number)) {
        console.log("Número inválido para tabuada!");
    }else{
        console.log(`Tabuada do ${number}:`);
        for(let i = 1; i <= 10; i++){
            const result = number * i;
            console.log(`${number} x ${i} = ${result}`);
        }
    } prompt.close();

});