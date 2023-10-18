// import fs from 'fs';

function printTable(n, i, arr) {
  if (i === 11) { return; }
  console.log(n * i);
  arr.push(n * i);
  i += 1;
  printTable(n, i, arr);
}

const arr = [];
printTable(4, 1, arr);
console.log(arr);
