function centuryFromYear(year) {
  let res;
  let siglo = parseInt(year / 100);
  console.log(siglo);

  if (
    year.toString()[year.toString().length - 1] === "0" &&
    year.toString()[year.toString().length - 2] === "0"
  ) {
    res = siglo;
  } else {
    res = siglo + 1;
  }
  return res;
}

let year = 1700;

console.log(`El año ${year} corresponde con el siglo ${centuryFromYear(year)}`);
