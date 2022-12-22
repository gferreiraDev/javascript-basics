// create a funcion that receives a number and then returns the sum of
// all multiples of 3 and 5, between 0 and the limit.

const sum = (limit) => {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  }

  return sum;
}

console.log(sum(10));