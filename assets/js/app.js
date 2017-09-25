// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // output: (100, 100)
age = 200;
console.log(age, age2); // output: (200, 100)

let name = 'Wes';
let name2 = name;
console.log(name, name2); // output: (Wes, Wes)
name = 'Wesley';
console.log(name, name2); // output: (Wesley, Wes)
// NOTE: above section of examples is different when arrays are used. With arrays (see below), if new variable assignments that point to an array are REFERENCING the array and not making a copy of the array.

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it. NOTE(FYI): this actually is an array reference, not a copy.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
