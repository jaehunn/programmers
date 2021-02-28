// wip
// 심사대의 처리는 독자적으로 이루어진다. 따라서 총 처리되는 사람 수 = (특정 시간 / 해당 심사대의 처리 시간) * 심사대 개수
function solution(people, times) {
  times.sort((a, b) => a - b);

  let minTime = 1;
  let maxTime = people * times[times.length - 1];

  let targetTime = maxTime;
  while (minTime <= maxTime) {
    const avgTime = ((minTime + maxTime) / 2) << 0;

    let clearPeople = 0;
    times.forEach((time) => {
      clearPeople += (avgTime / time) << 0;

      if (clearPeople >= people) {
        targetTime = Math.min(targetTime, avgTime);

        return;
      }
    });

    clearPeople >= people ? (maxTime = avgTime - 1) : (minTime = avgTime + 1);
  }

  return targetTime;
}
