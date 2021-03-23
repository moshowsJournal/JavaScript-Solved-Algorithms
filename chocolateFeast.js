/**
Little Bobby loves chocolate. He frequently goes to his favorite 5 & 10 store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

Example
n = 15
c = 3
m = 2


He has 15 to spend, bars cost 3, and he can turn in 2 wrappers to receive another bar. Initially, he buys 5 bars and has 5 wrappers after eating them. He turns in  4 of them, leaving him with 1, for 2 more bars. After eating those two, he has 3 wrappers, turns in 2 leaving him with 1 wrapper and his new bar. Once he eats that one, he has 2 wrappers and turns them in for another bar. After eating that one, he only has  wrapper, and his feast ends. Overall, he has eaten 5 + 2 + 1 + 1 = 9 bars.

**/

function chocolateFeast(n, c, m) {
    if(n === 0){
        return 0;
    }
    let wrappers_left = Math.floor(n/c);
    let choco_count = Math.floor(n/c);
    while(wrappers_left >= m){
        choco_count= choco_count + Math.floor(wrappers_left/m);
        wrappers_left = (wrappers_left % m) + Math.floor(wrappers_left/m);
    }
    return choco_count;
}