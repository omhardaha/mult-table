import fs from 'fs';
import chalk from 'chalk';

const input = 23;

const generateRaw = (num, i, mul) => {
  if (i > num) return '';
  return `<td>${i * mul}</td>${generateRaw(num, i + 1, mul)}`;
};

const multTable = (n, i) => {
  if (i > 10) return '';
  return `</tr>${generateRaw(n, 1, i)}</tr>${multTable(n, i + 1)}`;
};

try {
  fs.writeFileSync('output.html', `<table>${multTable(input, 1)}</table>`);
  console.log(chalk.green('output.html created succesfully at ./outpur.html'));
} catch (error) {
  console.log(chalk.red('Failed to create file.'));
}
// fs.writeFileSync('ascii.txt', `<table>${multTable(input, 1)}</table>`);
// console.log(multTable(input, 1));
