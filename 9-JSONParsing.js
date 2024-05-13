/**
    You can convert valid Strings into JSON
    by using the JSON.parse() method.
 */

let strPerson = `{"firstName": "Arnel", "lastName": "Rose", "age": 42}`;

let person = JSON.parse(strPerson);
console.log(person);