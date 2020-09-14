import React from "react";

import "../../../assets/styles/components/templates/minimalisticTemplate/Main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__info">
          <div className="main__details">
            <div className="main__details--date">
              <div className="details__title">When</div>
              <div className="details__date">
                <div className="date__month">August</div>
                <div className="date__day">
                  <span className="date__day--starts">29</span>
                  <span className="date__day--ends">31</span>
                </div>
                <div className="date__footer">
                  <span className="date__year">2020</span>
                  <span className="date__hour--starts">7:00 PM</span>
                  <span className="date__hour--ends">10:00 PM</span>
                </div>
              </div>
            </div>
            <div className="main__details--title">
              <div className="details__title--event">
                <h1>Event App Draft</h1>
              </div>
            </div>
            <div className="main__details--summary">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                deleniti velit ratione expedita nihil suscipit? Nisi at esse
                reiciendis aut accusamus. Illo quod iure animi eius vitae culpa
                quisquam et?
              </p>
            </div>
            <div className="main__details--cta">
              <a href="/">Well c'mon</a>
            </div>
            <div className="main__details--location">
              <div className="location__city">Bogotá</div>
              <div className="location__street">Calle #72 Int 9 - 55</div>
              <span className="location__country">Bogotá</span>
              <span className="location__zipcode">81000</span>
            </div>
          </div>
          <div className="main__cover">
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
