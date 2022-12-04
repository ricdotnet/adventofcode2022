const fs = require('fs');

let totalF = 0;
let totalS = 0;

fs.readFile('../inputs.txt', (_, data) => {
  const lines = data.toString().split('\n');

  solve(lines);

  console.log('total overlap:', totalF);
  console.log('partial overlap:', totalS);
});

function solve(lines) {
  lines.map(line => {
    const [left, right] = line.split(',').map(s => s.split('-').map(x => +x));

    if (left[0] >= right[0] && left[1] <= right[1] ||
        right[0] >= left[0] && right[1] <= left[1]) {
      totalF += 1;
    }

    if (left[0] >= right[0] && left[0] <= right[1] ||
        right[0] >= left[0] && right[0] <= left[1]) {
      totalS += 1;
    }
  });
};
