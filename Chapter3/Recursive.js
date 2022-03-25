// take an positive int and return boolean
// must be recursive, 0 = even, 1 = false

function isEven(num){
    if (num < 0) {
        return console.log("must be positive integer");
    };
    function remainder(){
        if (num === 0){
            return true
        } else if (num === 1){
            return false
        } else {
            return remainder(num - 2);
        };
    };
    console.log(remainder());
};

isEven(50);
isEven(75);
isEven(-1);