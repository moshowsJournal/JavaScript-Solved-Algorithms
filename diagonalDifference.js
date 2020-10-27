/**
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1 + 5 + 9 = 15 . The right to left diagonal = 3 + 5 + 9 = 17 . Their absolute difference is |15 - 17| = 2.

**/

function diagonalDifference(arr) {
    // Write your code here
    let right_diagonal_sum = 0;
    let left_diagonal_sum = 0;
    for(let counter=0;arr.length > counter; counter++){
        right_diagonal_sum += arr[counter][counter];
        left_diagonal_sum += arr[counter][(arr.length - counter -1)];
    }
    return Math.abs(right_diagonal_sum - left_diagonal_sum);
}