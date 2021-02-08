function solution(lines) {
  // data
  let _lines = lines.map((line) => getMs(line)); // [{S,E}, {S,E} ...]

  let r = 0;
  _lines.forEach((_line) => {
    // range
    let S = _line.reqE - 1; // -1ms
    let E = S + 1000; // +1s

    let c = 0;
    _lines.forEach(({ reqS: s, reqE: e }) => {
      if (
        (e <= E && e >= S) || // left
        (s <= E && s >= S) || // right
        (s <= S && e >= E) // over
      )
        c += 1;
    });

    r = Math.max(r, c);
  });

  return r;
}

function getMs(line) {
  let _line = line.split(" ");
  let S = _line[1].split(":");
  let T = +_line[2].substring(0, _line[2].length - 1) * 1000; // s -> ms

  let [h, m, s] = S;

  let reqE = (+h * 3600 + +m * 60 + +s) * 1000;
  let reqS = reqE - T + 1; // T = end - start + 1;

  return { reqS, reqE };
}
