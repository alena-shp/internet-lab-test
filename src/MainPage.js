import React from "react"
import "./MainPage.scss"

import logo from "./assets/logo.svg"
import burger from "./assets/burger.svg"
import cup1 from "./assets/cup1.svg"
import cup2 from "./assets/cup2.svg"
import cup3 from "./assets/cup3.png"
import cup4 from "./assets/cup4.svg"
import ec from "./assets/ec.svg"
import instagram from './assets/instagram.svg'
import phone from './assets/phone.svg'
import planet from "./assets/planet.svg"
import russia from "./assets/russia.svg"
import vk from './assets/vk.svg'

const MainPage = () => {
  return (
    <>
      <section className="outside header">
        <div className="inside">
          <div className="header-main">
            <div className="header-main__menu menu">
              <img className="menu__logo" src={logo} alt="" />
              <div className="menu__links">
                <div className="desktop-only">
                  <div className="menu__links-phone">
                    <img src={phone} alt="" />
                    <a href="0#">8 499 999 99 99</a>
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
                  <img src={burger} alt="" />
                </div>
              </div>
            </div>

            <div className="header-main__title">
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
      <section className="outside person">
        <div className="inside">
          <h1 className="person-title">Второй блок</h1>
          <div className="person-inform">
            <div className="person-inform__wrapper">
              <div className="person-inform__content">
                <p className="person-inform__content-surname">Лоремова</p>
                <p className="person-inform__content-name">
                  Ипсума Анатольевна
                </p>
                <p className="person-inform__content-status">
                  Lorem ipsum dolor
                </p>
                <ul className="person-inform__content-reward">
                  <li>lorem ipsum dolorlorem ipsum dolor</li>
                  <li>lorem ipsum dolor</li>
                  <li>
                    lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem{" "}
                  </li>
                  <li>lorem ipsum dolor</li>
                  <li>lorem ipsum dolor</li>
                  <li>lorem ipsum dolor</li>
                </ul>
                <div className="person-inform__content-description description">
                  <h1 className="description__title">Lorem ipsum</h1>
                  <p className="description__text">
                    lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
                    ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
                    dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor
                  </p>
                </div>

                <div className="person-inform__content-description description">
                  <h1 className="description__title">Lorem ipsum</h1>
                  <p className="description__text">
                    lorem ipsum dolorlorem ipsum dolor
                  </p>
                </div>
                <div className="person-inform__photo">
                  <img src="" alt="" />
                </div>
                <div className="person-pagination">
                  <img src="" alt="" />
                  <span>1 из 5</span>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="outside partners">
        <div className="inside">
          <h1 className="partners-title">Третий блок</h1>
          <div className="partners-cards">
            <div className="partners-cards card">
              <img className="card__logo" src="" alt="" />
              <h1 className="card__title">Lorem ipsum dolor sit amet</h1>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-cards card">
              <img className="card__logo" src="" alt="" />
              <h1 className="card__title">Lorem ipsum dolor sit amet</h1>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-cards card">
              <img className="card__logo" src="" alt="" />
              <h1 className="card__title">Lorem ipsum dolor sit amet</h1>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-cards card">
              <img className="card__logo" src="" alt="" />
              <h1 className="card__title">Lorem ipsum dolor sit amet</h1>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-cards card">
              <img className="card__logo" src="" alt="" />
              <h1 className="card__title">Lorem ipsum dolor sit amet</h1>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-cards card">
              <img className="card__logo" src="" alt="" />
              <h1 className="card__title">Lorem ipsum dolor sit amet</h1>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-cards card">
              <img className="card__logo" src="" alt="" />
              <h1 className="card__title">Lorem ipsum dolor sit amet</h1>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in nulla interdum felis placerat vulputate
              </p>
            </div>

            <div className="partners-cards card">
              <img className="card__logo" src="" alt="" />
              <h1 className="card__title">Lorem ipsum dolor sit amet</h1>
              <p className="card__text">
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
          <img className="footer-logo" src="" alt="" />
        </div>
      </section>
    </>
  )
}

export default MainPage
