function almostIncreasingSequence(sequence) {
  let found = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i - 1] >= sequence[i]) {
      found++;
      if (found > 1) return false;
      if (sequence[i - 2] >= sequence[i] && sequence[i - 1] >= sequence[i + 1])
        return false;
    }
  }
  return true;
}

let sequence = [3, 5, 67, 98, 3];
console.log("Secuencia: " + sequence);
console.log(almostIncreasingSequence(sequence));
