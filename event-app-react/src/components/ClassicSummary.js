import React from "react";

import "../Globals.css";
import "./styles/classic.css";
import classicLogoConf from "../img/classic-logo.png";

function ClassicSummary() {
  return (
    <section className="classic__summary">
      <div className="classic__container">
        <h2 className="classic__summary--title">
          The mobile advertising revolution is here.
        </h2>
        <div className="classic__summary--container">
          <div className="classic__summary--logo">
            <img src={classicLogoConf} alt="Logo Conf" />
          </div>
          <div className="classic__summary--content">
            <p>
              This year, 3DAYS hit the road to educate every media buyer in
              America about how mobile is changing everything – from how we
              shop, to how we eat, to how we learn.
            </p>
            <p>
              So far, we’ve spread the good word in New York City, DC,
              Philadelphia and Boston. And now we’re coming to you, Atlanta.
            </p>
            <p>
              Join us for a day of killer keynotes, presentations and networking
              with peers and industry leaders who are shaking up the mobile
              advertising game. We’ve carefully crafted an incredible lineup of
              presenters who are prepared to arm you with new strategies,
              insights and know-how to take your mobile game to the next level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClassicSummary;
