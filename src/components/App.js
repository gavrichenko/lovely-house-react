import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Counter from './Counter';
import Header from './Header/Header';
import About from './About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <Header />
          <hr/>
          <About />
        </div>
      </Router>
    );
  }
}

export default App;
