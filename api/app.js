import venom from 'venom-bot';

let clientGlobal = '';

export function initServer(){
  venom
    .create('bot-b2c', qr, stts)
    .then((client) => start(client))
    .catch((erro) => {
      console.log(erro);
    })  
}
function qr(base64qrimg, asciiQR, attempts, urlCode){
    //console.log();
}

function stts(statusSession){

}

function start(client){
    clientGlobal = client;
    //sendMessage('5528999848634@c.us', 'Olá, isso é um teste!');
}

export async function sendMessage(phone, text){
  //5527999547182@c.us
  await clientGlobal.sendText(phone, text);
}