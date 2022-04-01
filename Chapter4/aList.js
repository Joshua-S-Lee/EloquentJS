// build a function that runs an array into a list
//take an array and for each index make and object that stores the index:value pair and object-node holding the next index:value and node.
//first create and empty list-object, then loop through the array mapping recursively
function arrayToList(array){
    array = array.reverse(); //reversing the array cause the list to construct end to beginning so the first list item we encounter is the first item of the array
    let list = null; // this ensures the last list item is marked with rest: null
    for (let index of array){
        // for each index of the array assign list the current index value and rest is assigned the current iteration of the list object.
        list = {
            value: index,
            rest: list
            };
        // console.log(list) //see how the list is built by uncommenting this line
    };
    return list
};

console.log(arrayToList([2,4,6,8]));

//build a function that returns an array from a list
function listToArray(list){
    let result = [];
    if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
      return result;
    } else {
      for (let node = list; node; node = node.rest) {
        if (node.hasOwnProperty('value')) {
          result.push(node.value);
        }
      }
    }
    return result;
}

// write a function to add a new item to the beginning of a list
function prepend(newItem, list){
    return {
        value: newItem,
        rest: list
    };
};
console.log(prepend(1,arrayToList([2,4,6,8])));
//write a funtion to return the value at nth of a list, make it recursive
function findN(list,target){
    return listToArray(list)[target];
}
function findRecursiveN(list, number) {
    if (number === 0) {
      return list.value;
    } else if (list.rest === null) {
      return undefined;
    } else {
      return findRecursiveN(list.rest, number-1);
    }
  }
