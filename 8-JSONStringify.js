/**
    You can convert JSON into string
    by using the JSON.stringfy() method.
 */

let person = {
    firstName: "Arnel",
    lastName: "Rose",
    age: 43,
    hobbies: ["Gaming", "Eating", "Sleeping"],
    pets:{
        1:{
            name: "Aw-aw",
            type: "Dog",
            breed: "Askal"
        },
        2:{
            name: "Miaow-miaow",
            type: "Cat",
            breed: "Pusgal"
        }
    }
};

let strPerson = JSON.stringify(person);
console.log(strPerson);