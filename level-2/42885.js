// wip
function solution(people, limit, l = people.length) {
  // 57 = 28 + 29
  // 58 = 28 + 28
  let r = people.filter(
    (v) => v <= (limit % 2 ? ((limit / 2) << 0) + 1 : (limit / 2) << 0)
  ).length;

  return r % 2 ? l - r + ((r / 2) << 0) + 1 : (l - r + r / 2) << 0;
}

function _solution(people, limit, l = people.length) {}
