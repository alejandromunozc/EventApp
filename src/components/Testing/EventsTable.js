import React from "react";
import { connect } from "react-redux";

const EventsTable = (props) => {
  const putEventRows = () =>
    props.events.map((event) => (
      <tr key={event._id}>
        <td>{event._id}</td>
        <td>
          <b>{event.name}</b>
        </td>
        <td>{event.event_url}</td>
        <td>{event.date}</td>
        <td>{event.city}</td>
        <td>{event.country}</td>
        <td>{event.start_hour}</td>
      </tr>
    ));

  return (
    <div>
      <table className="table__testing">
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Event URL</th>
            <th>Date</th>
            <th>City</th>
            <th>Country</th>
            <th>StartHour</th>
          </tr>
        </thead>
        <tbody>{putEventRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.eventsReducer;
};
export default connect(mapStateToProps)(EventsTable);
