// Write a function that receives an object and return the key-value pairs
// which are of type string

const movie = {
  title: 'a',
  releaseyear: 2018,
  rating: 4.5,
  director: 'b'
}

const showProperties = (obj) => {
  for (key in obj)
    if (typeof obj[key] === 'string')
      console.log(key, obj[key]);
}

showProperties(movie);