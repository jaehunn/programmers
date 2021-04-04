function solution(numbers, len = numbers.length) {
  let result = [];
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      const sum = numbers[i] + numbers[j];

      if (hasItem(result, sum)) continue;

      result.push(sum);
    }
  }

  return result.sort((a, b) => a - b);
}

function hasItem(items, item) {
  return !!~items.indexOf(item); // result !== -1
}

console.log(solution([5, 0, 2, 7]));

// other solution
// function solution(numbers) {
//   const temp = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       temp.push(numbers[i] + numbers[j]);
//     }
//   }

//   const answer = [...new Set(temp)]; // remove duplicates

//   return answer.sort((a, b) => a - b);
// }
