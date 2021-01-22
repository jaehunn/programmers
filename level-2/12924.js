function solution(n) {
  let r = 0;

  for (let i = 1; i <= n; i += 1) {
    r += helper(n, i);
  }

  return r;
}

function helper(n, s) {
  if (n === 0) return 1;
  if (n < 0) return 0;

  return helper(n - s, s + 1);
}

// 결과가 홀수인 약수?!
