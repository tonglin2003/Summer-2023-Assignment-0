function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let countOfSmallerNum = 0;

  nums.forEach(element => {
    countOfSmallerNum = element < target? countOfSmallerNum + 1 : countOfSmallerNum;
  });

  return countOfSmallerNum;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;

// brutal approach: for loop through the whole list (o(n))

// A possible way, but quicksort might cause o(n^2) which might take a longer time
// quick sort (best: n log n, worst: n^2)
// loop through the sorted list, stop when the number is higher than the target. (o(n))