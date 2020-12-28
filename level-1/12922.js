function solution(n) {
  if (n === 1) return "수";

  let str = "";
  let d = (n / 2) << 0;
  while (d) {
    str += "수박";

    d -= 1;
  }

  return n % 2 ? (str += "수") : str;
}
