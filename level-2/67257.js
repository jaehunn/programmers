// wip
function solution(exp, l = exp.length) {
  const h = {
    1: [["+"], ["-"], ["*"]],
    2: [
      ["+", "-"],
      ["-", "+"],
      ["*", "-"],
      ["-", "*"],
      ["+", "*"],
      ["*", "+"],
    ],
    3: [
      ["+", "-", "*"],
      ["+", "*", "-"],
      ["-", "+", "*"],
      ["-", "*", "+"],
      ["*", "-", "+"],
      ["*", "+", "-"],
    ],
  };

  let opnd = exp.split(/[^0-9]/g);
  let ops = exp.split(/[+|*|-]/g);
  let opss = h[ops.length]; // type

  let res = 0;
  let opndStk = [];
  let opsStk = [];
  while (1) {
      // ...
      opndStk.push(opnd[]);
      opsStk.push(ops[]);
  }

  return res;
}

function operation(...r) {
  return new Function(`return ${r[0]}${r[1]}${r[2]}; `)();
}

solution("50*6-3*2");
