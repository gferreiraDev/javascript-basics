// Count truthy elements in an array
// Falsy Values: undefined, null, '', false, 0, NaN

const countTruthy = (array) => {
  let counter = 0;

  for (item of array) {
    if (item)
      counter++;
  }

  return counter;
}

const array = [1, 2, 3, 0, 'a', 'A', NaN, 8, '', ' ', undefined, null, 10];

console.log(countTruthy(array));