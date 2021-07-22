// //callback & foreach

// const myFunc = (callbackFunc) => {
//   //do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(function (value) {
//   // do something
//   console.log(value);
// });

// let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];
const ul = document.querySelector(".people");
let html = ``;

people.forEach((person, index) => {
  html += `<li>${index + 1}.${person}</li>`;
});
console.log(html);

ul.innerHTML = html;
