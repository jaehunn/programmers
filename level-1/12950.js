function solution(arr1, arr2) {
  let r = [];
  let i = 0;
  while (i < arr1.length) {
    let _r = [];
    let j = 0;
    while (j < arr1[i].length) {
      _r.push(arr1[i][j] + arr2[i][j]);

      j += 1;
    }

    r.push(_r);

    i += 1;
  }

  return r;
}
