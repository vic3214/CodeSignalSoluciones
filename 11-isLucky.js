function isLucky(n) {
  let sep = n.toString().length / 2;
  let sumaDerecha = 0;
  let sumaIzq = 0;
  for (let i = 0; i < n.toString().length; i++) {
    if (i < sep) {
      sumaDerecha += Number(n.toString()[i]);
    } else {
      sumaIzq += Number(n.toString()[i]);
    }
  }
  if (sumaDerecha === sumaIzq) {
    return true;
  } else {
    return false;
  }
}

let n = 1230;
console.log(isLucky(n));
