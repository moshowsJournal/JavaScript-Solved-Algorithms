/**
Example
s = if man was meant to stay on ground god would have given us roots

After removing spaces, the string is 54 characters long. Math.sqrt(54) is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns.

ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots
Ensure that rows * columns >= L
If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. .
The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

Create a function to encode a message.

**/

function encryption(s) {
    let columns = Math.round(Math.sqrt(s.length));
    let rows = 1;let area = 1;let counter =  1;
    while(area < s.length){
        area = columns * rows;
        if(area >= s.length) continue;
        rows++;
    }
    let wrd_arr = [...s]; 
    let words = [...new Array(columns+1).keys()].map(item=>wrd_arr.splice(0,rows))
    .filter(item=>item.length > 0);
    let col = 0;let row = 0;let enct_words = [];let enct_word = '';
    let index = 0;
    while(col <= columns & row <= rows){
        enct_word += words[col] && words[col][row]  ? words[col][row] : '';
        if(col === columns){
            enct_words[index] = enct_word;
            col = 0; row += 1;enct_word = '';
            index++;
            continue;
        }
        col++;
    }
    return enct_words.filter(item=>item.length > 0 ).join(' ');
}