module.exports = function check(str, bracketsConfig) {
  // your solution
 
  let amount = bracketsConfig.length;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }

  function checkMass() {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < amount; j++) {
        if (arr[i] == bracketsConfig[j][0]
          && arr[i + 1] == bracketsConfig[j][1]) {
          arr.splice(i, 2);
        }
      }
    }
  }

  let counter = 0;

  do {
    checkMass();
    counter++;
  }

  while (counter < str.length / 2);

  if (arr == 0) {
    return true;
  } else {
    return false;
  }
}
