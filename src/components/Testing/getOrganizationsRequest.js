import React, { Component } from "react";
import { connect } from "react-redux";

import * as organizationsActions from "../../actions/organizationsActions";
import HeaderLogo from "../HeaderLogo";

import Spinner from "../Spinner";
import Fatal from "../Fatal";
import OrganizationsTable from "./organizationsTable";

class OrganizationGetRequest extends Component {
  componentDidMount() {
    this.props.getOrganizationRequest();
  }

  putOrganizationList = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }
    return <OrganizationsTable />;
  };

  render() {
    return (
      <>
        <HeaderLogo />
        <h1 className="spinner-error__center">EventApp Organizations</h1>
        <div>{this.putOrganizationList()}</div>
      </>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.organizationsReducer;
};

export default connect(
  mapStateToProps,
  organizationsActions
)(OrganizationGetRequest);
