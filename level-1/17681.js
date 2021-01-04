// wip
function solution(n, arr1, arr2) {
  return Array(n)
    .fill(0)
    .map((v, i) => arr1[i] | arr2[i])
    .map((v) => {
      let l = 2 ** n;
      let s = v.toString(2);

      v > l;

      let r = "";
      for (const c of s) {
        r += c === "0" ? " " : "#";
      }

      while (r.length < n) {
        r = v < l ? " " + r : r + " ";
      }

      return r;
    });
}
