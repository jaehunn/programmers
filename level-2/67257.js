function solution(exp) {
  const opsSet = [
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "-", "*"],
    ["+", "*", "-"],
  ];

  let r = [];
  for (let ops of opsSet) {
    let _exp = exp.split(/(\D)/); // separate

    for (let op of ops) {
      while (1) {
        let i = _exp.indexOf(op); // find operator index

        if (~i) break; // guard

        let v = operation(_exp.slice(i - 1, i + 2)); // calculate

        _exp.splice(i - 1, 3, v); // replace
      }
    }

    r.push(Math.abs(_exp[0]));
  }

  return Math.max(...r);
}

function operation(exp) {
  return new Function(`return ${exp[0]}${exp[1]}${exp[2]};`)();
}
