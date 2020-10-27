/**
Staircase detail

This is a staircase of size :

  #
  ##
 ###
####

**/


function staircase(n) {
    let stairs = '';
    for(let counter=1;counter <= n; counter++){
        stairs += `${' '.repeat(n - counter)}${'#'.repeat(counter)}${'\n'}`;
    }
    console.log(stairs);
}