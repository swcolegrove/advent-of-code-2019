import input from './input.js';

const program = input.split(',').map(num => parseInt(num, 10));

const runProgram = (input) => {
  const tempProgram = [...program];
  // tempProgram[1] = noun;
  // tempProgram[2] = verb;

  let i = 0;
  while (i < tempProgram.length) {
    const instructions = tempProgram[i].toString().length > 1 ? tempProgram[i].toString().split('').reverse() : [`${tempProgram[i]}`, '0', '0', '0'];
    // console.log(tempProgram[i]);
    const optcode = parseInt(instructions[1].concat(instructions[0]));
    const mode1 = parseInt(instructions[2] || 0);
    const mode2 = parseInt(instructions[3] || 0);
    const mode3 = parseInt(instructions[4] || 0);
    // console.log('vals', optcode, mode1, mode2, mode3);
    // console.log(optcode);

    const readPos1 = tempProgram[i + 1];
    const readPos2 = tempProgram[i + 2];
    const storePos = tempProgram[i + 3];

    const paramValue1 = mode1 === 1 ? tempProgram[i + 1] : tempProgram[readPos1];
    const paramValue2 = mode2 === 1 ? tempProgram[i + 2] : tempProgram[readPos2];

    if (optcode === 1) {
      // Add
      const sum = paramValue1 + paramValue2;
      tempProgram[storePos] = sum;

      i += 4;
    } else if (optcode === 2) {
      // Multiply
      const multiple = paramValue1 * paramValue2;
      tempProgram[storePos] = multiple;

      i += 4;
    } else if (optcode === 3) {
      // get input
      console.log(`Getting input and storing at ${tempProgram[i + 1]}`);
      const inputPos = tempProgram[i + 1];
      tempProgram[inputPos] = input;
      i += 2;
    } else if (optcode === 4) {
      // output to parameter position
      console.log(`Diagnostic code: ${paramValue1}`);
      i += 2;
    } else if (optcode === 99) {
      // stop;
      i = tempProgram.length + 1;
    } else {
      console.log(`ERROR: ${i} : ${tempProgram[i]}`);
      i = tempProgram.length + 1;
    }
  }

  return tempProgram[0];
};

runProgram(1);
