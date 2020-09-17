import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as organizationsActions from "../../actions/organizationsActions";
import * as eventsActions from "../../actions/eventsActions";

import HeaderLogo from "../HeaderLogo";
import Spinner from "../Spinner";
import Fatal from "../Fatal";
import EventsTable from "../../components/Testing/EventsTable";

class GetEventsByOrganization extends Component {
  async componentDidMount() {
    // validamos que si no tiene usuarios, traerlos.
    if (!this.props.organizationsReducer.organizations.length) {
      await this.props.getOrganizationRequest();
    }
    this.props.getOrganizationEventsByID(this.props.match.params._id);
  }

  putOrganizationList = () => {
    const {
      organizationsReducer,
      organizationsReducer: {
        organizations: { name },
      },
    } = this.props;

    if (
      !organizationsReducer.organizations.length ||
      organizationsReducer.loading
    ) {
      return <Spinner />;
    }
    if (organizationsReducer.error) {
      return <Fatal message={this.props.error} />;
    }

    return (
      <>
        <h1 className="spinner-error__center">Events of {name}</h1>
        <EventsTable />;
      </>
    );
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <HeaderLogo />
        <Link to="/organizations">Go back</Link>
        {this.putOrganizationList()}
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
