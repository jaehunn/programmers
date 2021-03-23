function solution(str) {
  let result = 0;

  Array.from(str).forEach((letter) => {
    if (letter === "p" || letter === "P") result += 1;
    else if (letter === "y" || letter === "Y") result -= 1;
  });

  return result === 0;
}
