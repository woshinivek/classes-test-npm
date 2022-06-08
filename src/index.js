import "./sass/main.scss";

const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);

  i -= 1;
}

console.log(myArray);

// const hi = 3,
//   b = 4,
//   ji = 90;

console.log("hi: ", hi);
console.log("b: ", b);
console.log("ji: ", ji);

// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     const contact = contacts[i];

//     if (contact.firstName === name) {
//       if (contact[prop] !== undefined) {
//         return contact[prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// function lookUpProfile(name, prop) {
//   let result = "";

//   for (let i = 0; i < contacts.length; i++) {
//     const contact = contacts[i];

//     if (contact.firstName === name && contact.hasOwnProperty(prop)) {
//       result = contact[prop];
//     }

//     if (contact.firstName !== name) {
//       result = "No such contact";
//     }

//     // if (contact.firstName === name && contact[prop] === undefined) {
//     //   result = "No such property";
//     // }
//   }
//   return result;
// }
// console.log("Akira: ", lookUpProfile("Akira", "likes"));
// console.log("Akiraa: ", lookUpProfile("Akiraa", "likes"));

// console.log("Kristian: ", lookUpProfile("Kristian", "lastName"));

// console.log("Bob: ", lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Akira", "address"));

// console.log("sherlok: ", lookUpProfile("Sherlock", "likes"));

// We have an array of objects representing
// different people in our contacts lists.

// A lookUpProfile function that takes name and a
// property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual
// contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any
// contacts then return the string No such contact.

// If prop does not correspond to any valid properties
// of a contact found to match name then return the string No such property.

// Only change code below this line
//   for (const contact of contacts) {
//     console.log(contact);

//     if (contact.firstName === name && contact.hasOwnProperty(prop)) {
//       return contact[prop];
//     }

//     if (contact.firstName !== name) {
//       console.log("No such contact.");
//       continue;
//     }

//     if (contact.firstName === name && !contact.hasOwnProperty(prop)) {
//       console.log("No such property.");
//       continue;
//     }

// function randomNumber(num) {
//   //   return Math.random() + 1;
//   return Math.random() * (10 - 1) + 1;
// }

// console.log(randomNumber());

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     console.log(countArray);

//     countArray.push(n);
//     return countArray;
//   }
// }

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     console.log("hi: ", countup(n - 1));

//     const countArray = countup(n - 1);
//     console.log(countArray);

//     countArray.push(n);
//     return countArray;
//   }
// }

// console.log(countup(2));
