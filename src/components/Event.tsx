import React from "react";
import "../css/events.css";

interface Event {
  image: string;
  alt: string;

  name: string;
  dateTime: string;
  description: string;
}

interface EventProps {
  event: Event;
}

const Event: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="events">
      <div className="eventImg">
        <img src={event.image} alt={event.alt} />
      </div>

      <h3>{event.name}</h3>

      <div className="eventDateTime">{event.dateTime}</div>
      <div className="eventDescription">{event.description}</div>
      <div>
        <div>
          <button className="moreEvents">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
