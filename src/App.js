import React, { Component } from 'react';
import SurveyContainer from './components/survey-container.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="title">Survey Form</h1>
            <SurveyContainer />

      </div>
    );
  }
}

export default App;
