/***

Given a time in 12 -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s = '12:01:00PM'

Return '12:01:00'.

s  = '12:01:00AM'
Return '00:01:00'.

**/

function timeConversion(s) {
    /*
     * Write your code here.
     */
    let time_arr = s.split(':');
    if(s.includes('AM') && time_arr[0] == 12){
        time_arr[0]  = '00';
        return time_arr.join(':').replace('AM','');
    }
    if(s.includes('PM') && time_arr[0] < 12){
        time_arr[0]  = Number(time_arr[0]) + 12;
        return time_arr.join(':').replace('PM','');
    }
    return s.includes('PM') ?  s.replace('PM','') : s.replace('AM',''); 

}