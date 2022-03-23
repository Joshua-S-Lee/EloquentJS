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