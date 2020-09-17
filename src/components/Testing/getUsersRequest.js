import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as usersActions from "../../actions/usersActions";
import HeaderLogo from "../HeaderLogo";

import Spinner from "../Spinner";
import Fatal from "../Fatal";
import UsersTable from "./usersTable";

class testingGetRequest extends Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }

  putUserList = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }
    return <UsersTable />;
  };

  render() {
    return (
      <>
        <HeaderLogo />
        <Link to="/organizations">Organizations</Link>
        <h1 className="spinner-error__center">EventApp Registered Users</h1>
        <div>{this.putUserList()}</div>
      </>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(testingGetRequest);
