// take an positive int and return boolean
// must be recursive, 0 = even, 1 = false

function isEven(num){
    num = Math.abs(num);
    if (num === 0){
        return true
    } else if (num === 1){
        return false
    } else {
        console.log(num)
        return isEven(num - 2);
    };
    
};

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));