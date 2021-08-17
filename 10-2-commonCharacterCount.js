function commonCharacterCount(s1, s2) {
  let mapS1 = new Map();
  let mapS2 = new Map();
  let comunes = 0;
  for (let i = 0; i < s1.length; i++) {
    if (!mapS1.has(s1[i])) {
      mapS1.set(s1[i], 1);
    } else {
      let actual = mapS1.get(s1[i]) + 1;
      mapS1.set(s1[i], actual);
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (!mapS2.has(s2[i])) {
      mapS2.set(s2[i], 1);
    } else {
      let actual = mapS2.get(s2[i]) + 1;
      mapS2.set(s2[i], actual);
    }
  }
  for (const key of mapS1.keys()) {
    if (mapS2.has(key)) {
      let m1 = mapS1.get(key);
      let m2 = mapS2.get(key);
      if (m1 > m2) {
        comunes += m2;
      } else {
        comunes += m1;
      }
    }
  }
  return comunes;
}

let s1 = "aabcc";
let s2 = "adcaa";

console.log(commonCharacterCount(s1, s2));
