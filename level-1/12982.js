function solution(D, budget) {
  D.sort((a, b) => a - b);

  let index = 0;
  while (D[index] <= budget) {
    budget -= D[index];

    index += 1;
  }

  return index; // count
}
