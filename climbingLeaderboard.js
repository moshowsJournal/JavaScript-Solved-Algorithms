/**
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

=> 	The player with the highest score is ranked number 1 on the leaderboard.
=>	Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
Example

Example
ranked = [100,90,90,80]
player = [70,80,105]

The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, their rankings after each game are 4th, 3rd and 1st. Return [4,3,1].

**/

function climbingLeaderboard(scores, alice) {
    scores = [...new Set(scores)];
    const player_ranks = [];
    for (const score of alice) {
        while (scores && score >= scores[scores.length - 1])
            scores.pop()
        player_ranks.push(scores.length + 1)
    }
    return player_ranks; 
}