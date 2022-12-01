const fs = require('fs/promises');

(async () => {
  const lines = await fs.readFile('../input.txt');

  const totals = lines.toString().split(/\n\s*\n/).map(line => {
    return line.split('\n').reduce((p, c) => p += +c, 0);
  }).sort((a, b) => b - a);

  console.log('most calories:', totals[0]);
  console.log('top3 calories:', totals.slice(0, 3).reduce((p, c) => p += +c, 0));
})();
