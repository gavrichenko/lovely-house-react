import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import './Header.css'


class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <header className="header">
        <Menu stackable>

          <Link to="/" className ="header__link">
            <Menu.Item>
              <img src={require('../../static/ico/flowers.png')} />
              <span className="nameOfLogo"><p>lovely-house</p></span>
            </Menu.Item>
          </Link>

          <Link  to="/promotion" className ="header__link">
            <Menu.Item
              name='promo'
              active={activeItem === 'promo'}
              onClick={this.handleItemClick}
            >
              Акции
            </Menu.Item>
          </Link>

          <Link to="/contacts" className ="header__link">
            <Menu.Item
              name='contacts'
              active={activeItem === 'contacts'}
              onClick={this.handleItemClick}
            >
              Контакты
            </Menu.Item>
          </Link>

          <Menu.Item className ="header__link"
            name='sign-in'
            active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}>
            Купить
          </Menu.Item>
        </Menu>
      </header>
    )
  }
}

export default Header