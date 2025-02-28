import React from "react";
import Events from "./Events";
import ShowAllEvents from "./ShowAllEvents";
import "../../css/flex.css";

const EventMain = () => {
  return (
    <div>
      <Events />
      <div className="showSmall">
        <ShowAllEvents />
      </div>
    </div>
  );
};

export default EventMain;
