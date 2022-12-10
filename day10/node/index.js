const fs = require('fs');

const lines = fs.readFileSync('../inputs.txt').toString().trim().split('\n');

let x = 1;
let cycle = 0;
let strength = {
  total: 0,
  calculate: () => {
    switch (cycle) {
      case 20:
        strength.total += cycle * x;
        break;
      case 60:
        strength.total += cycle * x;
        break;
      case 100:
        strength.total += cycle * x;
        break;
      case 140:
        strength.total += cycle * x;
        break;
      case 180:
        strength.total += cycle * x;
        break;
      case 220:
        strength.total += cycle * x;
        break;
    }
  }
};

class Sprite {
  constructor(a) {
    this.a = a;
    this.b = this.a + 1;
    this.c = this.b + 1;
  }
  move() {
    this.a = x - 1;
    this.b = this.a + 1;
    this.c = this.b + 1;
  }
  intercepts() {
    return crtPixel >= this.a && crtPixel <= this.c;
  }
}

const crtScreen = Array(6).fill([]).map(_ => Array(40).fill('.'));
let crtPixel = 0;
let crtLine = 0;
const sprite = new Sprite(0);
function drawCRT() {
  if (sprite.intercepts()) {
    crtScreen[crtLine][crtPixel] = '#';
  }
  crtPixel += 1;
  if (cycle % 40 === 0) {
    crtLine += 1;
    crtPixel = 0;
  }
}

function printCRT() {
  for (let i = 0; i < crtScreen.length; i++) {
    const crtLine = [];
    for (let j = 0; j < crtScreen[i].length; j++) {
      crtLine.push(crtScreen[i][j]);
    }
    console.log(crtLine.join(''));
  }
}

for (let line of lines) {
  const [instruction, value] = line.split(' ');

  for (let i = 0; i < 2; i++) {
    cycle++;
    strength.calculate();
    drawCRT();
    if (instruction === 'noop') {
      break;
      // empty for now
    }
    if (instruction === 'addx') {
      if (i === 1) { // 1 is the second cycle
        x += +value;
        sprite.move();
      }
    } 
  }
}

console.log('the total signal strength is:', strength.total);
printCRT();
