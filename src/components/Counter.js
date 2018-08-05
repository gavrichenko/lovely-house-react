import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC'

class Counter extends Component {

  static propTypes = {
    counter: PropTypes.number
  };

  render() {
    return(
      <div>
        Counter: {this.props.counter}
        <button onClick={this.handleIncrement}>Increment me</button>
      </div>
    )
  }

  handleIncrement = () => {
    console.log('incrementing');
    return this.props.dispatch(increment())
  }
}
function mapStateToProps(state) {
  return {
    counter: state.count
  }
}

const decorator = connect(mapStateToProps);

export default decorator(Counter);