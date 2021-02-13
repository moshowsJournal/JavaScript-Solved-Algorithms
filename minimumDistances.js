/**
The distance between two array values is the number of indices between them. Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1.

Example
a = [3,2,1,2,3]
There are two matching pairs of values: 3 and 2. The indices of the 3's are i = 0 and j = 4, so their distance is d[i,j] = |j- i| = 4. The indices of the 2's are  i = 1 and j = 3, so their distance is d[i,j] = |j-i| = 2. The minimum distance is 2.

**/

function minimumDistances(a) {
    let arr = {};
    let occurences = {}
    for(let index = 0; a.length > index; index++){
        if(!occurences[a[index]]) occurences[a[index]] = 0;
        occurences[a[index]] = occurences[a[index]] + 1;
        if(!arr[a[index]]) arr[a[index]] = 0
        arr[a[index]] = index - arr[a[index]]
    }
    let result = Object.keys(arr).filter(item=>occurences[item] > 1).
        map(item=>arr[item]).sort((a,b)=>a-b)[0]
    return result || -1;

}