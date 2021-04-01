/**
	You are given a square map as a matrix of integer strings. Each cell of the map has a value denoting its depth. We will call a cell of the map a cavity if and only if this cell is not on the border of the map and each cell adjacent to it has strictly smaller depth. Two cells are adjacent if they have a common side, or edge.

Find all the cavities on the map and replace their depths with the uppercase character X.

Example

grid = ['989','191','111'];

The grid is rearranged for clarity:

989
191
111
Return:

989
1X1
111
The center cell was deeper than those on its edges: [8,1,1,1]. The deep cells in the top two corners do not share an edge with the center cell, and none of the border cells is eligible.

**/



function cavityMap(grid) {
        let done = false;
        let arr = grid;
        let col = 1;
        let row = 1;
        let max_val = 0;
        while(!done){
            if(row === grid[0].length - 1 || grid[0].length === 1){done = true; continue};
            let value = [...grid[col]][row];
            if(max_val === 0 && (grid.length - 1) === col){
                col = 1;
                max_val = 0;
                row++;
                continue;
            }
            if(max_val < value && [...grid[col]][row + 1] < value && [...grid[col]][row - 1] < value
                
                && [...grid[col-1]][row] < value && [...grid[col+1]][row] < value){
                let change = [...arr[col]];
                change.splice(row,1,'X');
                arr.splice(col,1,change.join(''))
            }
            col++;
        }
        return arr;
    }