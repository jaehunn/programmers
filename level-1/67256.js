function solution(numbers, hand) {
  let result = "";

  const padNumberLocationList = [
    [3, 1], // 0
    [0, 0], // 1
    [0, 1], // 2
    [0, 2], // 3
    [1, 0], // 4
    [1, 1], // 5
    [1, 2], // 6
    [2, 0], // 7
    [2, 1], // 8
    [2, 2], // 9
  ];

  let currentLeftLocation = [3, 0]; // *
  let currentRightLocation = [3, 2]; // #
  let leftDistance = 0;
  let rightDistance = 0;

  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7) result += "L";
    else if (num === 3 || num === 6 || num === 9) result += "R";
    else {
      // 2 5 8 0
      leftDistance = getDistance(currentLeftLocation, padNumberLocationList[num]);
      rightDistance = getDistance(currentRightLocation, padNumberLocationList[num]);

      if (leftDistance === rightDistance) {
        result += hand === "left" ? "L" : "R";
      } else result += leftDistance > rightDistance ? "R" : "L";
    }

    if (result.charAt(result.length - 1) === "L") currentLeftLocation = padNumberLocationList[num];
    else currentRightLocation = padNumberLocationList[num];
  });

  return result;
}

function getDistance(a, b) {
  const [aX, aY] = a;
  const [bX, bY] = b;

  return Math.abs(bX - aX) + Math.abs(bY - aY);
}
