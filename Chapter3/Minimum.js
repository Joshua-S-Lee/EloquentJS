function minimum(a,b){
    if (a === b) {
        return "equivalent"
    };
    return (a < b) ? a : b;
};
console.log(minimum(10,5));
console.log(minimum(1,3));
console.log(minimum(5,5));
console.log(minimum([1,2,6],[0,24])); //comparing index 0 of the arrays?