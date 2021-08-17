function shapeArea(n) {
  let res;
  if (n === 1) {
    res = 1;
  } else if (n === 2) {
    res = shapeArea(n - 1) + 4;
  } else {
    res = (n - 2) * 4 + 4 + shapeArea(n - 1); // 4 arriba abajo y a los lados y n-2 a los lados por las 4 diagonales
  }
  return res;
}

console.log(shapeArea(7000));
