/***
An integer  is a divisor of an integer  if the remainder of .

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

Example
n = 124
Check whether 1,2 and 4 are divisors of 124. All 3 numbers divide evenly into 124  so return 3.


Check whether 1, 1, and 1 are divisors of 111. All 3 numbers divide evenly into 111 so return 3.

**/

function findDigits(n) {
    let divisble = [...n.toString()].filter(num=>n%num === 0)
    return divisble.length;

}