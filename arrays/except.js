// create a function that receives 2 params and returns a new array
// excluding the values passed in 2nd parameter

const numbers = [1, 2, 3, 4, 1, 1];

const except = (array, excluded) => {
  return array.filter(item => !excluded.includes(item));
}

const output = except(numbers, [1, 2]);
console.log(output);