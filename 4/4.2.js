const min = 172930;
const max = 683082;

let currentValue = min;
let validPasswords = 0;

while (currentValue <= max) {
  // Validate that each number is the same or greater than the next
  const ascendingRegex = new RegExp(/^(?:0{1,}(?=[1-9]|$))?(?:1{1,}(?=[2-9]|$))?(?:2{1,}(?=[3-9]|$))?(?:3{1,}(?=[4-9]|$))?(?:4{1,}(?=[5-9]|$))?(?:5{1,}(?=[6-9]|$))?(?:6{1,}(?=[7-9]|$))?(?:7{1,}(?=[8-9]|$))?(?:8{1,}(?=9|$))?(?:9{1,})?$/g);
  const isAscending = ascendingRegex.test(currentValue);

  // Validate "Double number" repeats only
  // 001111 is valid
  // 000111 is not
  // 000011 is valid
  // 001122 is valid
  const hasDoubleReg = new RegExp(/^(?:.*([0-9])(?!\1))?([0-9])\2(?!\2)/g);
  const hasDouble = hasDoubleReg.test(currentValue);

  if (isAscending && hasDouble) {
    validPasswords++;
  }

  currentValue++;
}

console.log(validPasswords);
