function reverseString(str) {
  let arr = Array.from(str);
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  str = newArr.join('');
  return str;
}

reverseString('hello');
/*
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
*/
