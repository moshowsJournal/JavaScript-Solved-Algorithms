/**

A modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and sum those integers, you have the same value you started with.

Consider a positive whole number n with d digits. We square n to arrive at a number that is either 2 * d digits long or (2 * d) - 1 digits long. Split the string representation of the square into two parts, l and r. The right hand part,r must be  d digits long. The left is the remaining substring. Convert those two substrings back to integers, add them and see if you get n.

Example

n = 5
d = 1

First calculate that . Split that into two strings and convert them back to integers  and . Test , so this is not a modified Kaprekar number. If , still , and . This gives us , the original .

Note: r may have leading zeros.
**/

function kaprekarNumbers(p, q) {
    const kaprekarNumbers = [];
    for(let num = p; q >= num; num++){
        let square = [...Math.pow(num,2).toString()];
        let index = Math.floor((square.length/2)) - 1;
        index  =  index < 0 ? 0  : index;
        square.splice(
            index, 1,`${square[index]}_`);
        square = square.join('').split('_');
        let char_sum  = Number(square[0]) + Number(square[1] || 0);
        if(char_sum == num){
            kaprekarNumbers.push(num);
        }
    }
    console.log(kaprekarNumbers.length > 0 ? kaprekarNumbers.join(' ') : 'INVALID RANGE');
}