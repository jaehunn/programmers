// wip
function solution(l, cities) {
  let r = 0; // latency

  // normalized
  let S = cities.map((s) => s.toLowerCase());

  // wip
  let c = []; // data
  let h = []; // hits

  for (let i = 0; i < S.length; i += 1) {
    let s = S[i];

    // miss: +5, swap
    if (!c[s]) {
      if (c.length >= l) {
        // ... lru logic
        let i = h.indexOf(Math.min(...h));

        c[i] = s;
        h[i] = 1;
      } else {
        c.push(s);
        h.push(1);
      }

      r += 5;
    } else {
      // hit: +1, up hits
      let i = c.indexOf(s);

      h[i] += 1;

      r += 1;
    }

    console.log(c, h, r);
  }

  return r;
}

solution(3, [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
]);
