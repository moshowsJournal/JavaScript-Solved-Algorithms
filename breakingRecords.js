/***
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

For example, assume her scores for the season are represented in the array scores = [12,24,10,24]. Scores are in the same order as the games played. She would tabulate her results as follows:

Game| Score | Minimum | Maximum | Min Count | Max Count |
0	| 12	| 12	 |	12 | 0 | 0 
1	| 24	| 12	 |	24 | 0 | 1
2	| 10	| 10	 |	24 | 1 | 1
3	| 24	| 10	 |	24 | 1 | 1

**/

function breakingRecords(scores) {

   let max_score = scores.map((item,index)=>{
        let status = scores.slice(0,index).map((value,index)=> item > value);
        return status.includes(false) || status.length === 0 ? false : true;
    }).filter(value=>value).length;

    let min_score = scores.map((item,index)=>{
        let status = scores.slice(0,index).map((value,index)=> item < value);
        return status.includes(false) || status.length === 0 ? false : true;
    }).filter(value=>value).length;

    return [max_score,min_score];
}