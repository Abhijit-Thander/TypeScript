// basic object type
// const user: { name: string; age: number } = {
//   name: "Abhijit",
//   age: 21,
// };

// console.log(user);

// using interface

interface User {
  name: string;
  age: number;
  city: string;
}

const user: User = {
  name: "abhijit",
  age: 21,
  city: "kolkata",
};

console.log(user)