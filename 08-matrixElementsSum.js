function matrixElementsSum(matrix) {
  let suma = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let k = i; k < matrix.length; k++) {
          matrix[k][j] = 0;
        }
      }
      suma += matrix[i][j];
    }
  }
  return suma;
}

let matrix = [
  [3, 2, 0],
  [6, 0, 1],
  [2, 4, 2],
];

console.log(matrixElementsSum(matrix)); // salida esperada: 13
