function filterArray(numbers, value) {
  let num = filterArray[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      num = filterArray[i];
    }
  }
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
