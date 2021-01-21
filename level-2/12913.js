function solution(land) {
  for (let i = 1; i < land.length; i += 1) {
    land[i] = max(land[i - 1], land[i]); // update (dp)
  }

  return Math.max(...land[land.length - 1]);
}

function max(l1, l2) {
  let r = [];

  let c = [];
  for (let i = 0; i < l2.length; i += 1) {
    for (let j = 0; j < l1.length; j += 1) {
      if (i === j) continue;

      c.push(l2[i] + l1[j]);
    }

    r.push(Math.max(...c));
    c = []; // reset
  }

  return r;
}
