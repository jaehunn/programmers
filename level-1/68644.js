function solution(numbers) {
  const res = [];
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      const sum = numbers[i] + numbers[j];

      if (!~res.indexOf(sum)) res.push(sum);
    }
  }

  return res.sort((a, b) => a - b);
}

// others
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
