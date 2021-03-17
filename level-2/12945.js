function solution(n) {
  let r = [0, 1];

  // iteration
  let i = 2;
  while (i <= n) {
    r[i] = (r[i - 2] + r[i - 1]) % 1234567;

    i += 1;
  }

  return r[n];
}

// runtime error
function _solution(n) {
  let h = {};

  return helper(n);

  function helper(n) {
    if (n < 2) return n;
    if (h[n]) return h[n];

    return (h[n] = (helper(n - 2) + helper(n - 1)) % 1234567);
  }
}
