import React, { Component } from 'react';
import { Questions } from './Questions';

export class Game extends Component {
  static displayName = Game.name;

  render() {
      return (
        <div>
        <div>  Lets Play the Game  </div>
              <Questions questions={this.props.questions} />
        </div>
    );
    }


}
