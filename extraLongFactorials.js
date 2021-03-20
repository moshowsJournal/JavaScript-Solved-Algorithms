/**
The factorial of the integer n, written n!, is defined as:
	n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1 
Calculate and print the factorial of a given integer.

For example, if n = 30 , we calculate 30 * 29 * 28 * ... * 2 * 1  and get .

Function Description

Complete the extraLongFactorials function in the editor below. It should print the result and return.

extraLongFactorials has the following parameter(s):

n: an integer

***/

function extraLongFactorials(n) {
    let numbers = [...new Array(n+1).keys()];
    let product = 1;
    for(let index=1;index < numbers.length;index++){
        product = BigInt(product)*BigInt(Number(numbers[index]));
    }
    console.log(product.toString());
}