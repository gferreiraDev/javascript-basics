// Create two functions, the first one checks whether two objects have the same attributes. The second one checks whether both objects point to the same reference

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

const areEqual = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key])
      return false;
  }
  return true;
}

const areSame = (obj1, obj2) => {
  return obj1 === obj2;
}

console.log('Objects are equal?', areEqual(address1, address2));
console.log('Objects are the same?', areSame(address1, address2));