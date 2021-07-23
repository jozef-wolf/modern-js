let myArray = [12, 15, 2, 5, 33, 16, 54, 9];

const lowest = Math.min(...myArray);
const highest = Math.max(...myArray);

console.log("lowest number is:", lowest, "highest number is:", highest);

const getAverage = (nums) => nums.reduce((a, b) => a + b) / nums.length;

const average = getAverage(myArray);
console.log(average);
