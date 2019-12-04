const min = 172930;
const max = 683082;

let currentValue = min;
let validPasswords = 0;

while (currentValue <= max) {
  const regRepeatingNumber = new RegExp(/([1-9])\1{1,}/g);
  const hasRepeat = regRepeatingNumber.test(currentValue);

  const ascendingRegex = new RegExp(/^(?:0{1,}(?=[1-9]|$))?(?:1{1,}(?=[2-9]|$))?(?:2{1,}(?=[3-9]|$))?(?:3{1,}(?=[4-9]|$))?(?:4{1,}(?=[5-9]|$))?(?:5{1,}(?=[6-9]|$))?(?:6{1,}(?=[7-9]|$))?(?:7{1,}(?=[8-9]|$))?(?:8{1,}(?=9|$))?(?:9{1,})?$/g);
  const isAscending = ascendingRegex.test(currentValue);

  if (hasRepeat && isAscending) {
    validPasswords++;
  }

  currentValue++;
}

console.log(validPasswords);
