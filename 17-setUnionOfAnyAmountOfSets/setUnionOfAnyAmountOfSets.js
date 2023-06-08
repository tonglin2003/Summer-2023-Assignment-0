function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;

  let combinedSet = new Set();

  args.forEach(set => {
    set.forEach(element => {
      combinedSet.add(element);
    });
  });
  
  return combinedSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;

// brutal approach: append all elements into a set through a double for loop (o(n^2))

// 