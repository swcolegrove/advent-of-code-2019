import input from './input.js';
// const input = `R75,D30,R83,U83,L12,D49,R71,U7,L72
// U62,R66,U55,R34,D71,R55,D58,R83`;
// const input = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
// U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;
// const input = `R8,U5,L5,D3
// U7,R6,D4,L4`;

const paths = input.split('\n');
const path1 = paths[0].split(',');
const path2 = paths[1].split(',');

const traversePath = path => {
  const plots = [];
  const currentLocation = [0, 0];

  path.forEach(movement => {
    const direction = movement.substr(0, 1);
    const distance = parseInt(movement.substr(1), 10);

    if (direction === 'R') {
      const newPlots = Array.from(new Array(distance), (x, idx) => `${currentLocation[0] + idx + 1},${currentLocation[1]}`);
      plots.push(...newPlots);
      currentLocation[0] += distance;
    } else if (direction === 'L') {
      const newPlots = Array.from(new Array(distance), (x, idx) => `${currentLocation[0] - idx - 1},${currentLocation[1]}`);
      plots.push(...newPlots);
      currentLocation[0] -= distance;
    } else if (direction === 'U') {
      const newPlots = Array.from(new Array(distance), (x, idx) => `${currentLocation[0]},${currentLocation[1] + idx + 1}`);
      plots.push(...newPlots);
      currentLocation[1] += distance;
    } else if (direction === 'D') {
      const newPlots = Array.from(new Array(distance), (x, idx) => `${currentLocation[0]},${currentLocation[1] - idx - 1}`);
      plots.push(...newPlots);
      currentLocation[1] -= distance;
    }
  });
  return plots;
};

const path1Plots = traversePath(path1);
const path2Plots = traversePath(path2);

const pointIntersections = path1Plots.filter(point => path2Plots.includes(point));
const intersectDistances = [];
pointIntersections.forEach(intersect => {
  const distance = path1Plots.indexOf(intersect) + path2Plots.indexOf(intersect) + 2;
  intersectDistances.push(distance);
});
console.log(intersectDistances);
intersectDistances.sort((a, b) => {return a - b});
console.log(intersectDistances[0]);
