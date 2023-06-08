class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    
    // base case, if length is 1 and median is the target
    if (nums.length === 1)
    {
      if (nums[0] === target) return true;
      else return false;
    }
    else 
    {
      let median = nums.length <= 2? 0 : Math.floor(nums.length / 2);
      if (nums[median] > target)
      {
        let slicedNums = nums.slice(0, median);
        return this.binarySearch(slicedNums, target);

      }
      else if (nums[median] < target)
      {
        let slicedNums = nums.slice(median+1);
        return this.binarySearch(slicedNums, target);
      }
      else return true;
    }

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;