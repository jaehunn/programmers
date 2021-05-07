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

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0) return false; // even number

  for (let division = 3; division <= Math.sqrt(num); division += 2) {
    if (num % division === 0) return false; // from pow num
  }

  return true;
}
