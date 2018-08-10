import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Counter from './Counter';
import FlowersList from './FlowersList/FlowersList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" component={Counter} />
          <FlowersList />
        </div>
      </Router>
    );
  }
}

export default App;
