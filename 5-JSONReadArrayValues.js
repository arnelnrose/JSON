/* 
    You can read array values in a JSON by using its key
    and accessing it normally by index.
*/

let person = {
    firstName: "Arnel",
    lastName: "Rose",
    age: 43,
    hobbies: ["Gaming", "Eating", "Sleeping"],
};

console.log(person["hobbies"][0]);
console.log(person.hobbies[2]);