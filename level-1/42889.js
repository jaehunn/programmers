function solution(N, stages) {
  return Array(N)
    .fill(0)
    .map((_, stageIndex) => {
      const originalLength = stages.length;

      stages = stages.filter((currentStage) => currentStage > stageIndex + 1); // mutate

      const currentLength = stages.length;
      const failureRate = (originalLength - currentLength) / originalLength;

      return { stageIndex, failureRate };
    })
    .sort((a, b) => {
      if (a.failureRate === b.failureRate) return a.stageIndex - b.stageIndex;

      return b.failureRate - a.failureRate;
    })
    .map((value) => value.stageIndex + 1);
}
