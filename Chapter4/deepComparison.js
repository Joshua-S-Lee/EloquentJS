// write a function that checks strict equality, objects should have a recursive call of deepEqual to compare each objects properties
// Note: null.typeof returns object, Object.keys will be helpful when comparing object properties.

function deepEqual(a, b){
    if(typeof a !== typeof b) return false;
    if(typeof a !== typeof null){
        return a === b;
    }
    for (let element in a){
        if (a[element]===b[element]) return true;
    }
    return false
}
console.log(deepEqual(1,1));
// console.log(deepEqual({first: 10},{first: 12}));
// console.log(deepEqual("apple",{first: 12}));
// console.log(deepEqual(1,[1]));
console.log(deepEqual({first: 10},[10]));
console.log(deepEqual([10,12,14],[10,12,14]));
console.log(deepEqual({first: 10},{first: 10}));
console.log(deepEqual("a","b"))