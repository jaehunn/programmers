function solution(N) {
  let isPrimes = new Array(N + 1).fill(true);

  isPrimes[0] = false;
  isPrimes[1] = false;

  for (let num = 2; num <= N; num += 1) {
    if (isPrimes[num]) {
      let squareNum = num * num;

      while (squareNum <= N) {
        isPrimes[squareNum] = false;

        squareNum += num; // multiple
      }
    }
  }

  return isPrimes.filter((isPrime) => isPrime).length;
}
