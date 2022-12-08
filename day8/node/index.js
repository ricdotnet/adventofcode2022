const fs = require('fs');

const treeMap = fs.readFileSync('../inputs.txt').toString().split('\n').slice(0, -1);
const outerRing = ((treeMap[0].length-1) * 2) + ((treeMap.length * 2) - 2);

let visible = 0;

for (let i = 1; i < treeMap.length - 1; i++) {
  for (let j = 1; j < treeMap[i].length - 1; j++) {
    const tree = treeMap[i][j];
    if (checkLeft(tree, treeMap[i], j) || checkRight(tree, treeMap[i], j)
      || checkAbove(tree, j, i) || checkBelow(tree, j, i)) {
      visible++;
    }
  }
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

function checkAbove(tree, col, row) {
  let isVisible = true;
  for (let i = 0; i < row; i++) {
    if (+treeMap[i][col] >= +tree) {
      isVisible = false;
    }
  }
  return isVisible;
}

function checkBelow(tree, col, row) {
  let isVisible = true;
  for (let i = row + 1; i < treeMap.length; i++) {
    if (+treeMap[i][col] >= +tree) {
      isVisible = false;
      break;
    }
  }
  return isVisible;
}

console.log(outerRing + visible);