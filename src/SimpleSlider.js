import React, { Component } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./MainPage.scss"
import border from "./assets/border.png"
import leftarrow from "./assets/leftarrow .svg"
import rightarrow from "./assets/rightarrow.svg"
import photoface from "./assets/photoface.png"

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <section className="outside person">
        <h1 className="person-title">Второй блок</h1>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1} className="person-slid">
            <img
              className="person-slid__border1 desktop-only"
              src={border}
              alt=""
            />
            <div className="person-slid__inform">
              <div className="person-slid__inform-wrapper">
                <div className="person-slid__inform-content content">
                  <p className="content__surname">Лоремова</p>
                  <p className="content__name">Ипсума Анатольевна</p>
                  <p className="content__status">Lorem ipsum dolor</p>
                  <a href="0#" className="content__action mobile-only">
                    Скрыть
                  </a>
                  <ul className="content__reward">
                    <li>lorem ipsum dolorlorem ipsum dolor</li>
                    <li>lorem ipsum dolor</li>
                    <li>
                      lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem{" "}
                    </li>
                    <li>lorem ipsum dolor</li>
                    <li>lorem ipsum dolor</li>
                    <li>lorem ipsum dolor</li>
                  </ul>
                  <div className="content__description description">
                    <h1 className="description__title">Lorem ipsum</h1>
                    <p className="description__text">
                      lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
                      ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
                      dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor
                    </p>
                  </div>

                  <div className="content__description description">
                    <h1 className="description__title">Lorem ipsum</h1>
                    <p className="description__text">
                      lorem ipsum dolorlorem ipsum dolor
                    </p>
                  </div>
                </div>

                <img
                  className="person-slid__inform-photo"
                  src={photoface}
                  alt=""
                />
              </div>
            </div>
            <img
              className="person-slid__border2 desktop-only"
              src={border}
              alt=""
            />
          </div>

          <div key={2}>
            <div>2</div>
          </div>
          <div key={3}>
            <div>3</div>
          </div>
          <div key={4}>
            <div>4</div>
          </div>
        </Slider>
        <div className="person-btn">
          <button className="person-btn__left" onClick={this.previous}>
            <img src={leftarrow} alt="" />
          </button>
          <p className="person-btn__num">1 из 5</p>
          <button className="person-btn__right" onClick={this.next}>
            <img src={rightarrow} alt="" />
          </button>
        </div>
      </section>
    )
  }
}
