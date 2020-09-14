import React from "react";

import "../../../assets/styles/components/templates/minimalisticTemplate/Main.css";

const Main = () => {
  return (
    <main className="minimalistic__main">
      <div className="container">
        <div className="minimalistic__main--info">
          <div className="minimalistic__main--details">
            <div className="minimalistic__main--details-top">
              <div className="minimalistic__main--details-title">When</div>
              <div className="minimalistic__main--details-date">
                <div className="minimalistic__main--date-month">August</div>
                <div className="minimalistic__main--date-day">
                  <span className="minimalistic__main--date-dayStarts">29</span>
                  <span className="minimalistic__main--date-dayEnds">31</span>
                </div>
                <div className="minimalistic__main--date-footer">
                  <span className="minimalistic__main--date-year">2020</span>
                  <span className="minimalistic__main--date-hourStarts">
                    7:00 PM
                  </span>
                  <span className="minimalistic__main--date-hourEnds">
                    10:00 PM
                  </span>
                </div>
              </div>
            </div>
            <div className="minimalistic__main--detaills-title">
              <div className="minimalistic__main--title">
                <h1>Event App Draft</h1>
              </div>
            </div>
            <div className="minimalistic__main--details-summary">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                deleniti velit ratione expedita nihil suscipit? Nisi at esse
                reiciendis aut accusamus. Illo quod iure animi eius vitae culpa
                quisquam et?
              </p>
            </div>
            <div className="minimalistic__main--details-cta">
              <a href="/">Well c'mon</a>
            </div>
            <div className="minimalistic__main--details-location">
              <div className="location__city">Bogotá</div>
              <div className="location__street">Calle #72 Int 9 - 55</div>
              <span className="location__country">Bogotá</span>
              <span className="location__zipcode">81000</span>
            </div>
          </div>
          <div className="minimalistic__main--cover">
            <img
              src="https://images.unsplash.com/photo-1583195590841-926af5f7431e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=650&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
