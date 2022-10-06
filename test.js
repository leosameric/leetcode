var removeDuplicates = function(nums) {
    output = [];
    for(let i = 0; i < nums.length; i++) {
        // initial input
        if (output.length == 0 ) {
            output.push(nums[i]);
        } else if(!output.includes(nums[i])) {
            output.push(nums[i]);
        }
    }
    console.log(output);
    return output
};

const nums = [0,0,1,1,1,2,2,3,3,4];

removeDuplicates(nums);