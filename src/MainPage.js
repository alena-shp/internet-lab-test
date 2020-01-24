import React from "react"
import "./MainPage.scss"

const MainPage = () => {
  return (
    <>
      <section className="outside header">
        <div className="inside">
          <div className="header-menu">
            <img className="header-menu__logo" src="" alt="" />
            <div className="header-menu__links">
              <div className="header-menu__links-phone">
                <img src="" alt="" />
                <a href="0#">8 499 999 99 99</a>
              </div>
              <div className="header-menu__links-social">
                <a href="0#">
                  <img src="" alt="" />
                </a>
                <a href="0#">
                  <img src="" alt="" />
                </a>
              </div>
              <div className="header-menu__links-burger">
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className="header-content">
            <h1 className="header-content__title">
              Lorem ipsum dolor sit amet
            </h1>
            <h3 className="header-content__subtitle">
              lorem ipsum dolor sit amet
            </h3>
            <div className="header-content__rating rating">
              <img className="rating__position" src="" alt="" />
              <img className="rating__country" src="" alt="" />
              <p className="rating__name active">lorem ipsum</p>
            </div>

            <div className="header-content__rating rating">
              <img className="rating__position" src="" alt="" />
              <img className="rating__country" src="" alt="" />
              <p className="rating__name active">Lorem ipsum</p>
            </div>

            <div className="header-content__rating rating">
              <img className="rating__position" src="" alt="" />
              <img className="rating__country" src="" alt="" />
              <p className="rating__name active">Lorem ipsum</p>
            </div>

            <div className="header-content__rating rating">
              <img className="rating__position" src="" alt="" />
              <img className="rating__country" src="" alt="" />
              <p className="rating__name active">Lorem ipsum</p>
            </div>
          </div>
          <div className="header-action">
            <a href="#0">lorem ipsum dolor</a>
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
