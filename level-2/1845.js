function solution(nums, n = nums.length) {
  let r = n / 2;
  let o = nums.reduce((o, v) => {
    if (!o[v]) o[v] = 1;
    else o[v] += 1;

    return o;
  }, {});

  // nCr
  let res = 0;
  for (let k in o) {
    if (o[k]) {
      r -= 1;
      o[k] -= 1;

      res += 1;
    }

    if (r === 0) return res;
  }

  return res;
}

console.log(solution([3, 1, 2, 3]));
