const array = [2, 4, 7, 5, 4, 3, 8];
const arrayNew = array.filter(function (value, i, n) {
  return n.indexOf(value) ===i;
});

console.log(arrayNew);


function isLeapYear(year) {
  if (year % 4 == 0 && year % 100 !== 0 || year%400==0) {
    return "うるう年です";
  } else {
    return "うるう年ではありません";
  }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));


