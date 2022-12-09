const fs = require('fs');

const lines = fs.readFileSync('../inputs.txt').toString().trim().split('\n');

const move = {
  'R': { x: 1, y: 0 },
  'L': { x: -1, y: 0 },
  'U': { x: 0, y: -1 },
  'D': { x: 0, y: 1 },
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(direction) {
    const delta = move[direction];
    this.x += delta.x;
    this.y += delta.y;
  }

  follow(head) {
    const distance = Math.max(
      Math.abs(this.x - head.x), // this = tail so tail.x - head.x
      Math.abs(this.y - head.y), // this = tail so tail.y - head.y
    );
    if (distance > 1) {
      const directionX = head.x - this.x;
      this.x += Math.abs(directionX) === 2 ? directionX / 2 : directionX;
      const directionY = head.y - this.y;
      this.y += Math.abs(directionY) === 2 ? directionY / 2 : directionY;
    }
  }
}

function solveF() {
  const head = new Point(0, 0);
  const tail = new Point(0, 0);
  const visited = new Set();

  visited.add(`${tail.x}-${tail.y}`);

  for (let line of lines) {
    const [direction, steps] = line.split(' ');
    for (let i = 0; i < steps; i++) {
      head.move(direction);
      tail.follow(head);
      visited.add(`${tail.x}-${tail.y}`);
    }
  }

  console.log(visited.size);
}

function solveS() {
  const snake = new Array(10).fill(0).map((_) => new Point(0, 0));
  const visited = new Set();
  visited.add(`${0}-${0}`);

  for (const line of lines) {
    const [direction, steps] = line.split(' ');
    for (let i = 0; i < steps; i++) {
      snake[0].move(direction);
      for (let i = 1; i < snake.length; i++) {
        const point = snake[i];
        point.follow(snake[i - 1]);
      }
      const tail = snake[snake.length - 1];
      visited.add(`${tail.x}-${tail.y}`);
    }
  }

  console.log(visited.size);
}

solveF();
solveS();