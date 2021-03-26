/**
You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.

Example
n = 4
width = [2,3,2,1]
cases = [[1,2],[2,4]]

If the entry index i = 1,  and the exit j =2, , there are two segment widths of  2 and 3 respectively. The widest vehicle that can fit through both is 2. If i = 2 and j = 4, the widths are [3,2,1] which limits vehicle width to 1.

**/
// Complete the serviceLane function below.
function serviceLane(width,n, cases) {
    let max_widths = [];
    for(let index = 0; cases.length > index; index++){
        let min = width.slice(cases[index][0],cases[index][1]+1).sort((a,b)=>a-b)[0];
        max_widths.push(min)
    }
    return max_widths;

}