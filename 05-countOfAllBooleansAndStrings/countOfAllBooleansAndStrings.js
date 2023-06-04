function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let countOfBoolAndString = 0;

  arr.forEach(element => {
    if (typeof(element) === typeof('string') || typeof(element) === typeof(true))
    {
      countOfBoolAndString++;
    }
  });
  return countOfBoolAndString;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;