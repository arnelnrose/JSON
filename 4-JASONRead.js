/*
    JSON Read
    You can READ specific values of a JSON by using its key
    surrounded by [].
 */

/* Example #1
    let person = {
        firstName: "Arnel",
        lastName: "Rose",
        age: 43
    };
    console.log(person["firstName"]);
    console.log(person["lastName"]);
    console.log(person['age']);
 */

 /* Example #2: by using period followed by the key.
    let person = {
        firstName: "Arnel",
        lastName: "Rose",
        age: 43
    };
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.age);
*/

// Example #3: by using string template literals.
    let person = {
        firstName: "Arnel",
        lastName: "Rose",
        age: 43
    };
    console.log(`${person.firstName} ${person.lastName}, ${person.age}`);