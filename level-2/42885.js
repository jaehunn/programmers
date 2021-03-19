// // wip
// function solution(people, limit, l = people.length) {
//   // 57 = 28 + 29
//   // 58 = 28 + 28
//   let r = people.filter(
//     (v) => v <= (limit % 2 ? ((limit / 2) << 0) + 1 : (limit / 2) << 0)
//   ).length;

//   return r % 2 ? l - r + ((r / 2) << 0) + 1 : (l - r + r / 2) << 0;
// }

function solution(people, limit) {
  if (people.length === 1) return 1;

  people.sort((a, b) => a - b);

  let res = 0;

  let l = 0;
  let r = people.length - 1;
  while (l <= r) {
    if (people[l] + people[r] <= limit) l += 1;
    r -= 1;

    res += 1;
  }

  return res;
}
