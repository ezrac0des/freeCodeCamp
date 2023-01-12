function mutation(arr) {
  let a = arr[0].toLowerCase();
  let b = arr[1].toLowerCase();
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a.charAt(j) == b.charAt(i)) {
        count++;
        break;
      }
    }
  }
  if (count == b.length)
    return true;
  else return false;
}

mutation(["hello", "hey"]);