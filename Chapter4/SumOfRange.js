function range (start, end, step = 1){
    let arr = [];
    if (start > end){
        for (let i = start; i >= end; i -= Math.abs(step)){
            arr.push(i)
        };
    }
    for (let i = start; i <= end; i += step){
        arr.push(i)
    };
    return arr
};

function sum (numbers){
    let product = 0
    for (num of numbers){
        product += num
    };
    return product
};

console.log(range(5,10));
console.log(sum([1,2,3,4,5,6,7,8,9,10]));
console.log(range(1,10,2));
console.log(range(12,5,-2));
console.log(sum(range(1,10,1)));