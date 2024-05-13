/* 
    A JSON can also have JSONs as its value.
*/

let person = {
    firstName: "Arnel",
    lastName: "Rose",
    age: 43,
    hobbies: ["gaming","eating","sleeping"],
    pets:{
        1:{
            name:"Aw-aw",
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
console.log(person);