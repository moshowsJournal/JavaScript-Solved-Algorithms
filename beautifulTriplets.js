/**
Given a sequence of integers , a triplet (a[i],a[j],a[k])  is beautiful if:
--- i < j < k
--- a[j] - a[i] = a[k] - a[j] = d

Given an increasing sequenc of integers and the value of d, count the number of beautiful triplets in the sequence.

For example, the sequence  arr = [2,2,3,4,5] and d = 1. There are three beautiful triplets, by index:[i,j,k]  = [0,2,3],[1,2,3],[2,3,4]. To test the first triplet,   arr[j] - arr[i] = 3 - 2 = 1 and arr[k] - arr[j] = 4 - 3 = 1.

**/


function beautifulTriplets(d, arr) {
    let triplet_count = arr.map((num,index)=>{
        let third = 0;
        let second = num + d; 
        let check1 = arr.slice(index,arr.length + 1).includes(second);
        let check2 = false;
        if(check1){
            third = second + d; 
            check2 = arr.slice(arr.indexOf(second),arr.length + 1).includes(third);
        }
        return check1 && check2;
    }).filter(item=>item).length;
    return triplet_count;
}