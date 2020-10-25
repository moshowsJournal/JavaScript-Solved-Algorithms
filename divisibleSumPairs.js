/***
You are given an array of  integers,ar = [ar[0],ar[1] ..., ar[n-1]] , and a positive integer,k. Find and print the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.

For example, ar = [1,2,3,4,5,6]  and k =5. Our three pairs meeting the criteria are [1,4],[2,3] and [4,6].

Function Description

Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.

divisibleSumPairs has the following parameter(s):

n: the integer length of array ar
ar: an array of integers
k: the integer to divide the pair sum by

**/

function divisibleSumPairs(n, k, ar) {
    let pairs1 = ar.map((value,index)=>{
        return ar.slice(index,index+2)
    });
    let pairs2 = [];
    for(let size = 3; n >= size; size++){
        pairs2 = ar.map((value,index)=>{
            let res = ar.slice(index,index+size)
            res.splice(1,size-2);
            return res;
        });
        pairs1.push(...pairs2); 
    }
    let pairs = pairs1.filter((value,index)=> {
        return value.reduce((a,b)=>a+b,0)%k === 0 && value.length > 1;
    });
    return pairs.length;
}