/* 
Se le proporciona una matriz 2D nxn que representa una imagen. 
Gire la imagen 90 grados (en el sentido de las agujas del reloj). 
La complejidad del algoritmo debe ser lineal (O(1));
*/

function rotateImage(a) {
  var res = [];
  for (var i = 0; i < a.length; i++) {
    res[i] = new Array(a.length);
  }
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      res[i][j] = a[a.length + (-1 - j)][i];
    }
  }
  return res;
}

let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateImage(a));
