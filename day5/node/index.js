const fs = require('fs');

const final = [[], []];

let [groups, steps] = fs.readFileSync('../inputs.txt')
  .toString()
  .split('\n\n')
  .map(x => x.split('\n'));
let groups2 = [...groups];

groups = groups.map(x => x.split(''));
groups2 = groups2.map(x => x.split(''));

steps.map(x => {
  const n = x.match(/\d+/g)
  const p = groups[n[1] - 1].slice(-n[0]).reverse();
  const p2 = groups2[n[1] - 1].slice(-n[0]);
  groups[n[1] - 1].splice(-n[0]);
  groups2[n[1] - 1].splice(-n[0]);
  groups[n[2] - 1].push(...p);
  groups2[n[2] - 1].push(...p2);
});

console.log(groups.map(x => x[x.length - 1]).join(''));
console.log(groups2.map(x => x[x.length - 1]).join(''));
