function solution(str, num) {
  const Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  return Array.from(str)
    .map((letter) => Alpha.indexOf(letter))
    .map((letterIndex) => {
      if (letterIndex === -1) return " ";

      let index = (letterIndex + num) % 26;

      if (letterIndex > 25) index += 26; // z + 1 -> a

      return Alpha.charAt(index);
    })
    .join("");
}
