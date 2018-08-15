import React, {Component} from 'react';
import './AdminPage.css'
import SearchSemantic from '../../SearchSemantic';
import FlowerCardAdmin from '../FlowerCardAdmin/FlowerCardAdmin';

class AdminPage extends Component {

  render() {
    return (
      <div className="admin">
        <h1>ADMIN PANEL</h1>
        <FlowerCardAdmin/>
        <SearchSemantic />
      </div>
    )
  }

}

export default AdminPage