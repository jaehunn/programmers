// wip
function solution(s1, s2) {
  let _s1 = sets(nomalize(s1));
  let _s2 = sets(nomalize(s2));

  // filter
  _s1 = _s1.filter((s) => /^[a-zA-Z]*$/.test(s));
  _s2 = _s2.filter((s) => /^[a-zA-Z]*$/.test(s));

  let uni = _s1.length + _s2.length;

  let and = 0;
  while (_s1.length && _s2.length) {
    let c = _s1.shift();
    let i = _s2.indexOf(c);

    if (~i) {
      _s2.splice(i, 1);

      and += 1;
    }
  }

  let or = uni - and;

  if (or === 0) return 65536;

  return res(and / or);
}

function sets(s) {
  let r = [];
  for (let i = 0; i < s.length - 1; i += 1) {
    let _c = s[i];
    let c = s[i + 1];

    r.push(_c + c);
  }

  return r;
}

function nomalize(s) {
  return s.toLowerCase();
}

function res(r) {
  r = r >= 1 ? 1 : r;

  return (r * 65536) << 0;
}
