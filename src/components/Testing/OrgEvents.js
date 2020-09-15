import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";
import * as eventsActions from "../../actions/eventsActions";

import HeaderLogo from "../HeaderLogo";

const { getUsersRequest } = usersActions;
const { getOrganizationEvents } = eventsActions;

class OrganizationEvents extends Component {
  async componentDidMount() {
    // validamos que si no tiene usuarios, traerlos.
    if (!this.props.usersReducer.users.length) {
      await this.props.getUsersRequest();
    }
    this.props.getOrganizationEvents(this.props.match.params.organization);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <HeaderLogo />
        <h1>Events of {}</h1>
        <div>{this.props.match.params.organization}</div>
      </>
    );
  }
}

const mapStateToProps = ({ usersReducer, eventsReducer }) => {
  return {
    usersReducer,
    eventsReducer,
  };
};

const mapDispatchToProps = {
  getUsersRequest,
  getOrganizationEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationEvents);
