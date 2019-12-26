import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Game } from './components/Game';


import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { questions: [], loading: true };
    }

    componentDidMount() {
        this.populateQuestionsData();
    }

  render () {
    return (
      <Layout>
            <Route path='/game' render={(props) => <Game {...props} questions={this.state.questions} />} />
      </Layout>
    );
    }

    async populateQuestionsData() {
        const response = await fetch('api/questions/1');
        const data = await response.json();
        this.setState({ questions: data, loading: false });
    }
}
