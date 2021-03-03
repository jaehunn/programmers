function solution(ops) {
  const Q = [];
  ops.forEach((op) => {
    const [k, v] = op.split(" ");

    if (k === "I") {
      Q.push(+v);
      Q.sort((a, b) => a - b);
    } else {
      +v === 1 ? Q.pop() : Q.shift();
    }
  });

  return Q.length ? [Q[Q.length - 1], Q[0]] : [0, 0];
}
