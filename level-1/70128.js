function solution(a, b, len = a.length) {
  let innerProduct = 0;
  for (let i = 0; i < len; i += 1) {
    innerProduct += a[i] * b[i];
  }

  return innerProduct;
}
