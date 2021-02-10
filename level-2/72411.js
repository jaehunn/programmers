function solution(orders, course) {
  let _orders = orders.sort((a, b) => a.length - b.length);

  let o = {}; // { course: [] }
  for (let i = 0; i < _orders.length; i += 1) {
    let l = _orders[i].length;
    for (let j = i; j < _orders.length; j += 1) {
      let combos = combination(Array.from(_orders[j]), l);

      // ...
    }
  }

  // course key 를 찾아서 결과에 개별 푸시
  let r = [];
  for (let n of course) {
    if (o[n]) r.push(...o[n]);
  }

  return r;
}

function combination(items, l) {
  if (l === 1) return items.map((item) => [item]);

  let r = [];
  items.forEach((item, i) => {
    let smallers = combination(items.slice(i + 1), l - 1);

    smallers.forEach((smaller) => {
      r.push([item].concat(smaller));
    });
  });

  return r;
}

solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
