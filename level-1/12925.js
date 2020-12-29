function solution(s) {
  if (!isNaN(+s)) return +s;

  let isNeg = !!(s[0] === "-");
  let r = Array.from(s).slice(1).join("");

  return isNeg ? +r * -1 : +r;
}
