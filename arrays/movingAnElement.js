// create a function that moves an element within an array back or foward
// according to the params received

const numbers = [1, 2, 3, 4];

const move = (array, index, offset) => {
  const pos = index + offset;

  if (pos < 0 || pos >= array.length)
    return console.error('Invalid offset');

  const element = array.splice(index, 1)[0];
  const newArray = [...array];
  console.log('elmt', element, 'newArr', newArray);
  
  newArray.splice(pos, 0, element);
  return newArray;
}

const output = move(numbers, 1, 1);

console.log(output);