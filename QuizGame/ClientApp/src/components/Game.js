import React, { Component } from 'react';
import { Questions } from './Questions';

export class Game extends Component {
    static displayName = Game.name;

    constructor(props) {
        super(props);
        this.state = { questions: [], loading: true };
        this.s = 1;
        console.log(this.s);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.populateQuestionsData(this.s);
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : <Questions questions={this.state.questions} />

      return (
        <div>
        <div>  Lets Play the Game  </div>
              {contents}
              <div>
                  <button onClick={this.handleClick} type="button">Click Me!</button>
              </div>
        </div>

    );
    }

    async handleClick() {
        console.log(this)
        this.s = this.s + 1;
        this.populateQuestionsData(this.s);
    }

    async populateQuestionsData(roundNumber) {
        const response = await fetch('api/questions/' + roundNumber);
        const data = await response.json();
        this.setState({ questions: data, loading: false });
    }
}
