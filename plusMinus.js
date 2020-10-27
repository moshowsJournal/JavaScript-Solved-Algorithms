/**
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example
arr = [1,1,0,-1,-1]
There are  n =5 elements, two positive, two negative and one zero. Their ratios are 2/5 =0.40000, 2/5 = 0.40000 and 1/5 = 0.2000 . Results are printed as:

0.400000
0.400000
0.200000

**/

function plusMinus(arr) {
    let zeros = arr.filter(zero=>zero === 0);
    let positives = arr.filter(positive=>positive > 0);
    let negatives = arr.filter(negative=>negative < 0);
    return console.log(`${(positives.length/arr.length).toPrecision(6)}
   ${ (negatives.length/arr.length).toPrecision(6)}
    ${(zeros.length/arr.length).toPrecision(6)}`)
}