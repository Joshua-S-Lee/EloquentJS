//reverse an array into a new array
function reverse(arr){
    let reversedNew = []
    for (i of arr){
        reversedNew.unshift(i)
    };
    return reversedNew
};
//reverse an array without creating a new array
function reverseInPlace(arr){
    for (let i = 0; i < arr.length; i++){
        arr.splice(i,1,arr.length-i)
    };
    return arr
};

console.log(reverse([1,2,3,4]));
console.log(reverseInPlace([1,2,3,4,5]));