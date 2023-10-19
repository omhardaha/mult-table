import fs from 'fs';
import chalk from 'chalk';

const input = 20;

const generateRaw = (num, i, mul) => {
    const arr = [];
    while (i <= num) {
        arr.push(`        <td scope="row">${i * mul}</td>\n`);
        i += 1;
    }
    return arr.join('');
};

const multTable = (n, i) => {
    const arr = [];
    while (i < 11) {
        arr.push(`       <tr class="table-Primary">\n${generateRaw(n, 1, i)}       </tr>\n`);
        i += 1;
    }
    return arr.join('');
};

const spaceDigit = (num) => {
    let s = String(num);
    while (s.length < 4) {
        s += ' ';
    }
    return `${s}|`;
};
const generateRawAscii = (num, i, mul) => {
    const arr = [];
    while (i <= num) {
        arr.push(`${spaceDigit(i * mul)} `);
        i += 1;
    }
    return arr.join('');
};

const multTableAscii = (n, i) => {
    const arr = [];
    while (i < 11) {
        arr.push(`${generateRawAscii(n, 1, i)}  \n `);
        i += 1;
    }
    return arr.join('');
};

const startHTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Multiplication Table</title>
  </head>
  <body>`;

const endHTML = `
  </body>
</html>`;

try {
    const startTime = performance.now();
    fs.writeFileSync('output.html', `${startHTML}\n    <table  class="table table-dark table-sm  text-center ">\n${multTable(input, 1)}    </table>${endHTML}`);
    console.log(('File created succesfully at ./output.html'));
    fs.writeFileSync('output.txt', ` ${multTableAscii(input, 1)}`);
    console.log(('File created succesfully at ./output.txt'));

    const endTime = performance.now();
    const runTime = endTime - startTime;
    console.log(`Runtime: ${runTime}`);
} catch (error) {
    console.log(chalk.red('Failed to create files.'));
    console.log(error);
}
