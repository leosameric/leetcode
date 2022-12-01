// Description
/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order. 
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if (!nums || nums.length === 0) {
        return 0;
    }
    console.log(nums.length + " Long")

    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target)
    } else {
        start = 0
        end = nums.length -1;
        while ( start < end) {
            let mid = Math.floor((start+end)/2);   
            nums[mid] > target ? end = mid : start = mid + 1;
        }
        if (start === end){
            return target <= nums[start] ? start : start + 1;
        }
    }
};

const nums = [1,3,5,6,20,25,35,40,45,50,55,60,65,70,75,80]
const target = 42;
console.log("result:" + searchInsert(nums, target))