import input from './input.js';

const program = input.split(',').map(num => parseInt(num, 10));

program[1] = 12;
program[2] = 2;

let i = 0;
while (i < program.length) {
  const optcode = program[i];

  const readPos1 = program[i + 1];
  const readPos2 = program[i + 2];
  const storePos = program[i + 3];

  if (optcode === 1) {
    const sum = program[readPos1] + program[readPos2];
    program[storePos] = sum;

    i += 4;
  } else if (optcode === 2) {
    const multiple = program[readPos1] * program[readPos2];
    program[storePos] = multiple;

    i += 4;
  } else if (optcode === 99) {
    // stop;
    i = program.length + 1;
  } else {
    console.log(`ERROR: ${i} : ${program[i]}`);
  }
}

console.log(program[0]);
