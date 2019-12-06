import input from './input.js';
// const input = `3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99`;

const program = input.split(',').map(num => parseInt(num, 10));

const runProgram = (prInput) => {
  const tempProgram = [...program];
  // tempProgram[1] = noun;
  // tempProgram[2] = verb;

  let i = 0;
  while (i < tempProgram.length) {
    const instructions = tempProgram[i].toString().length > 1 ? tempProgram[i].toString().split('').reverse() : [`${tempProgram[i]}`, '0', '0', '0', '0'];
    // console.log(tempProgram[i]);
    const optcode = parseInt(instructions[1].concat(instructions[0]));
    const mode1 = parseInt(instructions[2] || 0);
    const mode2 = parseInt(instructions[3] || 0);
    const mode3 = parseInt(instructions[4] || 0);
    console.log('vals', optcode, mode1, mode2, mode3);
    console.log(optcode);

    const readPos1 = tempProgram[i + 1];
    const readPos2 = tempProgram[i + 2];
    const storePos = tempProgram[i + 3];

    const paramValue1 = mode1 === 1 ? tempProgram[i + 1] : tempProgram[readPos1];
    const paramValue2 = mode2 === 1 ? tempProgram[i + 2] : tempProgram[readPos2];

    if (optcode === 1) {
      // Add
      console.log(`Adding ${paramValue1} + ${paramValue2}. Storing in ${storePos}`);
      const sum = paramValue1 + paramValue2;
      tempProgram[storePos] = sum;

      i += 4;
    } else if (optcode === 2) {
      // Multiply
      console.log(`Multiplying ${paramValue1} + ${paramValue2}. Storing in ${storePos}`);
      const multiple = paramValue1 * paramValue2;
      tempProgram[storePos] = multiple;

      i += 4;
    } else if (optcode === 3) {
      // get input
      console.log(`Getting input and storing at ${tempProgram[i + 1]}`);
      const inputPos = tempProgram[i + 1];
      tempProgram[inputPos] = prInput;
      i += 2;
    } else if (optcode === 4) {
      // output to parameter position
      console.log(`Diagnostic code: ${paramValue1}`);
      i += 2;
    } else if (optcode === 5) {
      if (paramValue1 !== 0) {
        console.log(`setting i to ${paramValue2}`);
        i = paramValue2;
      } else {
        i += 3;
      }
    } else if (optcode === 6) {
      if (paramValue1 === 0) {
        console.log(`setting i to ${paramValue2}`);
        i = paramValue2;
      } else {
        i += 3;
      }
    } else if (optcode === 7) {
      if (paramValue1 < paramValue2) {
        tempProgram[storePos] = 1;
      } else {
        tempProgram[storePos] = 0;
      }
      i += 4;
    } else if (optcode === 8) {
      if (paramValue1 === paramValue2) {
        tempProgram[storePos] = 1;
      } else {
        tempProgram[storePos] = 0;
      }
      i += 4;
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

runProgram(5);
