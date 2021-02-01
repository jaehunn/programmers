function solution(l, cities) {
  if (l === 0) return cities.length * 5;

  let C = cities.map((s) => s.toLowerCase()); // normalize

  let q = []; // queue

  let r = 0;
  for (let c of C) {
    let qI = q.indexOf(c);

    // hits
    if (~qI) {
      q.splice(qI, 1);

      q.push(c);

      r += 1;
    } else {
      // miss
      if (q.length >= l) q.shift();

      q.push(c);

      r += 5;
    }
  }

  return r;
}

solution(5, [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
]);
