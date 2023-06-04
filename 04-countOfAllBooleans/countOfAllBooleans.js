function countOfAllBooleans(arr) {
  // Insert code here;
  let countOfBool = 0;

  arr.forEach(element => {
    if (typeof(element) === typeof(true))
    {
      countOfBool++;
    }
  });
  return countOfBool;
}

// Do not edit this line;
module.exports = countOfAllBooleans;