// write a function that only accepts a string and returns the number of "B"'s 
// write a countChar that takes a second argument to indicate the target counter, then incorporate into countB's
// string chars can be accessed by "string"[0]

function bCounter(word) {
    let count = 0
    for (let i = 0; i < word.length -1; i++)  {
        if (word[i] === "B") {
            count++
        };

    };
    return count
}

console.log(bCounter("Billy better than Brett."))
console.log(bCounter("Never buy Boots."))