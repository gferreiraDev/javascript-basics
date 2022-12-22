// Initialize an address object first by using both Factory and Constructor Functions.

// Factory Function
function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode
  }
}


// Constructor Function
function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}


const address1 = createAddress('1st street', '1st city', '1st zipcode');
console.log(address1);

const address2 = new Address('2nd street', '2nd city', '2nd zipcode');
console.log(address2);