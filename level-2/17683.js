// wip
function solution(word, infos) {
  let _infos = infos.map((s) => s.split(","));

  let r = [];
  for (let info of _infos) {
    let time = getTime(info[0], info[1]);
    let title = info[2];
    let text = info[3];

    let c = [];
    let s = "";

    if (time >= text.length) {
      for (let i = 0; i < (time / text.length) << 0; i += 1) {
        s += text;
      }

      for (let i = 0; i < time % text.length; i += 1) {
        s += text[i];
      }
    } else s = text;

    for (let i = 0; i < s.length; i += 1) {
      let _s = "";

      for (let j = 0; j < time; j += 1) {
        if (i + j > s.length) {
          // 문자열이 끝에 다다랐을떄 어떻게 앞에서부터 다시시작할까
        }
      }

      c.push(_s);
    }

    r.push(c);
  }

  console.log(r);
}

function getTime(a, b) {
  let r = 0;

  let [aH, aM] = a.split(":");
  let [bH, bM] = b.split(":");

  let h = bH - aH;
  let m = bM - aM;

  if (h) {
    r += 60;
    h -= 1;
  }

  r += m;

  return r;
}

solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGABA", "13:00,13:05,WORLD,ABCDEF"]);
