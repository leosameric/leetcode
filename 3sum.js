nums = [-1,0,1,2,-1,-4];
// nums = [1,2,-2,-1];

var threeSum = function(nums) {    
    let resultArr = [];
    // 先 sort number list
    const sortedArr = nums.sort((a, b) => a - b);

    console.log(sortedArr);
    for (i = 0; i < sortedArr.length - 2; i++) {
      // no negative number in array list, impossible to get sum value can't be 0
      if (sortedArr[i] > 0) {
        break;
      }
      if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
        continue;
      }
      let left = i + 1;
      let right = sortedArr.length - 1;
      while (left < right) {
        const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else { // sum === 0
          resultArr.push([sortedArr[i], sortedArr[left], sortedArr[right]]);

          // skip same number
          while(left < right && sortedArr[left] === sortedArr[left + 1]) {
            left++;
          }
          // skip same number
          while(left < right && sortedArr[right] === sortedArr[right - 1]) {
            right--;
          }
          left++;
          right--;  
        }
      }
    }
    return resultArr;
};

const a = threeSum(nums);
console.log(a);