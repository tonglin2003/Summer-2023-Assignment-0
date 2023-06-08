function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let product = args[0];
  for (let i = 1; i < args.length; i++)
  {
    product *= args[i];
  }

  return product;

}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;