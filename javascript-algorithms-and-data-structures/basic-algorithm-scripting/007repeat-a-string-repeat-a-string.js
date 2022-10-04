function repeatStringNumTimes(str, num) {
  let test='';
  for (let i = 1; i <= num; i++) {
    test += str;
  }
  return test;
}

repeatStringNumTimes("abc", 3);

/*
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
*/