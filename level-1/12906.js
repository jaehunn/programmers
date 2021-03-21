function solution(items, length = items.length) {
  const stack = [];
  for (let i = 0; i < length; i += 1) {
    if (isEmpty(stack) || getTop(stack) !== items[i]) stack.push(items[i]);
  }

  return stack;
}

function isEmpty(stack) {
  return stack.length === 0;
}

function getTop(stack) {
  return stack[stack.length - 1];
}
