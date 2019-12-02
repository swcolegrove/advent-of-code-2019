import input from './input.js';

const program = input.split(',').map(num => parseInt(num, 10));

const runProgram = (noun, verb) => {
  const tempProgram = [...program];
  tempProgram[1] = noun;
  tempProgram[2] = verb;

  let i = 0;
  while (i < tempProgram.length) {
    const optcode = tempProgram[i];

    const readPos1 = tempProgram[i + 1];
    const readPos2 = tempProgram[i + 2];
    const storePos = tempProgram[i + 3];

    if (optcode === 1) {
      const sum = tempProgram[readPos1] + tempProgram[readPos2];
      tempProgram[storePos] = sum;

      i += 4;
    } else if (optcode === 2) {
      const multiple = tempProgram[readPos1] * tempProgram[readPos2];
      tempProgram[storePos] = multiple;

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


for (let noun = 0; noun <= 99; noun++) {
  for (let verb = 0; verb <= 99; verb++) {
    const programOutput = runProgram(noun, verb);
    if (programOutput === 19690720) {
      console.log(`Noun: ${noun}, Verb: ${verb}`);
      console.log(100 * noun + verb);
      noun = 100;
      verb = 100;
    }
  }
}
