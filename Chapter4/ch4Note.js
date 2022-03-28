// CHAPTER 4: DATA STRUCTURES: OBJECTS AND ARRAYS
// let topics = ["Data Sets", "Properties", "Methods", "Objects", "Mutability", "Computing Correlation", "Array Loops", "Further Arrayology", "Strings and Their Properties", "Rest parameters", "The Math Object", "Destructuring", "JSON"];
// let pages = "71 through 90";

// access specific properties through obj.dotNotation, and access and evaluated property through obj[bracketNotation] additionally if a property has an unsual name like "2" or "John Doe" it requires bracket notation.
// a function value property is called a method
// a stack is a LIFO data structure, it can be created with an array using .push to add and .pop to remove
let chapterObject = {
    startPage: 71,
    endPage: 90,
    topics: ["Data Sets", "Properties", "Methods", "Objects", "Mutability", "Computing Correlation", "Array Loops", "Further Arrayology", "Strings and Their Properties", "Rest parameters", "The Math Object", "Destructuring", "JSON"]
};

console.log(chapterObject);
chapterObject.newKey = "this wasn't here before";
console.log(chapterObject)
