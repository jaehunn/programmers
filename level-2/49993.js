function solution(s, sts) {
  let r = 0;
  for (const st of sts) {
    if (hlpr(s, st)) r += 1;
  }

  return r;
}

function hlpr(s, st) {
  let _st = Array.from(st)
    .filter((c) => s.includes(c))
    .join("");

  return _st === s.substring(0, _st.length);
}
