function pyramidMaker(height) {
    let block = ""
    for (let w =0 ; w < height; w++){
        block += "#"
        console.log(block)
    };
    for (let width = height ; width > 0; width--){
        block = block.split("").splice(0,width).join("");
        console.log(block)
    };
    
};
pyramidMaker(5);