function solution(nums, len = nums.length) {
  const kinds = new Set(nums);

  const selectCount = (len / 2) << 0;
  const kindCount = kinds.size;

  return selectCount >= kindCount ? kindCount : selectCount;
}

// x && y
// x || y
