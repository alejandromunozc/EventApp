import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const OrganizationsTable = (props) => {
  const putOrgRows = () =>
    props.organizations.map((organization) => (
      <tr key={organization._id}>
        <td>
          <Link to={`/organizations/${organization._id}`}>
            {organization._id}
          </Link>
        </td>
        <td>
          <b>{organization.name}</b>
        </td>
        {/* <td>{organization.members}</td> */}
      </tr>
    ));

  return (
    <div>
      <table className="table__testing">
        <thead>
          <tr>
            <th>ID</th>
            <th>Organization Name</th>
            {/* <th>Members</th> */}
          </tr>
        </thead>
        <tbody>{putOrgRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.organizationsReducer;
};

export default connect(mapStateToProps)(OrganizationsTable);
