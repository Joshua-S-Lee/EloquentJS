// build a function that runs an array into a list
//take an array and for each index make and object that stores the index:value pair and object-node holding the next index:value and node.
//first create and empty list-object, then loop through the array mapping recursively
function arrayToList(array){
    let list = {};
    for (index of array){
        if (index != undefined){
            list[index] = array[index];

        }
    };
    return list
};
console.log(arrayToList([2,4,6,8]));
//build a function that returns an array from a list
function listToArray(list){

}

// write a function to add a new item to the beginning of a list
function prepend(list,newLink){

}

//write a funtion to return the value at nth of a list, make it recursive
function findN(list,target){

    if (list[target]==undefined){
        return undefined
    }
}

