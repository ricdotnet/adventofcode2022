const fs = require('fs');

const treeMap = fs.readFileSync('../inputs.txt').toString().split('\n').slice(0, -1);
const outerRing = ((treeMap[0].length-1) * 2) + ((treeMap.length * 2) - 2);

let visible = 0;
let scenicScores = [];

for (let i = 1; i < treeMap.length - 1; i++) {
  for (let j = 1; j < treeMap[i].length - 1; j++) {
    const tree = treeMap[i][j];
    if (checkLeft(tree, treeMap[i], j) || checkRight(tree, treeMap[i], j)
      || checkAbove(tree, j, i) || checkBelow(tree, j, i)) {
      visible++;
    }
    calculateScenicScores(tree, treeMap[i], j, j, i)
  }
}

function calculateScenicScores(tree, row, col, currX, currY) {
  let l = 0, r = 0, a = 0, b = 0;
  for (let i = currX - 1; i >= 0; i--) {
    if (+row[i] < +tree) {
      l++;
    } else if (+row[i] >= +tree) {
      l++;
      break;
    }
  }
  for (let w = currX + 1; w < row.length; w++) {
    if (+row[w] < +tree) {
      r++;
    } else if (+row[w] >= +tree) {
      r++;
      break;
    }
  }
  for (let i = currY - 1; i >= 0; i--) {
    if (+treeMap[i][col] < +tree) {
      a++;
    } else if (+treeMap[i][col] >= +tree) {
      a++;
      break;
    }
  }
  for (let i = currY + 1; i < treeMap.length; i++) {
    if (+treeMap[i][col] < +tree) {
      b++;
    } else if (+treeMap[i][col] >= +tree) {
      b++;
      break;
    }
  }
  scenicScores.push(l * r * a * b);
}

function checkLeft(tree, row, currY) {
  let isVisible = true;
  for (let i = 0; i < currY; i++) {
    if (+row[i] >= +tree) {
      isVisible = false;
    }
  }
  return isVisible;
}

function checkRight(tree, row, currY) {
  let isVisible = true;
  for (let i = currY + 1; i < row.length; i++) {
    if (+row[i] >= +tree) {
      isVisible = false;
    }
  }
  return isVisible;
}

function checkAbove(tree, col, currX) {
  let isVisible = true;
  for (let i = 0; i < currX; i++) {
    if (+treeMap[i][col] >= +tree) {
      isVisible = false;
    }
  }
  return isVisible;
}

function checkBelow(tree, col, currX) {
  let isVisible = true;
  for (let i = currX + 1; i < treeMap.length; i++) {
    if (+treeMap[i][col] >= +tree) {
      isVisible = false;
      break;
    }
  }
  return isVisible;
}

console.log('visible trees:', outerRing + visible);
console.log('highest scenic score:', scenicScores.sort((a, b) => b - a)[0]);