import fs from 'fs';
import chalk from 'chalk';

const input = 23;

const generateRaw = (num, i, mul) => {
  if (i > num) return '';
  return `   <td>${i * mul}</td>\n${generateRaw(num, i + 1, mul)}`;
};

const multTable = (n, i) => {
  if (i > 10) return '';
  return `   <tr>\n${generateRaw(n, 1, i)}</tr>\n${multTable(n, i + 1)}`;
};
const generateRawAscci = (num, i, mul) => {
  if (i > num) return '';
  return `${i * mul} ${generateRawAscci(num, i + 1, mul)}`;
};

const multTableAscii = (n, i) => {
  if (i > 10) return '';
  return `${generateRawAscci(n, 1, i)}  \n ${multTableAscii(n, i + 1)}`;
};

try {
  fs.writeFileSync('output.html', `<table>\n${multTable(input, 1)}\n</table>`);
  console.log(chalk.green('output.html created succesfully at ./output.html'));
  fs.writeFileSync('output.txt', ` ${multTableAscii(input, 1)}`);
  console.log(chalk.green('output.txt created succesfully at ./output.txt'));
} catch (error) {
  console.log(chalk.red('Failed to create files.'));
}
// fs.writeFileSync('ascii.txt', `<table>${multTable(input, 1)}</table>`);
// console.log(multTable(input, 1));
