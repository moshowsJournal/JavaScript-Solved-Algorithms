/***

A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by  unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return .

Example

height = [1,2,3,3,2]
k = 1
The character can jump 1 unit high initially and must take 3 - 1 =2  doses of potion to be able to jump all of the hurdles.

**/

function hurdleRace(k, height) {
    let max_hurdle = [...new Set(height)].sort((a,b)=>b-a); 
    return max_hurdle[0] <= k ? 0 : max_hurdle[0] - k;    

}
