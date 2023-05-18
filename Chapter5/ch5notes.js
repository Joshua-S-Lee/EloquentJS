const array1 = [ 'winter', 'spring', 'summer', 'fall'];
const array2 = [...array1];

console.log(array1);
console.log(array2);

const mappedArray = array1.map((element, i) => `${element}${i}`);

console.log('mapped: ', mappedArray);
console.log('original: ', array1); // nothing mutated obv

const mappedResult = array1.map(
  (element, i, arr) => {
    arr[i] = 'hola'; // this does something
    return `${element}${i}`
});

console.log('mapped: ', mappedResult);
console.log('original: ', array1); // mutated

array2.forEach((element) => 'hello!');
console.log('original: ', array2); // nothing mutated obv

array2.forEach((element, i, arr) => {
  element = 'mundo'; // does nothing
  arr[i] = 'hola'; // this mutates
  return 5 // does nothing
});

console.log('mutated: ', array2);
//commenting lol