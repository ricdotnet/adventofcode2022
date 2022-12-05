const fs = require('fs');

let [groups, steps] = fs.readFileSync('../inputs.txt')
  .toString()
  .split('\n\n')
  .map(x => x.split('\n'));

const stacks = groups.map(x => {
  return x.replace(/    /g, '.')
    .replace(/ \[/g, '')
    .replace(/] /g, '')
    .replace(/\[/g, '')
    .replace(/]/g, '');
})
  .map(x => x.replaceAll(' ', ''))
  .map(x => x.split(''));

const stacks1 = Array.from(Array(stacks[stacks.length -1 ].length), () => []);

stacks.slice(0, -1).map((x) => {
  x.map((y, i) => (y !== '.') ? stacks1[i].unshift(y) : null);
});

const stacks2 = stacks1.map(x => [...x]);

steps.slice(0, -1).map(x => {
  const n = x.match(/\d+/g);
  const p = stacks1[n[1] - 1].slice(-n[0]).reverse();
  const p2 = stacks2[n[1] - 1].slice(-n[0]);
  stacks1[n[1] - 1].splice(-n[0]);
  stacks2[n[1] - 1].splice(-n[0]);
  stacks1[n[2] - 1].push(...p);
  stacks2[n[2] - 1].push(...p2);
});

console.log(stacks1.map(x => x[x.length - 1]).join(''));
console.log(stacks2.map(x => x[x.length - 1]).join(''));
