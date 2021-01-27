function solution(arr) {
  return arr.reduce((a, b) => lcm(a, b));
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// if a < b, swap
function gcd(a, b) {
  if (!b) return a;

  return gcd(b, a % b);
}
