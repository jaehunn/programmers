function solution(str) {
  if (isDecimal(str)) return false;
  if (isExponent(str)) return false;
  if (hasEmpty(str)) return false;
  if (hasSpecial(str)) return false;

  return str.length === 4 || str.length === 6;
}

function isDecimal(str) {
  return ~str.indexOf(".");
}

function isExponent(str) {
  return ~str.indexOf("e") || ~str.indexOf("E");
}

function hasEmpty(str) {
  const unOriginal = str.replace(/ /gi, "");

  return str.length !== unOriginal.length;
}

function hasSpecial(str) {
  return isNaN(str); // isNaN(): implicit coercion, to number
}
