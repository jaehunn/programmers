// 1 2 3
// 4 5 6
// 7 8 9
// * 0 #

// [3, 0] [3, 2]
// [0, 0] -> 3 vs. 5 -> l

// [0,0]

function solution(numbers, hand) {
  let o = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  let l = [3, 0]; // *
  let r = [3, 2]; // #
  let ld = 0;
  let rd = 0;
  let res = "";

  numbers.forEach((v) => {
    if (v === 1 || v === 4 || v === 7) res += "L";
    else if (v === 3 || v === 6 || v === 9) res += "R";
    else {
      // 2 5 8 0
      ld = dist(l, o[v]);
      rd = dist(r, o[v]);

      if (ld === rd) {
        if (hand === "left") res += "L";
        else res += "R";
      } else if (ld > rd) res += "R";
      else res += "L";
    }

    res.charAt(res.length - 1) === "L" ? (l = o[v]) : (r = o[v]);
  });

  return res;
}

// |eX - sX| + |eY - eX|
function dist(s, e) {
  return Math.abs(e[0] - s[0]) + Math.abs(e[1] - s[1]);
}
