import React from "react";
import hint1 from "../../assets/hint1.png";
import hint2 from "../../assets/hint2.png";
import hint3 from "../../assets/hint3.png";
import hint4 from "../../assets/hint4.png";

import "../../css/hints.css";
import Hint from "./Hint";
import ShowAllHints from "./ShowAllHints";
import useScreenSize from "../hooks/useScreenSize";

const Hints: React.FC = () => {
  const isLaptop = useScreenSize();
  const hints = [
    {
      image: hint1,
      alt: "power tool",
      name: "How much does it cost to finish an apartment?",
      description:
        'Are you standing on the threshold of your own  "M", to which you have just picked up the keys, and with the eye tyranossauraslike',
    },
    {
      image: hint2,
      alt: "power tool",
      name: "Demolition of the load-bearing wall",
      description:
        "Are you planning a home renovation or renovation? Your vision is limited by the load-bearing wall, which you dontwanttoknow",
    },
    {
      image: hint3,
      alt: "power tool",
      name: "What color to paint a hall in a block of flats?",
      description:
        "Matching the right paint is a real challenge. If you are wondering what color to paint your hall with, you can alwaysdothisandrunaway",
    },
    {
      image: hint4,
      alt: "power tool",
      name: "How does a concrete pump work?",
      description:
        "A concrete pump is currently one of the most common equipment used on construction sites. Its operation goesfromthistothat",
    },
  ];

  return (
    <div className="rec">
      {isLaptop ? (
        <>
          <div className="hint">
            <div className="hintAlign">
              <h2>Hints for you</h2>
              <div className="showBig">
                <ShowAllHints />
              </div>
            </div>
            <div className="hints">
              {hints.map((hint, index) => (
                <Hint key={index} hint={hint} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Hints for you</h2>
          <div className="showBig">
            <ShowAllHints />
          </div>
          <div className="hints">
            {hints.map((hint, index) => (
              <Hint key={index} hint={hint} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Hints;
