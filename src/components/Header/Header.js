import React, {Component} from 'react';
import './Header.css'
import Logo from '../Logo';

class Header extends Component {

  render() {
    return (
      <header className="header">

        <div className="header__logo">
            <Logo />
        </div>
        <div className="header__links">
          <ul>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Купить</a></li>
          </ul>
        </div>
        <div className="header__basket">
          Корзина(иконка)
        </div>

      </header>
    )
  }

}

export default Header