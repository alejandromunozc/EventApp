import React, { Component } from "react";
import { connect } from "react-redux";
import * as organizationsActions from "../../actions/organizationsActions";
import * as eventsActions from "../../actions/eventsActions";

import HeaderLogo from "../HeaderLogo";

class GetEventsByOrganization extends Component {
  async componentDidMount() {
    // validamos que si no tiene usuarios, traerlos.
    if (!this.props.organizationsReducer.organizations.length) {
      await this.props.getOrganizationRequest();
    }
    this.props.getOrganizationEventsByID(this.props.match.params._id);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <HeaderLogo />
        <h1>Events of {}</h1>
        {this.props.match.params._id}
      </>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetEventsByOrganization);
