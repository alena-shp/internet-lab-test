import React from "react"
import classNames from "classnames"
import "./BurgerMenu.scss"

import line1 from "./assets/line1.png"
import phone from "./assets/phone.svg"
import instagram from "./assets/instagram.svg"
import vk from "./assets/vk.svg"

const BurgerMenu = ({ isOpenBurgerMenu, toggleOpenBurgerMenu }) => {
  const menuburger = classNames({
    menu: true,
    "menu--open": isOpenBurgerMenu
  })

  const btnburger = classNames({
    menu__button: true,
    "menu__button--open": isOpenBurgerMenu
  })

  return (
    <div className="burgermenu">
      <div className={btnburger}>
        <span onClick={toggleOpenBurgerMenu}>
          <img src={line1} alt="" className="sticky-burger" />
          <img src={line1} alt="" className="sticky-burger" />
        </span>
      </div>
      <div className={menuburger}>
        <div className="menu__phone mobile-only">
          <img src={phone} alt="" />
          <span>8 499 999 99 99</span>
        </div>
        <ul>
          <li>
            <a href="0#">пункт меню 1</a>
          </li>
          <li>
            <a href="0#">пункт меню 2</a>
          </li>
          <li>
            <a href="0#">пункт меню 3</a>
          </li>
          <li>
            <a href="0#">пункт меню 4</a>
          </li>
          <li>
            <a href="0#">пункт меню 5</a>
          </li>
        </ul>
        <div className="menu__social mobile-only">
          <a href="0#">
            <img src={instagram} alt="" />
          </a>
          <a href="0#">
            <img src={vk} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu
