// Speed Limit = 70 km/h
// if current speed < 75 km/h => return 'OK'
// each 5 km/h over limit = +1 demerit point
// if points >= 12 => return 'License Suspended'
// might use Math.floor(1.3)

const checkSpeed = (speed) => {
  const limit = 70;
  const tolerance = 5;

  if (speed < limit + tolerance)
    return 'Ok';

  else if (speed >= limit + tolerance) {
    let points = Math.floor((speed - limit) / tolerance);

    if (points >= 12)
      return 'License Suspended';
    
    return 'Points: ' + points;
  }
}

console.log('Expected OK', checkSpeed(50));
console.log('Expected OK', checkSpeed(73));
console.log('Expected 1 point', checkSpeed(75));
console.log('Expected 3 points', checkSpeed(85));
console.log('Expected License Suspended', checkSpeed(180));