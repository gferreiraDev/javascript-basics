// declare a function which receives a number and shows a list
// of all numbers from 0 and presents the values "Even" or "Odd" for each.

const showNumbers = (limit) => {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0)
      console.log(i, 'EVEN');
    else
      console.log(i, 'ODD');
  }
}

showNumbers(10);