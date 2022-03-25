//#FUNCTIONS# programming is a wall of mini stones.

const functionDefinition = function(parameter) /*This is a function expression */ {
    //the body of the function
    // if you have no return value the function only produces SIDE EFFECTS
    return `your argument here: ${parameter}`
};
functionDefinition("Argument");

// on scope, if repeating variables the deepest variable will be used (lexical scope + repeated vars)
notationDemonstration();
//Declaration Notation - shorter way to create a function binding,
//additionally the declared function is created prior to the execution of the code so it is accessible before it is declared.
function notationDemonstration() {
    internalFunction();
    function internalFunction(){
        console.log("hello from the other side.")
    }
    //note there is no need for closing semicolon;
}