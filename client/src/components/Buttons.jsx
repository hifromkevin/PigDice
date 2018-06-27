import React from 'react';

const Buttons = ({holdScore, newGame, rollDice}) => (
    <div>
      <button className="btn-hold" onClick={holdScore}>Hold</button>
      <button className="btn-roll" onClick={rollDice}>Roll Dice</button>
      <button className="btn-new" onClick={newGame}>New Game</button>

    </div>
);
export default Buttons;