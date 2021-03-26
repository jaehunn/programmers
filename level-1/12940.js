function solution(n, m) {
  const gcd = getGCD(n, m);
  const lcm = getLCM(n, m);

  return [gcd, lcm];
}

function getGCD(a, b) {
  while (a && b && a !== b) {
    if (a > b) [a, b] = [a - b, b];
    else [a, b] = [a, b - a];
  }

  return a || b;
}

function getLCM(a, b) {
  return (a * b) / getGCD(a, b);
}
