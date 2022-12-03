const fs = require('fs');

const c = 'abcdefghijklmnopqrstuvwxyz';
const cc = '_' + c + c.toUpperCase();

let totalF = 0;
let totalS = 0;

fs.readFile('../inputs.txt', (_, data) => {

  const dArr = data.toString().split('\n');
  solveF(dArr);
  solveS(dArr);

  console.log(totalF);
  console.log(totalS);
});

function solveF(d) {
  d.map(line => {
    const p1 = line.slice(0, line.length / 2);
    const p2 = line.slice(line.length / 2, line.length);
    const tmp = [];
    Array.from(p1).map(p => {
      if (p2.includes(p)) {
        tmp.push(p);
      }
    });
    [...new Set(tmp)].map(c => totalF += cc.indexOf(c));
  });
}

function solveS(d) {
  const g = [];
  let i = 0;
  for (let j = 0; j < (d.length / 3)-1; j++) {
    g.push([d[i], d[i+1], d[i+2]]);
    i += 3;
  }
  g.map(group => {
    const tmp = [];
    Array.from(group[0]).map(c => {
      if (group[1].includes(c) && group[2].includes(c)) {
        tmp.push(c);
      }
    });
    [...new Set(tmp)].map(c => totalS += cc.indexOf(c));
  });
}

