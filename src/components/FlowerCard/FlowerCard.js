import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
import './FlowerCard.css'

class FlowerCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.number,
    comments: PropTypes.array,
  };

  render() {
    const {name, price, description, rating} = this.props;
    const commentsList = this.props.comments;
    return (
      <div className="flowerCard">
        <Card>
          <Image src={require('../../static/img/1.jpg')} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta><a>Отзывы ({ commentsList.length })</a></Card.Meta>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' rating={rating} maxRating={5} />
            <Button className="flowerCard__shopBtn" animated='vertical' color='red' fluid>
              <Button.Content hidden>Купить</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
                <span className="flowerCard_price">{price}</span>
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default FlowerCard