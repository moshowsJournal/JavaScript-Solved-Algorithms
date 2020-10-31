/***
Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are n =7 socks with colors ar = [1,2,1,2,1,3,2] . There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

**/

function sockMerchant(n, ar) {
    let pairs_count = [...new Set(ar)].map((value)=>{
        return Math.floor(ar.filter(item=>item === value).length / 2)
    }).reduce((a,b)=>a+b,0);

    return pairs_count;
}