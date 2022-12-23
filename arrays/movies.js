// create a function that receives an array of movies and return all movies in 2018 with rating > 4
// sorted by rating in descending order and only display their title in console.

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 }
];


const getMovies = (movies) => {
  return movies
    .filter(movie => movie.year === 2018 && movie.rating >= 4)
    .sort((a, b) => a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0);
}

const listOfMovies = getMovies(movies);

listOfMovies.forEach(movie => console.log(movie.title));