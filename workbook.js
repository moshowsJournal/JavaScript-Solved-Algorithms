/**

Example
arr = [4,2]
k = 3

Lisa's workbook contains arr[1] = 4 problems for chapter 1, and arr[2] = 2  problems for chapter . Each page can hold k = 3 problems.

The first page will hold 3 problems for chapter 1. Problem 1 is on page 1, so it is special. Page 2 contains only Chapter 1, Problem 4, so no special problem is on page 2. Chapter 2 problems start on page 3 and there are 2 problems. Since there is no problem 3 on page 3, there is no special problem on that page either. There is 1 special problem in her workbook.

Note: See the diagram in the Explanation section for more details.
**/


function workbook(n, k, arr) {
    let page = 0;
    let que_count = 0;
    for(let index = 0; arr.length > index; index++){
        let questions = [...Array(arr[index]).keys()];
        while(questions.length > 0){
            let res = questions.splice(0,k).includes(page) ? 1 : 0;
            que_count+=res;
            page++;
        } 
    }
    return que_count;
}