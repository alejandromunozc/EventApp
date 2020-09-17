import React from "react";
import { connect } from "react-redux";

const CardEvent = (props) => {
  const putEventInfo = () =>
    props.events.map((event) => (
      <div className="item__details" key={event._id}>
        <div className="item__details--date">{event.date}</div>
        <div className="item__details--hour">{event.start_hour}</div>
        <div className="item__details--location">{event.location}</div>
        <div className="item__details--location">{`${event.city},${event.country}`}</div>
      </div>
    ));

  return <>{putEventInfo()}</>;
};

const mapStateToProps = (reducers) => {
  return reducers.eventsReducer;
};

export default connect(mapStateToProps)(CardEvent);
