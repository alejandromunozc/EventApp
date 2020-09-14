import React from "react";

import "../../../assets/styles/components/templates/minimalisticTemplate/Schedule.css";

const Schedule = () => {
  return (
    <section id="schedule" className="schedule">
      <div className="container">
        <div className="schedule__info">
          <h2>People to see</h2>
          <hr />
          <div className="schedule__list">
            <div className="schedule__item">
              <div className="schedule__item--weekDay">Thursday</div>
              <div className="schedule__item--date">
                <div className="date__month">August</div>
                <div className="date__day">29</div>
                <div className="date__footer">
                  <span className="date__year">2020</span>
                  <span className="date__hour">7:00 PM</span>
                </div>
              </div>
            </div>
            <div className="item__descriptions">
              <h3>Meet & Greet</h3>
              <hr />
              <div className="item__descriptions--details">
                <p>
                  Day 1 is about the word on every marketer’s mouth. Everyone’s
                  focusing on it, but it’s not a focused word. What does it mean
                  exactly? Why does it matter? And how do we do it right?
                </p>
                <p>
                  Attend small group workshops about mobile ads, mobile
                  responsive site and mobile app development. Learn about the
                  rapid rise of mobile browsing (and what that means to us) in
                  our interactive globe installation. And hear from Ruth
                  McCarthy, Founder of Mobili Media, about how to get caught up
                  -- and then get ahead.
                </p>
              </div>
            </div>
          </div>
          <div className="schedule__list">
            <div className="schedule__item">
              <div className="schedule__item--weekDay">Friday</div>
              <div className="schedule__item--date">
                <div className="date__month">August</div>
                <div className="date__day">30</div>
                <div className="date__footer">
                  <span className="date__year">2020</span>
                  <span className="date__hour">9:00 PM</span>
                </div>
              </div>
            </div>
            <div className="item__descriptions">
              <h3>Data Driven Marketing</h3>
              <hr />
              <div className="item__descriptions--details">
                <p>
                  We’re capturing more data than ever before. And we’re doing it
                  more precisely. But we’re still not using data to its full
                  potential. Used well, numbers can teach us about each other,
                  inspire our creativity and help us take risks and innovate in
                  our work.
                </p>
                <p>
                  We’re capturing more data than ever before. And we’re doing it
                  more precisely. But we’re still not using data to its full
                  potential. Used well, numbers can teach us about each other,
                  inspire our creativity and help us take risks and innovate in
                  our work.
                </p>
              </div>
            </div>
          </div>
          <div className="schedule__list">
            <div className="schedule__item">
              <div className="schedule__item--weekDay">Saturday</div>
              <div className="schedule__item--date">
                <div className="date__month">August</div>
                <div className="date__day">31</div>
                <div className="date__footer">
                  <span className="date__year">2020</span>
                  <span className="date__hour">9:00 PM</span>
                </div>
              </div>
            </div>
            <div className="item__descriptions">
              <h3>Do Well, and Do Good</h3>
              <hr />
              <div className="item__descriptions--details">
                <p>
                  How do we find meaning in marketing? Is it possible to do more
                  in this industry than help companies sell stuff?
                </p>
                <p>
                  Sure is. Howard Fowler of Tunate Consulting will explain how
                  marketers can use our insights and knowledge about the
                  customer to influence and improve the bigger business
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
