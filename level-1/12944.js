function solution(arr) {
  const average = getAverage(arr);

  return average;
}

function getAverage(arr, len = arr.length) {
  const sum = getSum(arr);

  return sum / len;
}

function getSum(arr) {
  let sum = 0;

  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex < endIndex) {
    sum += arr[startIndex] + arr[endIndex];

    startIndex += 1;
    endIndex -= 1;
  }

  // length is odd length
  if (startIndex === endIndex) return (sum += arr[startIndex]);

  return sum;
}
