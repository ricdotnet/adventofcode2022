const fs = require('fs');

fs.readFileSync('../inputs.test').toString().split('\n\n').map(x => console.log(x));
