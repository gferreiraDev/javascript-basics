// create a function that receive 2 params (min and max) and returns an array with
// a range of values from the min through the max.

const arrayFromRange = (min, max) => {
  const array = [];

  for (let index = min; index <= max; index++)
    array.push(index);

  return array;
}

const numbers = arrayFromRange(-10, -1);
console.log(numbers);