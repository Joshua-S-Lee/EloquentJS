//#FUNCTIONS# programming is a wall of mini stones.
// Topics = ["Function definition","Scope", "Nested-Lexical Scoping", "Function declaration", "Arrow Functions", "Call stack", "Optional Arguments", "Closure", "Recursion", "Growing Functions", "Side Effects"]

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

const arrowFunction = (param1, param2) => {return param1 * param2};
const implicitReturn = param => `implicit return of ${param}`;

/* The call stack, where the "order of operations" is stored for function calls. Storing where functions and the process is
takes memory. If you create an infinite recursive function you will run out of memory/stack space 
*/

//RECURSION
// Loops are more performant than repeated function calls, however efficiency is rarely an issue and sometimes a recursive fn is easier
// particularly in situations that call for repeated branching within branches
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if ( current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24)); 
console.log(findSolution(13)); 

// Growing functions - write DRY, functions should have names that are easy to understand, functions should exist only if you know you'll need them.
