const lodash = require("lodash");

var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var reverseArr = lodash.reverse(numArr);
console.log(reverseArr);

var shuffledArr = lodash.shuffle(numArr);
console.log(shuffledArr[0]);

var arrSum = lodash.sum(numArr);
var arrMax = lodash.max(numArr);
var arrMean = lodash.mean(numArr);
console.log(arrSum);
console.log(arrMax);
console.log(arrMean);
