function century(year) {
    if(year / 100 != parseInt(year / 100))
      return parseInt(year / 100) + 1;
    return year / 100;
}
console.log(century(1905));