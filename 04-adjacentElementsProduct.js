function adjacentElementsProduct(inputArray) {
  let product = -9999;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > product) {
      product = inputArray[i] * inputArray[i + 1];
    }
  }
  return product;
}

let array = [5, 1, 2, 3, 1, 4];
console.log(array);
console.log(adjacentElementsProduct(array));
