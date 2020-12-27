function solution(s) {
  let res = 0;
  Array.from(s).forEach((v) => {
    if (v === "p" || v === "P") res += 1;
    else if (v === "y" || v === "Y") res -= 1;
  });

  return !res;
}
