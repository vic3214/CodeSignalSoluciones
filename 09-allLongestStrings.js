function allLongestStrings(inputArray) {
  let map = new Map();
  for (let i = 0; i < inputArray.length; i++) {
    if (!map.has(inputArray[i].length)) {
      map.set(inputArray[i].length, [inputArray[i]]);
    } else {
      let elem = [];
      for (let elemento of map.get(inputArray[i].length)) {
        elem.push(elemento);
      }
      elem.push(inputArray[i]);
      map.set(inputArray[i].length, elem);
    }
  }
  let mayor = 0;
  for (let key of map.keys()) {
    if (mayor < key) {
      mayor = key;
    }
  }
  return map.get(mayor);
}

let inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(inputArray));
