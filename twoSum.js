Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].


var twoSum = function(nums, target) {
    let indices = [];
    for(let counter = 0; counter <= nums.length; counter++){
        for(let index = counter; index <= nums.length; index++){
            if(nums[index+1] !== undefined && (nums[counter] + nums[index+1]) == target) indices.push(counter,index+1)
        }
    }
    return indices;
};