function solution(nums) {
  return combination(nums, 3) // get combination sets
    .map((set) => set.reduce((sum, num) => sum + num, 0)) // get sum each set
    .filter((num) => isPrime(num)).length; // filter prime -> count
}

function combination(items, len) {
  if (len === 1) return items.map((item) => [item]);

  const result = [];

  items.forEach((item, index) => {
    const smallers = combination(items.slice(index + 1), len - 1);

    smallers.forEach((smaller) => {
      result.push([item].concat(smaller));
    });
  });

  return result;
}

function isPrime(n) {
  if (n === 1) return false;
  if (n === 2 || n === 3) return true;
  if (!(n % 2)) return false; // even

  for (let d = 3; d <= Math.sqrt(n); d += 2) {
    if (!(n % d)) return false;
  }

  return true;
}
