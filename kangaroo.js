/**
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

For example, kangaroo 1 starts at x1 = 2 with a jump distance v1 = 1 and kangaroo 2 starts at x2 = 1 with a jump distance of v2 = 2. After one jump, they are both at x = 3, (x1 + v1 = 2,x2 + v2 = 1 + 2), so our answer is YES.
**/

function kangaroo(x1, v1, x2, v2) {
    if((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1) ){
        return 'NO';
    }
    if(!(v1 - v2)){
        return 'NO';
    }
    if((x2-x1)%(v1-v2)){
        return 'NO';
    }
    return 'YES'
}