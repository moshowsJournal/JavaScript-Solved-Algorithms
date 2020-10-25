/***
Given a chocolate bar, two children, Lily and Ron, are determining how to share it. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
You must determine how many ways she can divide the chocolate.

Consider the chocolate bar as an array of squares, s = [2,2,1,3,2]. She wants to find segments summing to Ron's birth day,  with a length equalling his birth month,m=2 . In this case, there are two segments meeting her criteria:  [2,2] and [1,3].


Function Description

Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.

birthday has the following parameter(s):

s: an array of integers, the numbers on each of the squares of chocolate
d: an integer, Ron's birth day
m: an integer, Ron's birth month

**/

function birthday(s, d, m) {
    let segments = s.map((m_val,m_index)=>{
        return s.slice(m_index,m+m_index);
    }).filter((value,index)=>{
        return value.reduce((a,b)=> a+b,0) === d;
    });
    return segments.length;
}