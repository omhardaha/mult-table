import fs from 'fs';
import chalk from 'chalk';

const input = 20;

const generateRaw = (num, i, mul) => {
  if (i > num) return '';
  return `        <td scope="row">${i * mul}</td>\n${generateRaw(num, i + 1, mul)}`;
};

const multTable = (n, i) => {
  if (i > 10) return '';
  return `       <tr class="table-Primary">\n${generateRaw(n, 1, i)}       </tr>\n${multTable(n, i + 1)}`;
};

const generateRawAscii = (num, i, mul) => {
  if (i > num) return '';
  return ` | ${i * mul} ${generateRawAscii(num, i + 1, mul)} |`;
};

const multTableAscii = (n, i) => {
  if (i > 10) return '';
  return `${generateRawAscii(n, 1, i)}  \n ${multTableAscii(n, i + 1)}`;
};
const start = `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>`;

const end = `
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>`;

try {
  const startTime = performance.now();
  fs.writeFileSync('output.html', `${start}\n    <table  class="table table-dark table-sm">\n${multTable(input, 1)}    </table>${end}`);
  console.log(chalk.green('output.html created succesfully at ./output.html'));
  fs.writeFileSync('output.txt', ` ${multTableAscii(input, 1)}`);
  console.log(chalk.green('output.txt created succesfully at ./output.txt'));

  const endTime = performance.now();
  const runTime = endTime - startTime;

  // Log the total runtime to the console
  // eslint-disable-next-line no-console
  console.log(`Runtime: ${runTime}`);
} catch (error) {
  console.log(chalk.red('Failed to create files.'));
  console.log(error);
}
// fs.writeFileSync('ascii.txt', `<table>${multTable(input, 1)}</table>`);
// console.log(multTable(input, 1));
