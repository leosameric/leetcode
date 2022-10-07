/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    const len = nums.length;
    for( let i=0; i < len ; i++) {
        if(i > nums.length - 1) {
            break;
        }
        if (nums[i] === val) {
            nums.splice(i,1)
            i--       
        }
    }
    return nums.length;
};

const nums = [3,2,2,3,4,5]
const val = 3

const res = removeElement(nums, val)

console.log(res)
// Output: 5, nums = [0,1,4,0,3,_,_,_]