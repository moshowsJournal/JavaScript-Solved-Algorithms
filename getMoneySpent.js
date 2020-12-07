/***

A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

Example
b = 60
keyboards = [40,50,60]
drives = [5,18,12]


The person can buy a 40 keyboard + 12 USB drive = 52, or a 50 keyboard + 8 USB drive = 58 . Choose the latter as the more expensive option and return 58 .

**/

function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let combo = [];
    for(let count = 0; drives.length > count; count++){
        let temp = keyboards.map((keyboard)=>keyboard + drives[count])
        combo.push(...temp);
    }
    let purchases = combo.filter((price)=>price <= b).sort((a,b)=>b-a);
    return purchases.length > 0 ? purchases[0] : -1;
} 