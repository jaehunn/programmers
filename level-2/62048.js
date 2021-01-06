function solution(w, h) {
  return w * h - (w + h - gcd(w, h));
}

function gcd(a, b) {
  if (b > a) [a, b] = [b, a];

  return b ? gcd(b, a % b) : a;
}
