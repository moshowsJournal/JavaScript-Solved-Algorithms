/**

You wish to buy video games from the famous online video game store Mist.

Usually, all games are sold at the same price, p dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game will cost d dollars, and every subsequent game will cost  dollars less than the previous one. This continues until the cost becomes less than or equal to m dollars, after which every game will cost m dollars. How many games can you buy during the Halloween Sale?

Example

p = 20
d = 3
m = 6
s = 70

The following are the costs of the first , in order:
	20,17,14,11,8,6,6,6,6,6,6

Start at p = 20 units cost, reduce that by d = 3 units each iteration until reaching a minimum possible price, m = 6 . Starting with s = 70 units of currency in your Mist wallet, you can buy 5 games: 20 + 17 + 14 + 11 + 8 = 70.

**/

function howManyGames(p, d, m, s) {
    let game_count = 0;
    let cash = s;
    let cost = p;
    while(cash >= m && s > p){
        cash = cost <= m ? cash - m : cash - cost;
        cost = cost - d;
        if(cash >= 0){
            game_count++; 
        }
    }
    return game_count;
}