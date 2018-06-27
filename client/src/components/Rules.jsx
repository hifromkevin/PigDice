import React, {Component} from 'react';

export default class Rules extends Component {
  constructor(props) {
    super(props);
  }

  showRules() {
    document.querySelector('.rules').classList.toggle('hideRules');
  }

  render() {
    return (
      <div id="menu_rules" className="text_center">
        <p onClick={this.showRules}><i>Click Here to Learn the Rules!</i></p>
        <div id="rule" className="rules hideRules">
          <h3><strong>How to Play</strong></h3>

          <p>The object of the game is to be the first player to get to the target score ({this.props.playUntil}). 
             Click the "Roll Dice" button.
             If you roll a one (the pig-headed die), your current score for that round will be set to zero! Press the "Hold" to add your current score to your total score.
          </p>
        </div>
      </div>
    );
  }
}