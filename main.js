// function count() {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i, "FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log(i, "fizz");
//     } else if (i % 5 === 0) {
//       console.log(i, "buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// count();

const numbers = [9, 8, 4, 5, 3, 6, 7, 1, 2];

function sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        console.log(temp);
      }
    }
  }
  return;
}
sort(numbers);
console.log(numbers);
