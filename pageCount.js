
/****
A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side:

When they flip page 1, they see pages 2  and 3 . Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given  and , find and print the minimum number of pages that must be turned in order to arrive at page.
Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
**/
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    let pg_arr = [...Array(n+1).keys()];
    let pages = [];
    for(let counter=0;counter<=n;counter = counter+2){
        let page = pg_arr.slice(counter,counter+2);
        pages.push(page);
    }
    let fwd_flips = pages.map((value,index)=>{
        return {flip : index,pages : value}
    }).filter(value=>value.pages.includes(p))
    let back_flips = pages.reverse().map((value,index)=>{
        return {flip : index,pages : value}
    }).filter(value=>value.pages.includes(p));
    return fwd_flips[0].flip > back_flips[0].flip ? back_flips[0].flip : fwd_flips[0].flip;

}