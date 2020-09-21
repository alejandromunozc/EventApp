import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as organizationsActions from "../actions/organizationsActions";
import * as eventsActions from "../actions/eventsActions";

import CardEvent from "./CardEvent";

// No utilizar clases
class EventList extends Component {
  async componentDidMount() {
    // validamos que si no tiene usuarios, traerlos. // Eliminar comentarios
    if (!this.props.organizationsReducer.organizations.length) {
      await this.props.getOrganizationRequest();
    }
    this.props.getOrganizationEventsByID();
  }

  render() {
    return (
      <section className="currentEvents">
        <div className="container">
          <div className="currentEvents__content">
            <div className="currentEvents__title">
              Events <span className="currentEvents__total">1</span>
            </div>
            <div className="currentEvents__list">
              <div className="item__event">
                <img
                  src="https://raw.githubusercontent.com/alejandromunozc/EventApp/frontend/src/assets/img/template-classic.png" // Utiliar CDN
                  alt="Classic"
                />
                <div className="item__title">{}</div>
                <CardEvent />
                <Link className="button" to="/classic">
                  Edit
                </Link>
              </div>
              <div className="item__event">
                <img
                  src="https://raw.githubusercontent.com/alejandromunozc/EventApp/frontend/src/assets/img/template-minimal.png"
                  alt="Minimal"
                />
                <div className="item__title">{}</div>
                <CardEvent />
                <Link className="button" to="/minimalist">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ organizationsReducer, eventsReducer }) => {
  return {
    organizationsReducer,
    eventsReducer,
  };
};

const mapDispatchToProps = {
  ...organizationsActions,
  ...eventsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
