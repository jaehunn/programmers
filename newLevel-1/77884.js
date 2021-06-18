// @see https://programmers.co.kr/learn/courses/30/lessons/77884

// 제곱근이 있는지만 확인하면 될 것같다.

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i += 1) {
    result += hasSquareRoot(i) ? -i : i;
  }

  return result;
}

function hasSquareRoot(num) {
  if (num === 1) return true;

  // 제곱근 정수 체크
  return Math.sqrt(num) % 1 === 0;
}
