const fs = require('fs');

const lines = fs.readFileSync('../inputs.txt').toString().split('\n');

let root = { name: '/', size: 0, parent: null, entries: [] };
let current = root;
let dirs = [];

const requiredMem = 30000000;
const totalMem = 70000000;

function size(e) {
  let t = 0;
  e.map(e => {
    if (e.size === 0) {
      t += size(e.entries);
    } else {
      t += e.size;
    }
  });
  return t;
}

lines.map(l => {
  if (l === '') return;
  const lp = l.split(' ');
  if (lp[1] === 'cd' && lp[2] === '..') {
    current = current.parent ?? root;
  } else if (lp[1] === 'cd') {
    const child = { name: lp[2], size: 0, parent: current, entries: [] };
    current.entries.push(child);
    dirs.push(child);
    current = child;
  } else if (!isNaN(+lp[0])) {
    current.entries.push({ name: lp[1], size: +lp[0], parent: current });
  }
});

let totalF = 0;
dirs
  .map(dir => {
    return size(dir.entries);
  })
  .map(v => { return (v <= 100000) ? totalF += v : null });

const [totalUsed, ...dirSizes] = dirs
  .map(dir => {
    return size(dir.entries);
  })
  .map(v => { 
    return v
   });

const currentUsed = totalMem - totalUsed;
const totalS = dirSizes
  .filter(d => currentUsed + d >= requiredMem)
  .sort((a, b) => a - b)[0];

console.log('biggest dir uses:', totalF);
console.log('delete:', totalS);
