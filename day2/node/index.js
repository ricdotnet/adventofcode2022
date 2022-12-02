const fs = require('fs');

const f = {
  'A X': 7,
  'A Y': 8,
  'A Z': 3,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 7,
  'C Y': 2,
  'C Z': 6,
}

const s = {
  'A X': 3,
  'A Y': 4,
  'A Z': 8,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 2,
  'C Y': 6,
  'C Z': 7,
}

let totalF = 0;
let totalS = 0;
fs.readFile('../inputs.txt', (_, data) => {
  data.toString().split('\n').map(l => {
    totalF += f[l];
    totalS += s[l];
  });
  console.log('total points:', totalF);
  console.log('total points:', totalS);
});