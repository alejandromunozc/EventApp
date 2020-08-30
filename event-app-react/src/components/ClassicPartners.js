import React from "react";

class ClassicPartners extends React.Component {
  render() {
    return (
      <section className="classic__partners">
        <div className="classic__container">
          <h2 className="classic__partners--title">About our partners</h2>
          <div className="classic__partners--description">
            <p>
              The Georgia Center Hotel has proudly served Atlanta's corporate
              needs for over 25 years. With 10 ballrooms, an expansive media
              center, multi-media technology and an in-house production staff,
              The Georgia Center excels in creating memorable special events.
            </p>
            <p>
              The Peach Tree is renowned for its healthy preperations of
              decadent Southern classics. Winner of two Eat Up Awards and a
              leader in farm-to-table cuisine, The Peach Tree offers casual-chic
              dining in the heart of Atlanta.
            </p>
          </div>
          <div className="classic__partners--logo">
            <div className="classic__logo--item">
              <img
                className="classic__logo--item-img"
                src="http://d24wuq6o951i2g.cloudfront.net/img/events/id/213/2136839/assets/909.Logo-5-01.png"
                alt=""
              />
            </div>
            <div className="classic__logo--item">
              <img
                className="classic__logo--item-img"
                src="http://d24wuq6o951i2g.cloudfront.net/img/events/id/213/2136839/assets/909.Logo-5-01.png"
                alt=""
              />
            </div>
            <div className="classic__logo--item">
              <img
                className="classic__logo--item-img"
                src="http://d24wuq6o951i2g.cloudfront.net/img/events/id/213/2136839/assets/909.Logo-5-01.png"
                alt=""
              />
            </div>
            <div className="classic__logo--item">
              <img
                className="classic__logo--item-img"
                src="http://d24wuq6o951i2g.cloudfront.net/img/events/id/213/2136839/assets/909.Logo-5-01.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClassicPartners;
