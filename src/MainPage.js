import React, { useState } from "react"
import classNames from "classnames"
import { StickyContainer, Sticky } from "react-sticky"

import "./MainPage.scss"

import logo from "./assets/logo.svg"
import cup1 from "./assets/cup1.svg"
import cup2 from "./assets/cup2.svg"
import cup3 from "./assets/cup3.png"
import cup4 from "./assets/cup4.svg"
import ec from "./assets/ec.svg"
import instagram from "./assets/instagram.svg"
import phone from "./assets/phone.svg"
import planet from "./assets/planet.svg"
import russia from "./assets/russia.svg"
import facebook from "./assets/facebook.svg"
import sony from "./assets/sony.svg"
import vk from "./assets/vk.svg"
import amazon from "./assets/amazon.svg"
import compan from "./assets/compan.svg"
import frame from "./assets/frame.png"
import SimpleSlider from "./SimpleSlider"
import BurgerMenu from "./BurgerMenu"

const MainPage = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false)

  const toggleOpenBurgerMenu = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu)
  }

  const getMenuClasses = isSticky =>
    classNames("header-main__menu", "menu", {
      "menu--active": isOpenBurgerMenu || isSticky
    })

  return (
    <StickyContainer>
      <section className="outside header">
        <div className="inside">
          <div className="header-main">
            <Sticky topOffset={30}>
              {({ isSticky }) => (
                <div className={getMenuClasses(isSticky)}>
                  <img
                    className="menu__logo active-burger__logo"
                    src={logo}
                    alt=""
                  />
                  <div className="menu__links">
                    <div className="desktop-only">
                      <div className="menu__links-phone">
                        <img src={phone} alt="" />
                        <span>8 499 999 99 99</span>
                      </div>
                      <div className="menu__links-social">
                        <a href="0#">
                          <img src={instagram} alt="" />
                        </a>
                        <a href="0#">
                          <img src={vk} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="menu__links-burger">
                      <BurgerMenu
                        isOpenBurgerMenu={isOpenBurgerMenu}
                        toggleOpenBurgerMenu={toggleOpenBurgerMenu}
                      />
                    </div>
                  </div>
                </div>
              )}
            </Sticky>

            <div className="header-main__title active-burger-title">
              <h1>Lorem ipsum dolor sit amet</h1>
              <h3>
                <span>lorem</span> ipsum dolor sit amet
              </h3>
            </div>
          </div>
          <div className="header-secondary">
            <a className="header-secondary__action" href="#0">
              lorem ipsum dolor
            </a>
            <div className="header-secondary__rating rating">
              <div className="rating-group">
                <img className="rating-group__position" src={cup1} alt="" />
                <img className="rating-group__country" src={planet} alt="" />
                <a className="rating-group__name active" href="0#">
                  lorem ipsum dol
                </a>
              </div>

              <div className="rating-group">
                <img className="rating-group__position" src={cup2} alt="" />
                <img className="rating-group__country" src={ec} alt="" />
                <a className="rating-group__name " href="0#">
                  lorem ipsum dolor
                </a>
              </div>

              <div className="rating-group">
                <img className="rating-group__position" src={cup3} alt="" />
                <img className="rating-group__country" src={ec} alt="" />
                <a className="rating-group__name " href="0#">
                  lorem ipsum dolor sit amet
                </a>
              </div>

              <div className="rating-group">
                <img className="rating-group__position" src={cup4} alt="" />
                <img className="rating-group__country" src={russia} alt="" />
                <a className="rating-group__name " href="0#">
                  lorem ipsum
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SimpleSlider />
      <section className="outside partners">
        <div className="inside">
          <h1 className="partners-title">Третий блок</h1>
          <div className="partners-years mobile-only">
            <a className="partners-years__year active" href="0#">
              2019
            </a>
            <a className="partners-years__year" href="0#">
              2018
            </a>
            <a className="partners-years__year" href="0#">
              2017
            </a>
            <a className="partners-years__year" href="0#">
              2016
            </a>
            <a className="partners-years__year" href="0#">
              2015
            </a>
            <a className="partners-years__year" href="0#">
              2014
            </a>
            <a className="partners-years__year" href="0#">
              2013
            </a>
            <a className="partners-years__year" href="0#">
              2012
            </a>
            <a className="partners-years__year" href="0#">
              2011
            </a>
          </div>
          <div className="partners-cards">
            <div className="partners-card">
              <img className="partners-card__logo" src={facebook} alt="" />
              <h1 className="partners-card__title">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="partners-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-card">
              <img className="partners-card__logo" src={amazon} alt="" />
              <h1 className="partners-card__title">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="partners-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-card">
              <img className="partners-card__logo" src={sony} alt="" />
              <h1 className="partners-card__title">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="partners-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-card">
              <img className="partners-card__logo" src={compan} alt="" />
              <h1 className="partners-card__title">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="partners-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-card">
              <img className="partners-card__logo" src={facebook} alt="" />
              <h1 className="partners-card__title">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="partners-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-card">
              <img className="partners-card__logo" src={amazon} alt="" />
              <h1 className="partners-card__title">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="partners-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-card">
              <img className="partners-card__logo" src={sony} alt="" />
              <h1 className="partners-card__title">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="partners-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-card">
              <img className="partners-card__logo" src={compan} alt="" />
              <h1 className="partners-card__title">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="partners-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="outside footer">
        <div className="inside">
          <p className="footer-copywriting">© Копирайт 2019</p>
          <img className="footer-logo" src={frame} alt="" />
        </div>
      </section>
    </StickyContainer>
  )
}

export default MainPage
