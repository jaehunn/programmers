function solution(nums) {
  return combination(nums, 3).filter((v) => isPrime(v)).length;
}

function combination(items, l) {
  if (l === 1) return items.map((item) => [item]);

  let r = [];

  items.forEach((item, i) => {
    let smallers = combination(items.slice(i + 1), l - 1);

    smallers.forEach((smaller) => {
      r.push([item].concat(smaller));
    });
  });

  return r.map((vs) => vs.reduce((t, v) => t + v, 0));
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
