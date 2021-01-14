function solution(numbers) {
  return getAllNums(Array.from(numbers)).filter((l) => isPrime(l)).length;
}

function getAllNums(nums) {
  let res = [];

  makeNumbers("", nums, res);

  return Array.from(new Set(res));
}

function makeNumbers(numStr, nums, res) {
  if (nums.length === 0) return;

  for (let i = 0; i < nums.length; i += 1) {
    let target = nums.shift();

    let newStr = numStr + target;
    let num = +newStr;

    res.push(num);

    makeNumbers(newStr, nums, res);

    nums.push(target);
  }
}

function isPrime(n) {
  if (n === 0 || n === 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (!(n % i)) return false;
  }

  return true;
}
