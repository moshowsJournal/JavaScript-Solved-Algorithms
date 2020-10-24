/***
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [1,3,5,7,9]
The minimum sum is 1 + 3+5+7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24 . The function prints

16 24

***/

function miniMaxSum(arr) {
    let combo = arr.map((mapitem,mapindex)=>{
        return arr.filter((value,index)=>mapindex !== index);
    });
    let minSum = Math.min(...
        combo.map((arr,index)=> arr.reduce((a,b)=>{
            return a + b;
        }),0)
    )
    let maxSum = Math.max(...
        combo.map((arr,index)=> arr.reduce((a,b)=>{
            return a + b;
        }),0)
    )
    console.log(`${minSum} ${maxSum}`);

}