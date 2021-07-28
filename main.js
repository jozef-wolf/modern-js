// const myArray = ["josef", "stanislav", "jan"];
// let numbers = [11, 5, 36, 7, 22, 19, 1, 33];
// myArray.push("weronika", "wiktoria");
// myArray.sort();

// let strNumbers = numbers.map(function (e) {
//   return e.toString();
// });

// console.log(strNumbers);
// console.log(myArray);
// const highestNumber = Math.max(...numbers);
// const lowestNumber = Math.min(...numbers);

// console.log(highestNumber);
// console.log(lowestNumber);

// const getAverage = () => numbers.reduce((a, b) => a + b) / numbers.length;

// const averageNumbers = getAverage(numbers);

// console.log(averageNumbers);

const getTodos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected"));
