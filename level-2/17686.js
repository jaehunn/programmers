function solution(files) {
  let h = files.map((file) => file.match(/\D+/g)[0].toLowerCase());
  let n = files.map((file) => +file.match(/\d+/).join(""));

  let r = files.map((v, i) => i);

  return r
    .sort((a, b) => {
      if (n[a] === n[b]) return 0;

      return n[a] < n[b] ? -1 : 1;
    })
    .sort((a, b) => {
      if (h[a] === h[b]) return 0;

      return h[a] < h[b] ? -1 : 1;
    })

    .map((i) => files[i]);
}

// [F-5 Freedom Fighter, B-50 Superfortress, A-10 Thunderbolt II, F-14 Tomcat]

console.log(solution(["foo9", "foo010bar020", "F-15"]));
