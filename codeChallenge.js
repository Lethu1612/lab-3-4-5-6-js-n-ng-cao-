//codeChallenge1

const game= {
    team1: 'Bayon Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],

    score: '4:0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
const [players1, players2]= game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers]= players1;
console.log(gk, fieldPlayers);

//3
const allPlayers= [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5
const {odds: {team1, x: draw, team2}}= game;
console.log(team1, draw, team2);

//6
const printGoals = function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller',  'Lewandowski', 'Kimmich');
// printGoals ('Davies', 'Muller');

printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


//codeChallenge2
//1
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i+1}: ${player}`);

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3
for (const[team, odd] of Object.entries(game.odds)){
    const teamStr= team === 'x' ? 'draw': `victory $
    {game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

//codeChallenge3
const gameEvents = new Map([
    [17,'GOAL'],
    [36,'Substitution'],
    [47, 'GOAL'],
    [61,'Substitution'],
    [64, 'Yellow card'],
    [70,'Substitution'],
    [72,'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);

//1
const events = [...new Set (gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);

//3
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);
const time = [...gameEvents.keys()];
console.log(time);
console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);

//4
for( const [min, event] of gameEvents) {
    const half= min <= 45 ? 'FIRST': 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}

//codeChallenge4
document.body.append(document.createElement ('textarea'));
document.body.append(document.createElement ('button'));

document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value;
    const rows= text.split('\n');
    console.log(rows);

    for(const [i,row] of rows.entries()){
        const [first, second]=row.toLowerCase().trim().split('_');
        console.log(row, first, second);
        const output = `$(first}${second.replace(
            second [0],
            second [0].toUpperCase )}`;
        console.log(`${output.padEnd(20)}${'ok'.repeat(i+1)}`);

    }
});


