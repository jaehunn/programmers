// wip
function solution(n, times) {
  times.sort((a, b) => a - b);

  let l = 1;
  let r = n * times[times.length - 1];

  let res = r;
  while (l <= r) {
    let m = ((l + r) / 2) << 0;

    let c = 0;
    times.forEach((time) => {
      c += (m / time) << 0;

      if (c >= n) {
        res = Math.min(m, r);

        return;
      }
    });

    c >= n ? (r = m - 1) : (l = m + 1);
  }

  return res;
}
