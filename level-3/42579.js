function solution(genres, plays) {}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));

// 장르
// 노래
// 고유번호

// classic = 800 + 500 + 150
// pop = 2500 + 600

// 4 1 3 0
function solution(genres, plays) {
  let playList = {};
  let genresPlays = genres.reduce((genresPlays, genre, i) => {
    genresPlays[genre] = (genresPlays[genre] || 0) + plays[i]; // ?? 는 안되네

    if (!playList[genre]) playList[genre] = [{ no: i, plays: plays[i] }];
    else playList[genre].push({ no: i, plays: plays[i] });

    return genresPlays;
  }, {});

  let genresOrder = Object.keys(genresPlays).sort((a, b) => genresPlays[b] - genresPlays[a]);

  let result = [];
  genresOrder.forEach((genre) => {
    playList[genre].sort((a, b) => b.plays - a.plays);

    result.push(playList[genre][0].no);

    if (playList[genre][1]) result.push(playList[genre][1].no);
  });

  return result;
}
