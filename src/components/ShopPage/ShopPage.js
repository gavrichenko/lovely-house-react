import React, {Component} from 'react';
import './ShopPage.css'
import FlowersList from "../FlowersList/FlowersList";

class ShopPage extends Component {

  render() {
    return (
      <div className=".shop">
        <FlowersList />
      </div>
    )
  }

}

export default ShopPage