let numbers = 123
let fractionalNumbers = 12.3
let bigNumbers = 12e3
console.log(100 + 4 * 5);
console.log((100 + 4) * 5);
console.log(2.5 + 3.5);
let stringA = "This is the first line. \nAnd this is the second. We use backslash to escape";
let stringB = `This is first
this is second`;


function pyramidMaker(height) {
    let block = ""
    for (let w =0 ; w < height; w++){
        block += "#"
        console.log(block)
    };
    for (let w = height ; w > 0; w--){
        block = block.split("").splice(0,w).join("");
        console.log(block)
    };
    
};
pyramidMaker(5);