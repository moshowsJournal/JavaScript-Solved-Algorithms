/***
Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

Example
arr = [1,2,2,3]

Delete the 2 elements 1 and 3 leaving arr = [2,2]. If both twos plus either the 1 or the 3 are deleted, it takes 3 deletions to leave either [3] or [1]. The minimum number of deletions is 2.

**/
// Complete the equalizeArray function below.
function equalizeArray(arr) {
    let obj = {};
    arr.forEach((item)=>{
        if(!obj[item]) obj[item] = 0;
        obj[item] += 1;
    });
    let sorted = Object.values(obj).sort((a,b)=>b-a);
    let other_count_tot = sorted.filter(item=>item !== sorted[0]).reduce((a,b)=>a+b,0);
    let same_count_tot = sorted.filter(item=>item === sorted[0]).reduce((a,b)=>a+b,0);
    return same_count_tot === sorted[0] ? other_count_tot : (same_count_tot + other_count_tot) - sorted[0];
}