function solution(arr) {
  if (arr.length === 1) return [-1];

  let mI = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[mI] > arr[i]) mI = i;
  }

  arr.splice(mI, 1);

  return arr;
}
