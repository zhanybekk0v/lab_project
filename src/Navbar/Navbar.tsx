import React from 'react'
import background_logo from '../assets/image/mercedes.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="header__content">
          <div className="header__logo">
            <img style={{height:"200px"}} src={background_logo} alt="" />
          </div>
          <div className="header__text">
            <p className="header__lozung">Новый Mercedes-Maybach S-Класс</p>
            <button className="header__btn">
              Посмотреть
            </button>
          </div>
        </div>
        <div className="header__nav">
          <ul className="header__list">
            <li data-tab="tab-1" className="header__item">Actros</li>
            <li data-tab="tab-2" className="header__item">Sprinter</li>
            <li data-tab="tab-3" className="header__item">G-класс</li>
            <li data-tab="tab-4" className="header__item">Maybach</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Navbar