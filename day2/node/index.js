const fs = require('fs');

const maps = {
  'A X': 4,
  'A Y': 8,
  'A Z': 3,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 7,
  'C Y': 2,
  'C Z': 6,
}

let total = 0;
fs.readFile('../inputs.txt', (error, data) => {
  data.toString().split('\n').map(l => {
    total += maps[l];
  });
  console.log(total);
});