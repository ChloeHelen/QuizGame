import React, { Component } from 'react';

export class Questions extends Component {
    static displayName = Questions.name;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
      return (

          <div>
              <h1 id="tabelLabel" >Questions</h1>
              <table className='table table-striped' aria-labelledby="tabelLabel">
                  <thead>
                      <tr>
                          <th>Statement</th>
                          <th>Answer</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.props.questions.questionList.map(question =>
                          <tr key={question.statement}>
                              <td>{question.player}</td>
                              <td>{question.statement}</td>
                              <td>{question.answer}</td>
                          </tr>
                      )}
                  </tbody>
              </table>
          </div>

    );
  }

}
