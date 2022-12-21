// create a function that receives a number and shows a list of stars (asterisks)
// according to the index os line;

const showStars = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let stars = '';
    for (let j = 0; j < i; j++) {
      stars += '*';
    }
    console.log(stars);
  }
}

showStars(10);