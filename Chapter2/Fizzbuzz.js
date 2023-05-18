function fizzBuzz(){
    let counter = 0;
    while (counter < 100) {
        ++counter;
        if (counter % 3 === 0 && counter % 5 === 0){
            console.log("FizzBuzz")
        } else if (counter % 3 === 0) {
            console.log("Fizz")
        } else if (counter % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(counter)
        };
        

    };
};

fizzBuzz();
// make it dynamic by including a target parameter and swapping 100 for target. 
function smartFizzBuzz(target){
    let counter = 0;
    while (counter < target) {
        ++counter;
        if (counter % 3 === 0 && counter % 5 === 0){
            console.log("FizzBuzz")
        } else if (counter % 3 === 0) {
            console.log("Fizz")
        } else if (counter % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(counter)
        };
        

    };
};