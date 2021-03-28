function solution(arr1, arr2) {
  const Row = arr1.length;
  const Col = arr2[0].length;

  let result = []; // Row X Col

  let row = 0;
  while (row < Row) {
    let element = [];

    let col = 0;
    while (col < Col) {
      element.push(arr1[row][col] + arr2[row][col]);

      col += 1;
    }

    result.push(element);

    row += 1;
  }

  return result;
}
