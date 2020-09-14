import React from "react";

import "../../../assets/styles/components/templates/minimalisticTemplate/Sponsors.css";

const Sponsors = () => {
  return (
    <section className="minimalistic__sponsors">
      <div className="container">
        <div className="minimalistic__sponsors--info">
          <h2>Thank you to the friends of LifeSwap</h2>
          <hr />
          <div className="minimalistic__sponsors--company">
            <div className="minimalistic__sponsors--company-item">
              <h3 className="minimalistic__sponsors--company-title">
                Sponsor name
              </h3>
              <img
                className="minimalistic__sponsors--company-logo"
                src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/244/2441184/assets/b3a.Logo-15-02.png"
                alt="Sponsor's name"
              />
            </div>
            <div className="minimalistic__sponsors--company-item">
              <h3 className="minimalistic__sponsors--company-title">
                Sponsor name
              </h3>
              <img
                className="minimalistic__sponsors--company-logo"
                src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/244/2441184/assets/cb0.Logo-1-02.png"
                alt="Sponsor's name"
              />
            </div>
            <div className="minimalistic__sponsors--company-item">
              <h3 className="minimalistic__sponsors--company-title">
                Sponsor name
              </h3>
              <img
                className="minimalistic__sponsors--company-logo"
                src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/244/2441184/assets/6b9.Logo-6-02.png"
                alt="Sponsor's name"
              />
            </div>
            <div className="minimalistic__sponsors--company-item">
              <h3 className="minimalistic__sponsors--company-title">
                Sponsor name
              </h3>
              <img
                className="minimalistic__sponsors--company-logo"
                src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/244/2441184/assets/770.Logo-3-02.png"
                alt="Sponsor's name"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
