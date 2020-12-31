function solution(s) {
  return s
    .split(" ")
    .map((w) => {
      let _w = "";
      for (let i = 0; i < w.length; i += 1) {
        _w += i % 2 ? w.charAt(i).toLowerCase() : w.charAt(i).toUpperCase();
      }

      return _w;
    })
    .join(" ");
}
