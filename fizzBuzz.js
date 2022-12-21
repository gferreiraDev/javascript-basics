// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// NaN => 'Not a Number'

const fizzBuzz = (input) => {
  if (typeof input !== 'number')
    return 'Not a number';

  if (input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz';
  else if (input % 3 === 0)
    return 'Fizz';
  else if (input % 5 === 0)
    return 'Buzz';
  else
    return input;
}

console.log('Should return Fizz:', fizzBuzz(3));
console.log('Should return Buzz:', fizzBuzz(5));
console.log('Should return FizzBuzz:', fizzBuzz(15));
console.log('Should return input:', fizzBuzz(4));
console.log('Should return "Not a number":', fizzBuzz(false));