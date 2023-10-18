import fs from 'fs';

const input = 23;

const generateRaw = (num, i, mul) => {
  if (i > num) return '';
  return `<td>${i * mul}</td>${generateRaw(num, i + 1, mul)}`;
};

const multTable = (n, i) => {
  if (i > 10) return '';
  return `</tr>${generateRaw(n, 1, i)}</tr>${multTable(n, i + 1)}`;
};

fs.writeFileSync('output.html', `<table>${multTable(input, 1)}</table>`);
// console.log(multTable(input, 1));
