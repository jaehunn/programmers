function solution(n) {
  let isP = new Array(n + 1).fill(true);

  isP[0] = false;
  isP[1] = false;

  for (let i = 2; i <= n; i += 1) {
    if (isP[i]) {
      let j = i * i;

      while (j <= n) {
        isP[j] = false;

        j += i;
      }
    }
  }

  return isP.filter((v) => !!v).length;
}
