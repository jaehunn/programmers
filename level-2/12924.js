// wip
function solution(n) {
  let validCount = 0;

  for (let i = 1; i <= n; i += 1) {
    validCount += isValid(n, i) ? 1 : 0;
  }

  return validCount;
}

function isValid(currentN, startN) {
  if (currentN === 0) return true;
  if (currentN < 0) return false;

  return isValid(currentN - startN, startN + 1);
}

function getValidNumber() {
  // ...
}

// 결과가 홀수인 약수?!
