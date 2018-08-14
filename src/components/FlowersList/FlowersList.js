import React, {Component} from 'react';
import './FlowerList.css';
import FlowerCard from '../FlowerCard/FlowerCard';

class FlowersList extends Component {

  render() {
    return (
        <div className="flowersList">
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
        </div>
    );
  }
}

export default FlowersList