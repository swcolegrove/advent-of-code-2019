import input from './input';

const modules = input.split('\n');

let sum = 0;

const calculateRequiredFuel = module => Math.floor(parseInt(module) / 3) - 2;

const sumModule = module => {
  const fuel = calculateRequiredFuel(module);

  if (fuel > 0) {
    sum += fuel;
    sumModule(fuel);
  }
};

modules.forEach(module => {
  sumModule(module);
});
console.log(sum);
