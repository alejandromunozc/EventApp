import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/DiffusionModule.css";

const DiffusionModule = () => {
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
              <tr>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>javandresmoreno@gmail.com</td>
                <td>Attending</td>
              </tr>
              <tr>
                <td>israel.castro@gmail.com</td>
                <td>Attending</td>
              </tr>
              <tr>
                <td>alejandromunozc@gmail.com</td>
                <td>Attending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DiffusionModule;
