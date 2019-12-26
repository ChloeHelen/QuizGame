import React, { Component } from 'react';

export class Game extends Component {
  static displayName = Game.name;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>  Lets Play the Game  </div>
    );
  }

}
