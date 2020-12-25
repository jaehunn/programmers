function solution(a, b) {
  const h = {
    0: "FRI",
    1: "SAT",
    2: "SUN",
    3: "MON",
    4: "TUE",
    5: "WED",
    6: "THU",
  };

  while (a > 1) {
    a -= 1;

    if (a === 2) b += 29;
    else if (a === 4 || a === 6 || a === 9 || a === 11) b += 30;
    else b += 31;
  }

  return h[(b - 1) % 7];
}
