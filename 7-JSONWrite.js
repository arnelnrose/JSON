/*
    You Can Update specific values of a JSON by using
    its key surrounded by [] and assigning a value to it 
    or using dot notition.
*/

let person = {
    firstName: "Arnel",
    lastName: "Rose",
    age: 43,
    hobbies: ["Gaming","Eating","Sleeping"]
};

console.log(person);
person.firstName = "Lenra";
console.log(person);
person.middleInitial = "N";
console.log(person);

console.log(person.hobbies);
person.hobbies[0] = "Watching";
console.log(person.hobbies); 
