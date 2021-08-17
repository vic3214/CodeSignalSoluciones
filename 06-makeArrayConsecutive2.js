function makeArrayConsecutive2(statues) {
  let ordenadas = statues.sort((a, b) => a - b);
  let faltan = 0;
  for (let i = 0; i < ordenadas.length - 1; i++) {
    if (ordenadas[i + 1] - ordenadas[i] > 1) {
      faltan += ordenadas[i + 1] - ordenadas[i] - 1;
    }
  }
  return faltan;
}

let statues = [6, 2, 3, 8];
console.log(makeArrayConsecutive2(statues));
