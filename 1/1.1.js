import input from './input';

const modules = input.split('\n');

let sum = 0;
modules.forEach(module => {
  const fuelRequirement = Math.floor(parseInt(module) / 3) - 2;
  sum += fuelRequirement;
});
console.log(sum);
