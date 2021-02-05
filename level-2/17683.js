// wip
function solution(word, infos) {
  let _word = word.replace(/(\D)#/g, (s, c) => c.toLowerCase());

  let _infos = infos.map((info) => {
    let _info = info.split(",");
    let text = _info[3].replace(/(\D)#/g, (s, c) => c.toLowerCase());

    return [_info[2], getConvertText(getTime(_info[0], _info[1]), text)];
  });

  let r = _infos.reduce((r, _info) => {
    if (~_info[1].indexOf(_word)) {
      if (!r.length || r[1].length < _info[1].length) return _info; // update
    }

    return r;
  }, []);

  return r.length ? r[0] : "(None)";
}

function getConvertText(t, text) {
  return text.repeat(t / text.length) + text.substring(0, t % text.length);
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
