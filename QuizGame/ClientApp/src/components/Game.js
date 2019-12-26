import React, { Component } from 'react';
import { Questions } from './Questions';

export class Game extends Component {
  static displayName = Game.name;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
      return (
        <div>
        <div>  Lets Play the Game  </div>
              <Questions />
        </div>
    );
  }

}
