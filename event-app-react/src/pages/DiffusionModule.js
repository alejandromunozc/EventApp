import React from "react";
import { Link } from "react-router-dom";

import "./styles/diffusionmodule.css";

class DiffusionModule extends React.Component {
  render() {
    return (
      <section className="diffusion">
        <div className="container">
          <div className="diffusion__content">
            <div className="diffusion__content--header">
              <div className="diffusion__title">Diffusion Module</div>
              <div className="diffusion__cta">
                <Link to="" className="diffusion__button button">
                  Send email to attends
                </Link>
              </div>
            </div>
            <table className="diffusion__list">
              <thead>
                <th>Email</th>
                <th>Status</th>
              </thead>
              <thead>
                <td>javandresmoreno@gmail.com</td>
                <td>Attending</td>
              </thead>
              <thead>
                <td>israel.castro@gmail.com</td>
                <td>Attending</td>
              </thead>
              <thead>
                <td>alejandromunozc@gmail.com</td>
                <td>Attending</td>
              </thead>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default DiffusionModule;
