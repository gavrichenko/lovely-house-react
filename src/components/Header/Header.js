import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import './Header.css'


class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <header className="header">
        <Menu stackable>

          <Link to="/">
            <Menu.Item>
              <img src={require('../../static/ico/flowers.png')} />
              <span className="nameOfLogo"><p>lovely-house</p></span>
            </Menu.Item>
          </Link>

          <Link to="/promotion">
            <Menu.Item
              name='promo'
              active={activeItem === 'promo'}
              onClick={this.handleItemClick}
            >
              Акции
            </Menu.Item>
          </Link>

          <Link to="/contacts">
            <Menu.Item
              name='contacts'
              active={activeItem === 'contacts'}
              onClick={this.handleItemClick}
            >
              Контакты
            </Menu.Item>
          </Link>

          <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
            Купить
          </Menu.Item>
        </Menu>
      </header>
    )
  }
  // render() {
  //   return (
  //     <header className="header">
  //
  //       <div className="header__logo">
  //           <Logo />
  //       </div>
  //
  //       <div className="header__buttons">
  //         <Button.Group color='black'>
  //           <Button>Акции</Button>
  //           <Button>Контакты</Button>
  //           <Button>Купить</Button>
  //         </Button.Group>
  //       </div>
  //       <div className="header__links">
  //         <ul>
  //           <li><a href="#">Акции</a></li>
  //           <li><a href="#">Контакты</a></li>
  //           <li><a href="#">Купить</a></li>
  //         </ul>
  //       </div>
  //       <div className="header__basket">
  //         Корзина(иконка)
  //       </div>
  //
  //     </header>
  //   )
  // }

}

export default Header