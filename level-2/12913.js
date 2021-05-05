// wip
function solution(land) {
  for (let i = 1; i < land.length; i += 1) {
    land[i] = getMaxLand(land[i - 1], land[i]); // update
  }

  return Math.max(...land[land.length - 1]);
}

function getMaxLand(prevLand, currLand) {
  let currLandMaxCols = [];

  let currLandCols = [];
  for (let currLandCol = 0; currLandCol < currLand.length; currLandCol += 1) {
    for (let prevLandCol = 0; prevLandCol < prevLand.length; prevLandCol += 1) {
      if (currLandCol === prevLandCol) continue;

      currLandCols.push(currLand[currLandCol] + prevLand[prevLandCol]);
    }

    currLandMaxCols.push(Math.max(...currLandCols));
    currLandCols = []; // reset
  }

  return currLandMaxCols;
}
