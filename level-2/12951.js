function solution(str) {
  if (str.length === 1 && typeof str === "string") return str.toUpperCase();

  return str
    .split(" ")
    .map((word) => {
      let newWord = "";

      for (let index = 0; index < word.length; index += 1) {
        const letter = word[index];

        if (typeof letter === "string") {
          newWord += index === 0 ? letter.toUpperCase() : letter.toLowerCase();
        } else newWord += letter;
      }

      return newWord;
    })
    .join(" ");
}
