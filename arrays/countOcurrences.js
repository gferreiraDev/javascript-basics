// create a function that receive 2 params and return the number of occurrences of the 2nd param in the 1st param (array);

const numbers = [1, 2, 3, 4, 1];

const countOccurences = (array, search) => {  
  return array.reduce((acc, current) => current === search ? ++acc : acc, 0);
}

const count = countOccurences(numbers, 3);

console.log(count);