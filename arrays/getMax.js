// create a function that receives an array and returns the largest number or undefined if the array is empty;

const numbers = [1, 2, 3, 4];

const getMax = (array) => {
  if (array.length === 0)
    return undefined;
  
  return array.reduce((acc, current) => current > acc ? current : acc , 0);
}

const max = getMax(numbers);
const empty = getMax([4, 9, 1, 0, -15, 21, 6, 3]);

console.log(max);
console.log(empty);