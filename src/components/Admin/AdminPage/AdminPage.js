import React, {Component} from 'react';
import './AdminPage.css'
import FlowerCardAdmin from '../FlowerCardAdmin/FlowerCardAdmin';

class AdminPage extends Component {

  render() {
    const element = {
      "__v": 0,
      "name": "Джесси",
      "_id": "5b7326876e05c50020915009",
      "created_date": "2018-08-14T18:59:19.388Z",
      "price": 999,
      "rating": 5,
      "comments": [
        "no comments"
      ],
      "description": "собачка"
    };

    return (
      <div className="admin">
        admin page
        <FlowerCardAdmin
          name = {element.name}
          price={element.price}
          description = {element.description}
          rating = {element.rating}
          comments = {element.comments}
        />
      </div>
    )
  }

}

export default AdminPage