import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Card, Icon, Image, Button, Rating, Input } from 'semantic-ui-react'
import './FlowerCardAdmin.css'
import axios from 'axios';


class FlowerCardAdmin extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.number,
    comments: PropTypes.array,
  };
  constructor(props){
    super();
    this.axiosInstance = axios.create({
      baseURL: `https://salty-ridge-37026.herokuapp.com/`
    });
    this.state = {
      nameRes: '',
      priceRes: '',
      descriptionRes: '',
    };
  }

  handleChangeName = (e) => {this.setState({nameRes: e.target.value})};
  handleChangePrice = (e) => {this.setState({priceRes: e.target.value})};
  handleChangeDescription = (e) => {this.setState({descriptionRes: e.target.value})};

  handleGetReq = () => {
    return this.axiosInstance('flowers/')
      .then(res => {
        console.log(`---- ${res.status} RESPONSE FROM BD: ${JSON.stringify(res.data)}`);
        return res.data;
      })
  };

  handlePostReq = () => {
    return this.axiosInstance.post('flowers/', {
      name: this.state.nameRes,
      price: this.state.priceRes,
      description: this.state.descriptionRes,
    })
      .then(res => {
        console.log(`---- ${res.status} RESPONSE FROM BD: ${JSON.stringify(res.data)}`);
        return res.data;
      })
  };



  render() {
    const {name, price, description, rating} = this.props;
    const commentsList = this.props.comments;
    return (
      <div className="flowerCardAdmin">
        <Card>
          <Image src={require('../../../static/img/1.jpg')} />
          <Card.Content>
            <Card.Header>
            <Input placeholder="Name"
                   value={this.state.nameRes}
                   onChange={this.handleChangeName}
            />
            </Card.Header>
            <Card.Meta><a>Отзывы ({ commentsList})</a></Card.Meta>
            <Card.Description>
              <Input placeholder="Description"
                     value={this.state.descriptionRes}
                     onChange={this.handleChangeDescription}
              />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' rating={rating} maxRating={5} />
            <Button className="flowerCard__shopBtn" color='red' fluid>
              <Button.Content hidden>Купить</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
                <span className="flowerCard_price">
                  <Input placeholder="Price"
                         value={this.state.priceRes}
                         onChange={this.handleChangePrice}
                  />
                </span>
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>

        <div className="flowerCardAdmin__result">

          <p><b>name</b>:{this.state.nameRes}</p>
          <p><b>description</b>:{this.state.descriptionRes}</p>
          <p><b>price</b>:{this.state.priceRes}</p>
          <Button onClick = {this.handleGetReq}>Get</Button>
          <Button onClick = {this.handlePostReq}>Post</Button>
        </div>
      </div>
    )
  }
}

export default FlowerCardAdmin