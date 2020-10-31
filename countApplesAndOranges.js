/**
	Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
	
	For example, Sam's house is between s = 7 and t = 10 . The apple tree is located at a = 4 and the orange at b =12. There are m=3 apples and  n=3 oranges. Apples are thrown apples=[2,3,-4] units distance from a, and oranges = [3,-2,-4] units distance. Adding each apple distance to the position of the tree, they land at [4+2,4+3,4+-4] = [6,7,0]. Oranges land at [12+3,12+-2,12+-4] = [15,10,8]. One apple and two oranges land in the inclusive range 7 - 1  so we print
	
	1
	2
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple_count = apples.map(pt=> a + pt).filter(pt=>{
        return (s <= pt && pt < t) || (s < pt && pt <= t)
    }).length;
    let orange_count = oranges.map(pt=>b+pt).filter(pt=>{
        return (s <= pt && pt < t) || (s < pt && pt <= t)
    }).length;

    console.log(`${apple_count}${'\n'}${orange_count}`);
}