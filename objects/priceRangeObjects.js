let priceRange = [
  { label: '$', tooltip: 'Inexpensive', minimumPrice: 0, maximumPrice: 10 },
  { label: '$$', tooltip: 'Moderate', minimumPrice: 11, maximumPrice: 20 },
  { label: '$$$', tooltip: 'Pricey', minimumPrice: 21, maximumPrice: 50 }
];

let restaurants = [
  { 
    name: 'Restaurant 1',
    pricePerPerson: 5.90
  },
  { 
    name: 'Restaurant 2',
    pricePerPerson: 16.99
  },
  { 
    name: 'Restaurant 3',
    pricePerPerson: 34.90
  }
];

const getRestaurantsByFilter = (filter) => {
  let list = [];

  for (restaurant of restaurants) {
    if (restaurant.pricePerPerson >= filter.minimumPrice && restaurant.pricePerPerson <= filter.maximumPrice)
      list.push(restaurant);
  }

  return list;
}

console.log('Inexpensive Restaurants:', getRestaurantsByFilter(priceRange[0]));
console.log('Moderate Restaurants:', getRestaurantsByFilter(priceRange[1]));
console.log('Pricey Restaurants:', getRestaurantsByFilter(priceRange[2]));