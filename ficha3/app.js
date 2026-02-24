var ArrayUtils = require('./ArrayUtils.js');

var array = [2, 4, 6, 8, 10];
var arrayE = [];

console.log(ArrayUtils.isEmpty(array));   // false
console.log(ArrayUtils.isEmpty(arrayE));  // true
console.log(ArrayUtils.max(array));       // 10
console.log(ArrayUtils.min(array));       // 2
console.log(ArrayUtils.average(array));   // 6
console.log(ArrayUtils.indexOf(array, 8)); // 3
console.log(ArrayUtils.subArray(array, 1, 3)); // [4, 6, 8]
console.log(ArrayUtils.isSameLength(array, arrayE)); // false
console.log(ArrayUtils.reverse(array)); // [10, 8, 6, 4, 2]
console.log(ArrayUtils.swap(array, 1, 3)); // [2, 8, 6, 4, 10]
console.log(ArrayUtils.contains(array, 6)); // true
console.log(ArrayUtils.concatenate(array, [12, 14])); // [2,4,6,8,10,12,14]
