/* 
Dada una cadena s que consta de letras minúsculas en inglés, 
busque y devuelva la primera instancia de un caracter no 
repetido en ella. Si no existe tal caracter, regrese '_'.
 */

function firstNotRepeatingCharacter(s) {
  let map = new Map();
  let res;
  let todosRepetidos = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 0);
    } else {
      let valorActual = map.get(s[i]) + 1;
      map.set(s[i], valorActual);
    }
  }
  console.log(map);
  for (let [clave, valor] of map) {
    if (valor >= 1) {
      todosRepetidos++;
    } else if (valor == 0) {
      return clave;
    }
  }

  if (todosRepetidos >= map.keys.length) {
    res = "_";
  }
  return res;
}
let s = "aefea"; // 'f'
//let s = "aefa"; //'e'
//let s = "aefaef"; // '_'
console.log(firstNotRepeatingCharacter(s));
