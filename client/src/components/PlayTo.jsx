import React, { Component } from 'react';

/* export default class PlayTo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="playTo">
      <h2>How many points would you like to play to?</h2>
        <input 
          value={ this.props.playToValue }
          onChange={ 
            (event) => this.props.onPlayToChange(event.target.value)
          } 
        />
      </div>
    )
  }
}
*/




const PlayTo = ({ playToValue, onPlayToChange }) => (
      <div className="playUntil">
      <h2>How many points would you like to play to?</h2>
        <input 
          value={ playToValue }
          onChange={ 
            (event) => onPlayToChange(event.target.value)
          } 
        />
      </div>
);

export default PlayTo;

