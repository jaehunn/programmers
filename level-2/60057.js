function solution(s) {
  if (s.length === 1) return 1;

  let r = 1000;

  let l = (s.length / 2) << 0;
  while (l) {
    let pre = s.substring(0, l);
    let _s = [pre];
    let _sI = 0;

    // compression
    let cnt = 1;
    for (let i = l; i < s.length; i += l) {
      let cur = s.substring(i, i + l);

      if (pre === cur) _s[_sI] = ++cnt + cur;
      else {
        _s[++_sI] = cur;

        cnt = 1;
      }

      pre = cur;
    }

    // update
    r = Math.min(
      r,
      _s.reduce((t, s) => (t += s.length), 0)
    );

    l -= 1;
  }

  return r;
}
