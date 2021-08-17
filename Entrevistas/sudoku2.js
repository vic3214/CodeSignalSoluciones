/* 
!No completado

Sudoku es un rompecabezas de colocación de números. 
El objetivo es rellenar una cuadrícula 9 × 9 con los números 
de tal manera que cada columna, cada fila, y cada uno de las 
nueve sub-rejillas 3 × 3 que componen la rejilla contengan 
todo de los números de 1 a 9 la vez.

Implemente un algoritmo que verifique si los números dados 
representan un Sudoku válido de acuerdo con las reglas de diseño 
descritas anteriormente. Tenga en cuenta que el rompecabezas representado
por grid no tiene porque tener solución.

Ejemplo de grid:

grid:
[[".",".",".",".",".",".",".",".","2"], 
 [".",".",".",".",".",".","6",".","."], 
 [".",".","1","4",".",".","8",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".",".","3",".",".",".","."], 
 ["5",".","8","6",".",".",".",".","."], 
 [".","9",".",".",".",".","4",".","."], 
 [".",".",".",".","5",".",".",".","."]] 
 
 */

//Comprobar si esta el mismo número en la submatriz 3x3
const firstDuplicate = require("./firstDuplicate.js");

function sudoku2(grid) {
  let res = true;
  let columna = [];
  let fila = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (columna.includes(grid[j][i]) && grid[j][i] != ".") {
        return false;
      }
      if (fila.includes(grid[i][j]) && grid[i][j] != ".") {
        return false;
      }
      if (grid[j][i] != ".") {
        columna.push(grid[j][i]);
      }
      if (grid[i][j] != ".") {
        fila.push(grid[i][j]);
      }
      if (j === grid.length - 1) {
        fila.splice(0, grid.length);
        columna.splice(0, grid.length);
      }
    }
  }
  res = compruebaSubMatrices(grid);

  return res;
}

function compruebaSubMatrices(grid) {
  return aux(0, 0, false, grid);
}
function aux(i, j, fin, grid) {
  let elementosSubmatriz = [];
  let newI;
  let newJ;
  let newFin = fin;
  if (i === grid.length && j === grid.length) {
    newFin = true;
  }
  for (let k = 0; k < 3; k++) {
    for (let k2 = 0; k2 < 3; k2++) {
      elementosSubmatriz.push(grid[i + k][j + k2]);
    }
  }
  if (firstDuplicate(elementosSubmatriz) === -1) {
    if (newFin) {
      return true;
    } else {
      if (i === grid.length && j != grid.length) {
        newI = 0;
        newJ = j + 3;
      }
      if (i != grid.length && j === grid.length) {
        newI = i + 3;
        newJ = 0;
      }
      return aux(newI, newJ, newFin, grid);
    }
  } else {
    return false;
  }
}
// true
/* let grid = [
  [".", ".", ".", ".", ".", ".", ".", ".", "2"],
  [".", ".", ".", ".", ".", ".", "6", ".", "."],
  [".", ".", "1", "4", ".", ".", "8", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "3", ".", ".", ".", "."],
  ["5", ".", "8", "6", ".", ".", ".", ".", "."],
  [".", "9", ".", ".", ".", ".", "4", ".", "."],
  [".", ".", ".", ".", "5", ".", ".", ".", "."],
]; */
// false
/* let grid = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", "7", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
]; */

// submatrices false
let grid = [
  ["3", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", "8", ".", ".", "6", ".", ".", ".", "."],
  ["7", "9", ".", ".", "1", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

console.log(sudoku2(grid));
