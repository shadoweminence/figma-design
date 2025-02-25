import React from "react";
import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.png";
import event3 from "../../assets/event3.png";
import event4 from "../../assets/event4.png";

import "../../css/hints.css";

import Event from "../Event";

const Events: React.FC = () => {
  const events = [
    {
      image: event1,
      alt: "electrician event",
      name: "Electrician course for electricians with SEP licence",
      dateTime: "23.05.2021 | London, UK",
      description:
        "This course is conducted in the form of lectures via the Internet and ends with an examination, also online blablabla..",
    },
    {
      image: event2,
      alt: "Interior design event",
      name: "Interior design and decoration",
      dateTime: "04-06.11.2021 | London, UK",
      description:
        "This course is conducted in the form of lectures via the Internet and ends with an examination, also online things other... ",
    },
    {
      image: event3,
      alt: "AutoCAD  event",
      name: "AutoCAD 2d basic level",
      dateTime: "15.06.2021 | London, UK",
      description:
        "This course is conducted in the form of lectures via the Internet and ends with an examination, also online  blablabla...",
    },
    {
      image: event4,
      alt: "power tool",
      name: "Paving engineer with a road construction machine licence",
      dateTime: "31.02.2021 | London, UK",
      description:
        "This course is conducted in the form of lectures via the Internet and ends with an examination, also online  blablabla...",
    },
  ];

  return (
    <div>
      <div className="event">
        <h2>Events for you</h2>
        <div className="events">
          {events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
