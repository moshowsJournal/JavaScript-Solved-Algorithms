/***
When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:

PDF-highighting.png

There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0 and 'z' is at index 25. There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm2 assuming all letters are 1mm2  wide.

Example
 h = [1,3,1,3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5]

The heights are t = 2 and o = 1 amd n = 1. The tallest letter is 2 high and there are 4 letters. The hightlighted area will be 2 * 4 =8mm2  so the answer is 8.

**/

function designerPdfViewer(h, word) {
    const alphabets = [];
    const heights = [];
    for(let counter = 97;counter <= 123;counter++){
        alphabets.push(String.fromCharCode(counter))
    }
    let arr_word = [...word];
    for(let counter = 0;counter<arr_word.length;counter++){
        let index = alphabets.indexOf(arr_word[counter].toLowerCase());
        heights.push(h[index]);
    }
    return heights.sort((a,b)=>b-a)[0] * arr_word.length
    
}