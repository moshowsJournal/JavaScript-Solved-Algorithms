/**
Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

Note: A square integer is an integer which is the square of an integer, e.g. .

Example
a = 24
b = 49

There are three square integers in the range: 25,36 and 49. Return 3.

**/

function squares(a, b) {
    let squares_count = (Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1);
    return squares_count;
}