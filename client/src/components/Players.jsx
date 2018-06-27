import React from 'React';

const Players = ({playerNumber, score, wins, current, active}) => (
  <div className={`player-${playerNumber} player ${active}`}>
    <h1 className={`player_name name-${playerNumber}`}>Player {playerNumber + 1}</h1>
    <p className={`player_score score-${playerNumber}`}>{score[playerNumber]}</p>
    <div className="current-score">
      <span>Current Score</span>
      <p className={`current current-${playerNumber}`}>{current[playerNumber]}</p>
    </div>

    <h2>Player {playerNumber + 1} wins: {wins[playerNumber]}</h2>
  </div>
);

export default Players;


//      <CurrentScore playerNumber={playerNumber} current={current} />
