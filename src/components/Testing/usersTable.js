import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const UsersTable = (props) => {
  const putRows = () =>
    props.users.map((user) => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <Link to={`/events/${user.organization}`}>
            <b>{user.organization}</b>
          </Link>
        </td>
      </tr>
    ));

  return (
    <div>
      <table className="table__testing">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Organization</th>
          </tr>
        </thead>
        <tbody>{putRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps)(UsersTable);
