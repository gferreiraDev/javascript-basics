// Create an address object. Then call a function showAddress that receives an object and displays all the properties along with the value

const address = {
  street: '5th Avenue',
  city: 'New York',
  zipcode: '11421'
}

const showAddress = (address) => {
  for (let key in address)
    console.log(`${key}: ${address[key]}`);
}

showAddress(address);