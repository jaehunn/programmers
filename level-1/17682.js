function solution(dartResult) {
  const Bonus = {
    S: 1,
    D: 2,
    T: 3,
  };

  const Options = {
    "*": 2,
    "#": -1,
  };

  let nums = []; // lexical
  let currentAcc = "";

  Array.from(dartResult).forEach((value) => {
    if (Number.isInteger(+value)) currentAcc += value;

    if (Options[value]) addOption(value);

    if (Bonus[value]) {
      nums.push(addBonus(+currentAcc, value));

      currentAcc = ""; // reset
    }
  });

  return getSum();

  function addOption(key) {
    if (key === "*") nums = nums.map((num, index) => (index >= nums.length - 2 ? num * 2 : num));
    else nums[nums.length - 1] *= -1; // key is "#"
  }

  function addBonus(num, key) {
    return Math.pow(num, Bonus[key]);
  }

  function getSum() {
    return nums.reduce((total, num) => (total += num), 0);
  }
}
