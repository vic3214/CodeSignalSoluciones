function firstDuplicate(a) {
  let map = new Map();
  let cuentaRepetidas = 0;
  let res;
  console.log("Creación de mapa");
  for (let i = 0; i < a.length; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], [i, i]);
      cuentaRepetidas++;
    } else {
      return a[i];
    }
  }

  // Asignamos resultados
  if (cuentaRepetidas === a.length) {
    res = -1;
  }

  return res;
}

let a = [1, 2, 2, 1];
console.log("El primer duplicado es " + firstDuplicate(a));

module.exports = {
  sumar: firstDuplicate,
};
