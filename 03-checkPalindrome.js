function checkPalindrome(inputString) {
  let reversed = [];
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed.push(inputString[i]);
  }
  return inputString === reversed.join("");
}

let palindromo = "aba";
console.log(checkPalindrome(palindromo));
