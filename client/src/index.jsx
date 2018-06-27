import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Players from './components/Players.jsx';
import Rules from './components/Rules.jsx';
import Buttons from './components/Buttons.jsx';
import PlayTo from './components/PlayTo.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diceNumber: 1,
      playerTurn: 0,
      score: [0, 0],
      currentScore: [0, 0],
      playUntil: 100,
      winner: null,
      wins: [0, 0]
    }
    this.newGame = this.newGame.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.holdScore = this.holdScore.bind(this);
    this.switchPlayer = this.switchPlayer.bind(this);
    this.onPlayToChange = this.onPlayToChange.bind(this);
    this.determineWinner = this.determineWinner.bind(this);
    this.rollDice = this.rollDice.bind(this);
  }

  newGame() {
    if (confirm('Are you sure you would like to start a new game?')) {
      this.setState({
        diceNumber: 1,
        playerTurn: 0,
        score: [0, 0],
        currentScore: [0, 0],
        winner: null
      });

      document.getElementById('winner').innerHTML = ``;
      document.getElementById('playerInformation').classList.remove('hide');
      document.querySelector('.player-0').classList.add('active');
      document.querySelector('.player-1').classList.remove('active');

    }
  }

  updateScore(addToScore) {
    var newScore = this.state.score.slice();
    newScore[this.state.playerTurn] = addToScore;

    this.setState({
      score: newScore
    });
  }

  holdScore() {
    if (this.state.winner === null) {
      var newScore = this.state.score[this.state.playerTurn] + this.state.currentScore[this.state.playerTurn];
      var switchPlayerTurn = this.switchPlayer();

      this.updateScore(newScore);

      this.setState({
        currentScore: [0, 0],
        playerTurn: switchPlayerTurn
      });
    }
  }

  switchPlayer() {
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
    return (this.state.playerTurn === 0) ? 1 : 0;
  }

  onPlayToChange(num) {
    this.setState({
      playUntil: num
    });
  }

  determineWinner(player, current, score) {
    if ((current[player] + score[player]) >= this.state.playUntil) {

      var winnerState = this.state.wins.slice();
      winnerState[player] = winnerState[player] + 1;

      this.setState({
        winner: player,
        wins: winnerState
      });

      document.getElementById('winner').innerHTML = `Player ${player + 1} wins!`;
      document.getElementById('playerInformation').classList.add('hide');
    }
  }

  rollDice() {
    if (this.state.winner === null) {
      var newDiceRoll = Math.floor((Math.random() * 6) + 1);

      this.setState({
        diceNumber: newDiceRoll
      });

      if (newDiceRoll === 1) {
        var switchPlayerTurn = this.switchPlayer();

        this.setState({
          currentScore: [0, 0],
          playerTurn: switchPlayerTurn
        });
      } else {
        var newCurrentScore = this.state.currentScore[this.state.playerTurn] + newDiceRoll;
        var newCurrentVar = this.state.currentScore.slice();

        newCurrentVar[this.state.playerTurn] = newCurrentScore;

        this.setState({
          currentScore: newCurrentVar 
        }, 
          this.determineWinner(this.state.playerTurn, newCurrentVar, this.state.score)
        );
      }

      ;
    }
  }

  render() {
    return (
      <div>
        <div id="menu">
          <img src="img/logo-green.svg" id="menu_logo" />
          <Rules playUntil={ this.state.playUntil } />
        </div>

        <div className="skinny_row">
          <div className="gameboard_left">
            <h1>Let's Play Pig Dice!</h1> 
            <h2>Play Until: <strong>{this.state.playUntil}</strong></h2>
          </div>
          <div className="gameboard_right">
            <img src={`img/dice-${this.state.diceNumber}.png`} className="dice" />
            <h2 id="playerInformation">Player {this.state.playerTurn + 1}'s Turn!</h2>
            <h2 id="winner"></h2>
          </div>
        </div>

        <Buttons holdScore={ this.holdScore } newGame={ this.newGame } rollDice={ this.rollDice } />
        <div className="rows">
          <Players playerNumber={ 0 } score={ this.state.score } current={ this.state.currentScore } wins={ this.state.wins } active={ 'active' } />
          <Players playerNumber={ 1 } score={ this.state.score } current={ this.state.currentScore } wins={ this.state.wins } active={ '' } />
        </div>
        <div className="rows playTo">
        <PlayTo playToValue={ this.state.playUntil } onPlayToChange={ this.onPlayToChange } />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));