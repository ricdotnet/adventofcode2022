const fs = require('fs');

const stream = fs.readFileSync('../inputs.txt').toString();

let i = 0;
while(true) {
  const packet = stream.substring(i, i+4);
  
  let validPacket = true;
  packet
    .split('')
    .map(x => {
      if (packet.indexOf(x) !== packet.lastIndexOf(x)) {
        validPacket = false;
      }
    });
  
  i++;
  if (validPacket) {
    console.log('packet characters processed:', i + 4 - 1);
    break;
  }
}

i = 0;
while(true) {
  const message = stream.substring(i, i+14);

  let validMessage = true;
  message
    .split('')
    .map(x => {
      if (message.indexOf(x) !== message.lastIndexOf(x)) {
        validMessage = false;
      }
    });
  
  i++;
  if (validMessage) {
    console.log('message characters processed:', i + 14 - 1);
    break;
  }
}
