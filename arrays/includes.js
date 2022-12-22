// create a function that receives 2 params and return true if the array includes
// the search param, or false otherwise.

const includes = (array, searchElement) => {
  for (element of array) {
    if (element === searchElement)
      return true;
  }

  return false;
}

const numbers = [1, 2, 3, 4];
console.log(includes(numbers, 2));