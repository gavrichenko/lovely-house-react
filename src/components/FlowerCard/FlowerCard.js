import React, {Component} from 'react';
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
import './FlowerCard.css'

class FlowerCard extends Component {

  render() {
    return (
      <div className="flowerCard">
        <Card>
          <Image src={require('../../static/img/1.jpg')} />
          <Card.Content>
            <Card.Header>Название букета</Card.Header>
            <Card.Meta><a>Отзывы</a></Card.Meta>
            <Card.Description>Описание букета</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={3} maxRating={5} />
            <Button className="flowerCard__shopBtn" animated='vertical' color='red' fluid>
              <Button.Content hidden>Купить</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
                <span className="flowerCard_price">1 500 руб</span>
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default FlowerCard