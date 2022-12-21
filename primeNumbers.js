// create a function that receives a number and returns all
// prime numbers from 1 to the input number.

const showPrimes = (limit) => {
  for (let i = 2; i <= limit; i++)
    if (isPrime(i))
      console.log(i);
}

const isPrime = (number) => {
  for (index = 2; index < number; index++) {
    if (number % index === 0)
      return false;
  }
  return true;
}

showPrimes(20);