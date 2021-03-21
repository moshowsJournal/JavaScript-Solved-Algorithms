/**
Given the time in numerals we may convert it into words, as shown below:

At , use o' clock. For , use past, and for  use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.

5:00 -> five o' clock
5:01 -> one minute past five
5:10 -> ten minutes past five
5:15 -> quarter past five
5:40 -> twenty minites to six
5:45 -> quarter to six
5:47 -> thirteen minutes to six
5:28 -> twenty eight minutes past five

At minutes = 0, use o' clock. For 1 <= minutes <= 30 , use past, and for 30 < minutes use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.

**/

function timeInWords(h, m) {
    let time;
    let number_words = ['one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','thirty'];
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30];
    let hour_in_words = m > 30 ? number_words[numbers.indexOf(h+1)] : number_words[numbers.indexOf(h)];
    if(m > 30 && h === 12){
        hour_in_words = 'one';
    }
    let min_in_words = parseInt(m) > 30 ? `${number_words[numbers.indexOf(60 - Number(m))]}` : `${number_words[numbers.indexOf(Number(m))]}`;
    let minutes = m < 2 ? 'minute' : 'minutes';
    if(parseInt(m) < 30  && number_words[numbers.indexOf(Number(m))] === undefined){
        min_in_words = `${number_words[numbers.indexOf(Number(`${[...m.toString()][0]}0`))]} ${number_words[numbers.indexOf(Number(`${[...m.toString()][1]}`))]}`;
    }
    if(parseInt(m) > 30 && parseInt(m) < 40  && number_words[numbers.indexOf(Number(m))] === undefined){
        let mins_left = 60 - m;
        min_in_words = `${number_words[numbers.indexOf(Number(`${[...mins_left.toString()][0]}0`))]} ${number_words[numbers.indexOf(Number(`${[...mins_left.toString()][1]}`))]}`;
    }
    if(Number(m) < 30){
        time = `${min_in_words} ${minutes} past ${hour_in_words}`;
    }
    if(Number(m) === 15){
        time = `quarter past ${hour_in_words}`;
    } 
    if(Number(m) === 30){
        time = `half past ${hour_in_words}`;
    }
    if(m.toString() === '0'){
        time = `${hour_in_words} o' clock`;
    }
    if(Number(m) === 45){
        time = `quarter to ${hour_in_words}`
    }
    if(Number(m) !== 45 && Number(m) > 30){
        time = `${min_in_words} ${minutes} to ${hour_in_words}`
    }
    return time;

}